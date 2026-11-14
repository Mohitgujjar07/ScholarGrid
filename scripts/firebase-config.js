/**
 * ScholarGrid Firebase Configuration & Cloud Sync
 * - Google Authentication (Popup)
 * - Cloud Firestore Sync (Profile, Attendance, SGPA, Resume, Bookmarks, Roadmap)
 * - Seamless Guest Mode Fallback
 * - Offline Persistence Support
 * - Strictly aligned with firestore.rules schema
 */

(function () {
  // Default Firebase configuration with placeholders.
  // Replace these with your project credentials from Firebase Console:
  // https://console.firebase.google.com/ -> Project Settings -> General -> Your apps
  const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSy_YOUR_API_KEY_HERE",
    authDomain: "scholargrid-bca.firebaseapp.com",
    projectId: "scholargrid-bca",
    storageBucket: "scholargrid-bca.appspot.com",
    messagingSenderId: "102938475610",
    appId: "1:102938475610:web:9a8b7c6d5e4f3a2b1c0d"
  };

  const CUSTOM_CONFIG_KEY = 'scholargrid_firebase_config_custom';
  const PROFILE_STORAGE_KEY = 'scholargrid_user_profile';
  const DEMO_USER_KEY = 'scholargrid_demo_user';

  function getActiveConfig() {
    try {
      const custom = localStorage.getItem(CUSTOM_CONFIG_KEY);
      if (custom) {
        const parsed = JSON.parse(custom);
        if (parsed && parsed.apiKey && parsed.projectId) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse custom Firebase config:', e);
    }
    return DEFAULT_FIREBASE_CONFIG;
  }

  const activeConfig = getActiveConfig();
  const isConfigured = !activeConfig.apiKey.includes('YOUR_API_KEY_HERE');

  let app = null;
  let auth = null;
  let db = null;
  let currentUser = null;
  let authSubscribers = [];

  // Safe Firebase Initialization
  if (typeof firebase !== 'undefined') {
    try {
      if (firebase.apps && firebase.apps.length > 0) {
        app = firebase.apps[0];
      } else {
        app = firebase.initializeApp(activeConfig);
      }

      auth = firebase.auth ? firebase.auth() : null;
      db = firebase.firestore ? firebase.firestore() : null;

      // Enable offline persistence
      if (db) {
        db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
          if (err.code === 'failed-precondition') {
            console.info('ScholarGrid: Persistence active in another tab.');
          } else if (err.code === 'unimplemented') {
            console.info('ScholarGrid: Browser does not support offline persistence.');
          }
        });
      }
    } catch (err) {
      console.warn('ScholarGrid: Firebase init notice (using local guest mode):', err.message);
    }
  }

  // --- Auth Service ---
  const ScholarAuth = {
    isConfigured() {
      return isConfigured && !!auth;
    },

    getActiveConfig() {
      return { ...activeConfig };
    },

    saveCustomConfig(cfg) {
      if (!cfg || !cfg.apiKey || !cfg.projectId) {
        throw new Error('Please provide at least apiKey and projectId.');
      }
      localStorage.setItem(CUSTOM_CONFIG_KEY, JSON.stringify(cfg));
      window.location.reload();
    },

    resetToDefaultConfig() {
      localStorage.removeItem(CUSTOM_CONFIG_KEY);
      window.location.reload();
    },

    getCurrentUser() {
      if (this.isConfigured() && auth && auth.currentUser) {
        return auth.currentUser;
      }
      try {
        const demo = localStorage.getItem(DEMO_USER_KEY);
        return demo ? JSON.parse(demo) : null;
      } catch {
        return null;
      }
    },

    getUserProfile() {
      try {
        const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    },

    saveUserProfileLocally(profile) {
      try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
      } catch {}
    },

    onAuthStateChanged(callback) {
      if (typeof callback !== 'function') return () => {};
      authSubscribers.push(callback);

      // Immediately pass current state
      const initialUser = this.getCurrentUser();
      const initialProfile = this.getUserProfile();
      callback(initialUser, initialProfile);

      // Real Firebase Auth listener
      if (this.isConfigured() && auth) {
        auth.onAuthStateChanged(async (user) => {
          currentUser = user;
          let profile = ScholarAuth.getUserProfile();
          if (user && db) {
            try {
              const cloudProfile = await ScholarSync.getUserProfile(user.uid);
              if (cloudProfile) {
                profile = cloudProfile;
                ScholarAuth.saveUserProfileLocally(profile);
              }
            } catch (err) {
              console.warn('Error fetching cloud profile on auth change:', err);
            }
          }
          callback(user, profile);
        });
      }

      return () => {
        authSubscribers = authSubscribers.filter((cb) => cb !== callback);
      };
    },

    notifySubscribers(user, profile) {
      authSubscribers.forEach((cb) => {
        try {
          cb(user, profile);
        } catch (e) {
          console.error('Error in auth subscriber:', e);
        }
      });
    },

    async signInWithGoogle() {
      if (this.isConfigured() && auth) {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: 'select_account' });
          const result = await auth.signInWithPopup(provider);
          currentUser = result.user;

          let profile = null;
          if (db) {
            profile = await ScholarSync.getUserProfile(result.user.uid);
          }
          if (profile) {
            this.saveUserProfileLocally(profile);
          }
          this.notifySubscribers(result.user, profile);
          return { user: result.user, isNewUser: !profile };
        } catch (error) {
          console.error('Google Sign-In Error:', error);
          throw error;
        }
      }

      // Demo / Guest Mode sign-in (for preview without live GCP project)
      const demoUser = {
        uid: 'demo_google_student_' + Math.random().toString(36).substring(2, 9),
        displayName: 'Mohit Gujjar',
        email: 'mohit.gujjar@gmail.com',
        photoURL: 'https://api.dicebear.com/7.x/bottts/svg?seed=ScholarStudent',
        isDemo: true
      };
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
      currentUser = demoUser;

      const existingProfile = this.getUserProfile();
      this.notifySubscribers(demoUser, existingProfile);
      return { user: demoUser, isNewUser: !existingProfile };
    },

    async signOut() {
      if (this.isConfigured() && auth) {
        await auth.signOut();
      }
      localStorage.removeItem(DEMO_USER_KEY);
      currentUser = null;
      this.notifySubscribers(null, null);
    }
  };

  // --- Firestore Sync Service ---
  const ScholarSync = {
    syncListeners: [],

    onSyncStatus(cb) {
      if (typeof cb === 'function') this.syncListeners.push(cb);
    },

    emitStatus(status, detail) {
      this.syncListeners.forEach((cb) => {
        try {
          cb(status, detail);
        } catch {}
      });
    },

    async getUserProfile(uid) {
      if (!uid) return null;
      if (ScholarAuth.isConfigured() && db) {
        try {
          const docRef = db.collection('users').doc(uid).collection('profile').doc('main');
          const snap = await docRef.get();
          if (snap.exists) return snap.data();

          // Root user doc check
          const rootSnap = await db.collection('users').doc(uid).get();
          if (rootSnap.exists && rootSnap.data().onboardingCompleted) {
            return rootSnap.data();
          }
        } catch (err) {
          console.warn('Error fetching cloud profile:', err);
        }
      }
      return ScholarAuth.getUserProfile();
    },

    async saveUserProfile(uid, profileData) {
      if (!uid || !profileData) return;
      const nowIso = new Date().toISOString();

      const profilePayload = {
        userId: uid,
        uid: uid,
        fullName: profileData.fullName || profileData.displayName || 'BCA Scholar',
        displayName: profileData.displayName || profileData.fullName || 'Scholar',
        email: profileData.email || '',
        phone: profileData.phone || '',
        semester: profileData.semester || 'Sem I',
        college: profileData.college || 'Tumkur University',
        degree: 'Bachelor of Computer Applications (BCA)',
        careerPath: profileData.careerPath || 'Campus Placements',
        targetSGPA: Number(profileData.targetSGPA) || 8.0,
        minAttendanceGoal: Number(profileData.minAttendanceGoal) || 75,
        onboardingAnswers: {
          semester: profileData.semester || 'Sem I',
          college: profileData.college || '',
          graduationYear: profileData.graduationYear || '',
          phone: profileData.phone || '',
          linkedin: profileData.linkedin || '',
          github: profileData.github || '',
          careerPath: profileData.careerPath || '',
          targetSGPA: profileData.targetSGPA || '8.0',
          minAttendanceGoal: profileData.minAttendanceGoal || '75',
          termsAccepted: !!profileData.termsAccepted
        },
        updatedAt: nowIso
      };

      ScholarAuth.saveUserProfileLocally(profilePayload);

      if (ScholarAuth.isConfigured() && db) {
        this.emitStatus('syncing', 'Saving profile to Cloud Firestore...');
        try {
          // Set in subcollection /users/{uid}/profile/main
          await db
            .collection('users')
            .doc(uid)
            .collection('profile')
            .doc('main')
            .set(profilePayload, { merge: true });

          // Set in root user document /users/{uid}
          await db
            .collection('users')
            .doc(uid)
            .set(
              {
                userId: uid,
                uid: uid,
                email: profileData.email || '',
                displayName: profileData.fullName || profileData.displayName || '',
                semester: profileData.semester || 'Sem I',
                college: profileData.college || '',
                careerPath: profileData.careerPath || '',
                targetSGPA: Number(profileData.targetSGPA) || 8.5,
                minAttendanceGoal: Number(profileData.minAttendanceGoal) || 75,
                onboardingCompleted: true,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
              },
              { merge: true }
            );

          this.emitStatus('synced', 'Profile saved to Cloud Firestore');
        } catch (err) {
          console.error('Error saving profile to Firestore:', err);
          this.emitStatus('error', err.message);
        }
      } else {
        this.emitStatus('local', 'Saved locally (Guest / Demo mode)');
      }
    },

    async saveSection(uid, sectionName, data) {
      if (!uid || !sectionName || !ScholarAuth.isConfigured() || !db) return;
      this.emitStatus('syncing', `Syncing ${sectionName}...`);

      let payload = {
        userId: uid,
        uid: uid,
        updatedAt: new Date().toISOString()
      };

      if (sectionName === 'attendance') {
        payload.subjects = Array.isArray(data) ? data : (data.subjects || []);
        payload.target = Number(data.target) || 75;
      } else if (sectionName === 'sgpa_calculator') {
        payload.subjects = Array.isArray(data) ? data : (data.subjects || []);
        payload.sgpa = Number(data.sgpa) || 0;
        payload.semester = data.semester || 'Sem I';
      } else if (sectionName === 'resume') {
        payload = { ...payload, ...data };
      } else if (sectionName === 'bookmarks') {
        payload.pins = Array.isArray(data) ? data : [];
      } else if (sectionName === 'roadmap_progress') {
        payload.completedItems = Array.isArray(data) ? data : [];
      }

      try {
        await db
          .collection('users')
          .doc(uid)
          .collection(sectionName)
          .doc('main')
          .set(payload, { merge: true });
        this.emitStatus('synced', `${sectionName} synced`);
      } catch (err) {
        console.warn(`Error syncing ${sectionName}:`, err);
        this.emitStatus('error', err.message);
      }
    },

    async syncLocalToCloud(uid) {
      if (!uid) return;
      this.emitStatus('syncing', 'Uploading workspace to Cloud Firestore...');

      if (ScholarAuth.isConfigured() && db) {
        try {
          const rawAttendance = localStorage.getItem('scholargrid_attendance_v1');
          const rawSgpa = localStorage.getItem('scholargrid_sgpa_v1');
          const rawResume = localStorage.getItem('scholargrid_resume_v3');
          const rawPins = localStorage.getItem('scholargrid_pins');
          const rawRoadmap = localStorage.getItem('scholargrid_roadmap_progress');

          if (rawAttendance) await this.saveSection(uid, 'attendance', JSON.parse(rawAttendance));
          if (rawSgpa) await this.saveSection(uid, 'sgpa_calculator', JSON.parse(rawSgpa));
          if (rawResume) await this.saveSection(uid, 'resume', JSON.parse(rawResume));
          if (rawPins) await this.saveSection(uid, 'bookmarks', JSON.parse(rawPins));
          if (rawRoadmap) await this.saveSection(uid, 'roadmap_progress', JSON.parse(rawRoadmap));

          this.emitStatus('synced', 'Workspace uploaded to Cloud Firestore');
        } catch (err) {
          console.error('Batch sync error:', err);
          this.emitStatus('error', err.message);
        }
      } else {
        this.emitStatus('synced', 'Local workspace ready');
      }
    },

    async syncCloudToLocal(uid) {
      if (!uid || !ScholarAuth.isConfigured() || !db) return;
      this.emitStatus('syncing', 'Restoring from Cloud Firestore...');

      try {
        const sections = [
          { col: 'attendance', key: 'scholargrid_attendance_v1', extract: d => d.subjects || d },
          { col: 'sgpa_calculator', key: 'scholargrid_sgpa_v1', extract: d => d.subjects ? d : d },
          { col: 'resume', key: 'scholargrid_resume_v3', extract: d => d },
          { col: 'bookmarks', key: 'scholargrid_pins', extract: d => d.pins || d },
          { col: 'roadmap_progress', key: 'scholargrid_roadmap_progress', extract: d => d.completedItems || d }
        ];

        for (const sec of sections) {
          const snap = await db.collection('users').doc(uid).collection(sec.col).doc('main').get();
          if (snap.exists) {
            const data = snap.data();
            const extracted = sec.extract(data);
            if (extracted) {
              localStorage.setItem(sec.key, JSON.stringify(extracted));
            }
          }
        }
        this.emitStatus('synced', 'Workspace restored from Cloud Firestore');
      } catch (err) {
        console.warn('Error downloading from cloud:', err);
        this.emitStatus('error', err.message);
      }
    }
  };

  window.ScholarFirebase = {
    auth: ScholarAuth,
    sync: ScholarSync,
    get rawAuth() { return auth; },
    get rawDb() { return db; },
    get rawApp() { return app; }
  };
})();
