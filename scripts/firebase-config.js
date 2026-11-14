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
    apiKey: "AIzaSyAOJTSKRKi-aIQIjid5kQlQSNcCow4DQw4",
    authDomain: "scholargrid-65385.firebaseapp.com",
    projectId: "scholargrid-65385",
    storageBucket: "scholargrid-65385.firebasestorage.app",
    messagingSenderId: "572157940074",
    appId: "1:572157940074:web:f39d20ef09bd146f271513",
    measurementId: "G-K44GLJJJ07",
    clientId: "572157940074-dp8smfbl0jojjkg417b27bmgkab0aeqt.apps.googleusercontent.com"
  };

  const PROFILE_STORAGE_KEY = 'scholargrid_user_profile';
  const DEMO_USER_KEY = 'scholargrid_demo_user';
  const ANNOUNCEMENTS_KEY = 'scholargrid_announcements';
  const FEEDBACK_KEY = 'scholargrid_feedback_list';

  // Whitelisted Admin Email Accounts (Strict Access)
  const ADMIN_EMAILS = [
    'mohitjgujjar7@gmail.com',
    'lalithulalu@gmail.com'
  ];

  // Always use the real live credentials for scholargrid-65385
  try {
    localStorage.removeItem('scholargrid_firebase_config_custom');
  } catch (e) {}

  const activeConfig = DEFAULT_FIREBASE_CONFIG;
  const isConfigured = true;

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
      return true;
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

    isAdmin(user = null) {
      const u = user || this.getCurrentUser();
      if (!u || !u.email) return false;
      const email = String(u.email).trim().toLowerCase();
      return ADMIN_EMAILS.includes(email);
    },

    getAdminEmails() {
      return [...ADMIN_EMAILS];
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

    signInWithDemo() {
      const demoUser = {
        uid: 'demo_admin_' + Math.random().toString(36).substring(2, 9),
        displayName: 'Mohit J Gujjar',
        email: 'mohitjgujjar7@gmail.com',
        photoURL: 'https://api.dicebear.com/7.x/bottts/svg?seed=MohitAdmin',
        isDemo: true
      };
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
      currentUser = demoUser;

      const existingProfile = this.getUserProfile();
      this.notifySubscribers(demoUser, existingProfile);
      return { user: demoUser, isNewUser: !existingProfile };
    },

    async signInWithGoogle() {
      // 1. If Firebase auth is configured with apiKey
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
          console.warn('Firebase signInWithPopup notice:', error);
        }
      }

      // 2. Direct Google Identity Services (using your Google Client ID)
      const clientId = activeConfig.clientId || '572157940074-dp8smfbl0jojjkg417b27bmgkab0aeqt.apps.googleusercontent.com';
      if (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
        try {
          const googleUser = await new Promise((resolve, reject) => {
            const timeoutTimer = setTimeout(() => {
              reject(new Error('Google OAuth popup closed or origin mismatch'));
            }, 3500);
            const tokenClient = google.accounts.oauth2.initTokenClient({
              client_id: clientId,
              scope: 'email profile openid',
              callback: async (tokenResponse) => {
                clearTimeout(timeoutTimer);
                if (tokenResponse.error) {
                  return reject(new Error(tokenResponse.error));
                }
                try {
                  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
                  });
                  const info = await res.json();
                  resolve(info);
                } catch (e) {
                  reject(e);
                }
              }
            });
            tokenClient.requestAccessToken({ prompt: 'select_account' });
          });

          if (googleUser && googleUser.email) {
            const liveUser = {
              uid: 'google_' + (googleUser.sub || Math.random().toString(36).substring(2, 9)),
              displayName: googleUser.name || 'Scholar Student',
              email: googleUser.email,
              photoURL: googleUser.picture || 'https://api.dicebear.com/7.x/bottts/svg?seed=ScholarStudent',
              isGoogleLive: true
            };
            localStorage.setItem(DEMO_USER_KEY, JSON.stringify(liveUser));
            currentUser = liveUser;

            let profile = ScholarAuth.getUserProfile();
            if (db && ScholarAuth.isConfigured()) {
              try {
                profile = await ScholarSync.getUserProfile(liveUser.uid);
              } catch {}
            }
            if (profile) ScholarAuth.saveUserProfileLocally(profile);
            this.notifySubscribers(liveUser, profile);
            return { user: liveUser, isNewUser: !profile };
          }
        } catch (gisError) {
          console.warn('Google Identity Services notice:', gisError);
        }
      }

      // 3. Simulated Demo Student Account fallback
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

  // =========================================================================
  // ScholarAdmin: Announcements, Student Feedback & System Stats
  // =========================================================================
  const ScholarAdmin = {
    async getAnnouncements() {
      if (db && ScholarAuth.isConfigured()) {
        try {
          const snap = await db.collection('announcements').orderBy('createdAt', 'desc').limit(20).get();
          if (!snap.empty) {
            const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            localStorage.setItem(ANNOUNCEMENTS_KEY, JSON.stringify(list));
            return list;
          }
        } catch (e) {
          console.warn('Firestore announcements read fallback to local cache:', e);
        }
      }
      try {
        const raw = localStorage.getItem(ANNOUNCEMENTS_KEY);
        if (raw) return JSON.parse(raw);
      } catch {}
      return [
        {
          id: 'default-ann-1',
          title: 'Tumkur University NEP BCA Odd Semester Exam Time-Table Declared',
          body: 'Final theory examinations commence from December 15. Download official schedule from the Exam Announcements module.',
          tag: 'Examination',
          urgent: true,
          author: 'mohitjgujjar7@gmail.com',
          createdAt: new Date().toISOString()
        },
        {
          id: 'default-ann-2',
          title: 'Campus Recruitment Prep: New Technical MCQ Engine Active',
          body: 'Practice 200+ solved TCS NQT, Infosys, and Accenture aptitude & coding questions in Practice or Mock mode.',
          tag: 'Placement',
          urgent: false,
          author: 'mohitjgujjar7@gmail.com',
          createdAt: new Date().toISOString()
        }
      ];
    },

    async createAnnouncement({ title, body, tag = 'General', urgent = false }) {
      const user = ScholarAuth.getCurrentUser();
      const newAnn = {
        title: String(title || '').trim(),
        body: String(body || '').trim(),
        tag: String(tag || 'General').trim(),
        urgent: !!urgent,
        author: user?.email || 'mohitjgujjar7@gmail.com',
        createdAt: new Date().toISOString()
      };

      if (db && ScholarAuth.isConfigured() && ScholarAuth.isAdmin()) {
        try {
          const docRef = await db.collection('announcements').add({
            ...newAnn,
            serverTimestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          newAnn.id = docRef.id;
        } catch (e) {
          console.warn('Failed to post announcement to Firestore:', e);
          newAnn.id = 'ann_' + Date.now();
        }
      } else {
        newAnn.id = 'ann_' + Date.now();
      }

      const current = await this.getAnnouncements();
      const updated = [newAnn, ...current.filter(a => a.id !== newAnn.id)];
      localStorage.setItem(ANNOUNCEMENTS_KEY, JSON.stringify(updated));
      return newAnn;
    },

    async deleteAnnouncement(id) {
      if (db && ScholarAuth.isConfigured() && ScholarAuth.isAdmin()) {
        try {
          await db.collection('announcements').doc(id).delete();
        } catch (e) {
          console.warn('Failed to delete announcement from Firestore:', e);
        }
      }
      const current = await this.getAnnouncements();
      const updated = current.filter(a => a.id !== id);
      localStorage.setItem(ANNOUNCEMENTS_KEY, JSON.stringify(updated));
      return true;
    },

    async getFeedback() {
      if (db && ScholarAuth.isConfigured() && ScholarAuth.isAdmin()) {
        try {
          const snap = await db.collection('feedback').orderBy('createdAt', 'desc').limit(50).get();
          if (!snap.empty) {
            const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
            return list;
          }
        } catch (e) {
          console.warn('Firestore feedback fetch notice:', e);
        }
      }
      try {
        const raw = localStorage.getItem(FEEDBACK_KEY);
        if (raw) return JSON.parse(raw);
      } catch {}
      return [
        {
          id: 'fb-demo-1',
          name: 'Priya Sharma',
          email: 'priya.tu@gmail.com',
          category: 'Notes Request',
          subject: 'Need Sem V Cloud Computing handwritten notes',
          message: 'Please add Unit 3 and 4 notes for AWS & Azure architectures if available.',
          status: 'pending',
          createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
        },
        {
          id: 'fb-demo-2',
          name: 'Kiran Kumar',
          email: 'kiran.k@gmail.com',
          category: 'Feedback',
          subject: 'Loved the SGPA calculator & Placement MCQ mode!',
          message: 'The negative marking feature in Mock mode matches TCS NQT perfectly. Thank you!',
          status: 'resolved',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
        }
      ];
    },

    async submitFeedback({ name, email, category, subject, message }) {
      const user = ScholarAuth.getCurrentUser();
      const item = {
        name: name || user?.displayName || 'Anonymous Student',
        email: email || user?.email || 'unregistered@student',
        category: category || 'General',
        subject: subject || 'Feedback',
        message: message || '',
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      if (db && ScholarAuth.isConfigured()) {
        try {
          const docRef = await db.collection('feedback').add({
            ...item,
            userId: user?.uid || null,
            serverTimestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          item.id = docRef.id;
        } catch (e) {
          console.warn('Failed to submit feedback to Firestore:', e);
          item.id = 'fb_' + Date.now();
        }
      } else {
        item.id = 'fb_' + Date.now();
      }

      const list = await this.getFeedback();
      const updated = [item, ...list];
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));
      return item;
    },

    async updateFeedbackStatus(id, newStatus = 'resolved') {
      if (db && ScholarAuth.isConfigured() && ScholarAuth.isAdmin()) {
        try {
          await db.collection('feedback').doc(id).update({
            status: newStatus,
            resolvedAt: new Date().toISOString()
          });
        } catch (e) {
          console.warn('Failed to update feedback status in Firestore:', e);
        }
      }
      const list = await this.getFeedback();
      const updated = list.map(item => item.id === id ? { ...item, status: newStatus } : item);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));
      return true;
    },

    async deleteFeedback(id) {
      if (db && ScholarAuth.isConfigured() && ScholarAuth.isAdmin()) {
        try {
          await db.collection('feedback').doc(id).delete();
        } catch (e) {
          console.warn('Failed to delete feedback in Firestore:', e);
        }
      }
      const list = await this.getFeedback();
      const updated = list.filter(item => item.id !== id);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));
      return true;
    }
  };

  window.ScholarFirebase = {
    auth: ScholarAuth,
    sync: ScholarSync,
    admin: ScholarAdmin,
    ADMIN_EMAILS: [...ADMIN_EMAILS],
    get rawAuth() { return auth; },
    get rawDb() { return db; },
    get rawApp() { return app; }
  };
})();
