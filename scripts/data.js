function pdf(path) {
  return String(path || '').replace(/^\/+/, '');
}

window.SCHOLAR_DATA = {
  brand: {
    name: 'ScholarGrid',
    tagline: 'Your Academic Companion | Learn Smarter. Access Everything.'
  },

  noticesFeed: [
    {
      id: 'n1',
      title: 'Revised NEP (SEP) — Sem II & IV Exam Results, Revaluation & Photocopy',
      date: 'Exam Alert',
      tag: 'Results',
      summary: 'Check latest semester results and revaluation/photocopy notification PDF.',
      url: pdf('/UPLOADS_PDFS_ALL/EXAM_NOTIFICATIONS/Revised%20NEP%20(SEP)%20-%20II%20&%20IV%20Sem%20Results.pdf')
    },
    {
      id: 'n2',
      title: 'Final Exam Time Table — Sem II & IV (Sep 2025–2026)',
      date: 'Approved',
      tag: 'Timetable',
      summary: 'Confirmed university examination schedule PDF.',
      url: pdf('/UPLOADS_PDFS_ALL/EXAM_NOTIFICATIONS/Revised-NEP-SEP-II-IV-Sem-Final-Time-Table.pdf')
    },
    {
      id: 'n3',
      title: 'Official Academic Calendar (2026–2027)',
      date: '2026–2027',
      tag: 'Calendar',
      summary: 'Term dates, internal assessment windows, and academic schedule.',
      url: pdf('/UPLOADS_PDFS_ALL/NOTICE_ANNOUNCEMENTS/2026_27_ac_year.pdf')
    }
  ],

  recentUploads: [
    { title: 'Sem V — Artificial Intelligence Model Question Papers', semester: 'Sem V', tag: 'Model Paper', url: pdf('/UPLOADS_PDFS_ALL/MODEL_PAPERS/SEM5/AI%20Model%20Question%20Papers.pdf') },
    { title: 'Sem III — DBMS Units 1–5 Complete Notes', semester: 'Sem III', tag: 'Notes', url: pdf('/UPLOADS_PDFS_ALL/NOTES/SEM3/DBMS%20Unit%201.pdf') },
    { title: 'Sem IV — Computer Networks Question Bank (Set 1)', semester: 'Sem IV', tag: 'Q-Bank', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM4/CN_S1.pdf') },
    { title: 'Sem I — Logic Design Lab Manual (BCAP 102)', semester: 'Sem I', tag: 'Lab', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM1/LD.pdf') },
    { title: 'Sem V — R Programming Lab Manual (BCAP 502)', semester: 'Sem V', tag: 'Lab', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM5/R%20LAB%20MANUAL.pdf') }
  ],

  modules: [
    { id: 'notes', icon: '📘', title: 'Notes Library', desc: 'Unit-wise lecture notes & PDFs across Semesters I–VI.', badge: 'Sem I–VI', type: 'notes' },
    { id: 'lab-manuals', icon: '💻', title: 'Lab Manuals', desc: 'Complete lab manuals, programs & viva PDFs for Sem I–V.', badge: '16 PDFs', type: 'lab-manuals' },
    { id: 'previous-papers', icon: '📄', title: 'Previous Question Papers', desc: 'University exam papers (2023–2026) by semester.', badge: '2023–2026', type: 'previous-papers' },
    { id: 'important-questions', icon: '⭐', title: 'Important Questions', desc: 'Curated unit-wise question banks & high-probability exam sets.', badge: '23 Sets', type: 'important-questions' },
    { id: 'model-papers', icon: '📝', title: 'Model Papers', desc: 'Sample examination papers with structured marking schemes.', badge: 'Sem V AI', type: 'model-papers' },
    { id: 'syllabus', icon: '📚', title: 'Syllabus Directory', desc: 'BCA Regular (Sem I–VI), AI & ML (Sem I–II), and Compulsory PDFs.', badge: '10 PDFs', type: 'cards' },
    { id: 'ebooks', icon: '📖', title: 'E-books Library', desc: 'Digital textbook catalog across 6 CS domains (Coming Soon).', badge: '6 Domains', type: 'ebooks' },
    { id: 'video-tutorials', icon: '🎬', title: 'Video Tutorials', desc: '9 instant YouTube subject searches & 9 curated channels.', badge: '18 Links', type: 'videos' },
    { id: 'certifications', icon: '🏅', title: 'Industry Certifications', desc: '29+ free & recognized certs from Harvard, Google, Microsoft, AWS & IBM.', badge: '29 Links', type: 'cards' },
    { id: 'learning-platforms', icon: '🌐', title: 'Learning Platforms', desc: '20 top coding, documentation, and practice portals.', badge: '20 Platforms', type: 'cards' },
    { id: 'roadmaps', icon: '🧭', title: 'Learning Roadmaps', desc: '12 career tracks with roadmap.sh links & interactive checklists.', badge: '12 Tracks', type: 'roadmaps' },
    { id: 'ai-tools', icon: '🤖', title: 'AI Tools Resource Hub', desc: '68 curated AI tools across 12 categories with pricing badges.', badge: '68 Tools', type: 'ai-tools' },
    { id: 'placement-cell', icon: '💼', title: 'Placement Cell', desc: '6-step placement roadmap, skill benchmarks & drive status.', badge: 'Careers', type: 'placement' },
    { id: 'career-development', icon: '🚀', title: 'Career Development', desc: '9 structured modules for resumes, interviews, aptitude & internships.', badge: '9 Tracks', type: 'cards' },
    { id: 'exam-announcements', icon: '📢', title: 'Exam Announcements', desc: 'NEP/SEP results, revaluation, draft & final exam timetables.', badge: '3 PDFs', type: 'cards' },
    { id: 'notices', icon: '🏛️', title: 'Campus Notices & Updates', desc: 'Program structures, Academic Calendar 2026–27 & Holiday List.', badge: '4 PDFs', type: 'cards' },
    { id: 'sgpa-calculator', icon: '🧮', title: 'SGPA & CGPA Calculator', desc: 'Pre-loaded Sem I–VI credits, internal marks & instant GPA calculation.', badge: 'Tool', type: 'tool' },
    { id: 'attendance-tracker', icon: '📅', title: 'Attendance & IA Tracker', desc: 'Track 75% mandatory attendance, safe-to-miss buffer & IA marks.', badge: 'Tool', type: 'tool' },
    { id: 'code-playground', icon: '⚡', title: 'Code Playground & Viva', desc: 'C, Java, Python & SQL lab programs, live Python runner & Top 10 Viva Q&As.', badge: 'Interactive', type: 'tool' },
    { id: 'formula-sheets', icon: '📐', title: 'Formula & Cheat Sheets', desc: '1-page condensed revision sheets for Discrete Math, COLD, DAA & AI.', badge: 'Revision', type: 'tool' },
    { id: 'resume-builder', icon: '📄', title: 'ATS Resume Builder', desc: 'Live single-page ATS resume builder with project presets & PDF export.', badge: 'Career', type: 'tool' },
    { id: 'mcq-quiz', icon: '🎯', title: 'MCQ & Aptitude Quiz', desc: 'Timed Core CS (DBMS, OS, CN) & Aptitude quizzes with explanations.', badge: 'Practice', type: 'tool' }
  ],

  notesBySemester: {
    'Sem I': [
      {
        code: 'BCAT 101', name: 'Discrete Mathematics',
        pdfs: [
          { label: 'Unit 3', url: pdf('/UPLOADS_PDFS_ALL/NOTES/SEM1/Discrete%20Mathematics%20Unit-3.pdf') },
          { label: 'Unit 4', url: pdf('/UPLOADS_PDFS_ALL/NOTES/SEM1/Discrete%20Mathematics%20Unit-4.pdf') },
          { label: 'Unit 5', url: pdf('/UPLOADS_PDFS_ALL/NOTES/SEM1/Discrete%20Mathematics%20Unit-5.pdf') }
        ]
      },
      {
        code: 'BCAT 103', name: 'Principles of Programming Languages (PPL)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM1/PPL-Unit%20${u}.pdf`) }))
      },
      {
        code: 'BCAT 105', name: 'Computer Organization & Logic Design (COLD)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM1/cold%20unit%20${u}.pdf`) }))
      },
      {
        code: 'AECC', name: 'Languages (Kannada, Sanskrit, Hindi, English) & EVS',
        pdfs: [], status: '2 PDFs per Language & 1 EVS PDF on portal'
      }
    ],
    'Sem II': [
      { code: 'SEM II', name: 'Discrete Math, Data Structures, Java, CV-II & Languages', pdfs: [], status: 'Uploaded Soon / Under Preparation' }
    ],
    'Sem III': [
      {
        code: 'BCAT 301', name: 'Operating Systems (OS)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM3/OS%20Unit%20${u}.pdf`) }))
      },
      {
        code: 'BCAT 303', name: 'Database Management Systems (DBMS)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM3/DBMS%20Unit%20${u}.pdf`) }))
      },
      {
        code: 'BCAT 305', name: 'Python Programming',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM3/Python%20Unit%20${u}.pdf`) }))
      },
      {
        code: 'BCAT 307', name: 'Computer Architecture (CA)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM3/CA%20Unit%20${u}.pdf`) }))
      }
    ],
    'Sem IV': [
      {
        code: 'BCAT 401', name: 'Computer Networks (CN)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM4/CN%20Unit%20${u}.pdf`) }))
      },
      {
        code: 'BCAT 403', name: 'Internet of Things (IoT)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM4/IoT%20Unit%20${u}.pdf`) }))
      },
      { code: 'BCAT 405', name: 'ADA & Web Technologies', pdfs: [], status: 'Uploaded Soon' }
    ],
    'Sem V': [
      {
        code: 'BCAT 501', name: 'Artificial Intelligence (AI)',
        pdfs: [1, 2, 3, 4, 5].map((u) => ({ label: `Unit ${u}`, url: pdf(`/UPLOADS_PDFS_ALL/NOTES/SEM5/AI%20Unit%20${u}.pdf`) }))
      },
      { code: 'ELECTIVES', name: 'Other Sem V Electives', pdfs: [], status: 'Uploaded Soon' }
    ],
    'Sem VI': [
      { code: 'SEM VI', name: 'Cybersecurity, Machine Learning & Electives', pdfs: [], status: 'Uploaded Soon' }
    ]
  },

  labsBySemester: {
    'Sem I': [
      { code: 'BCAP 102', name: 'Logic Design Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM1/LD.pdf') }] },
      { code: 'BCAP 104', name: 'MS Office & PPL Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM1/PPL.pdf') }] },
      { code: 'BCAP 106', name: 'Programming in C — Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM1/C.pdf') }] }
    ],
    'Sem II': [
      { code: 'BCAP 202', name: 'Data Structures Lab', pdfs: [], status: 'Part A & Part B Manual on portal' },
      { code: 'BCAP 204', name: 'Java Programming Lab', pdfs: [], status: 'Part A & Part B Manual on portal' },
      { code: 'BCAP 206', name: 'Web Design Lab', pdfs: [], status: 'Part A & Part B Manual on portal' }
    ],
    'Sem III': [
      { code: 'BCAP 302', name: 'Operating Systems Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM3/OS_LAB.pdf') }] },
      { code: 'BCAP 304', name: 'DBMS Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM3/DBMS_LAB.pdf') }] },
      { code: 'BCAP 306', name: 'Python Programming Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM3/PYTHON_LAB.pdf') }] }
    ],
    'Sem IV': [
      { code: 'BCAP 402', name: 'Design & Analysis of Algorithms Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM4/ADA_LAB.pdf') }] },
      { code: 'BCAP 404', name: 'Computer Networks Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM4/CN_LAB.pdf') }] },
      { code: 'BCAP 406', name: 'Web Programming Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM4/WEB_LAB.pdf') }] }
    ],
    'Sem V': [
      { code: 'BCAP 502', name: 'R Programming Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM5/R%20LAB%20MANUAL.pdf') }] },
      { code: 'BCAP 504', name: 'Artificial Intelligence Lab', pdfs: [{ label: 'Download Manual PDF', url: pdf('/UPLOADS_PDFS_ALL/LAB_MANUALS/SEM5/AI_ML%20lab.pdf') }] }
    ],
    'Sem VI': [
      { code: 'SEM VI', name: 'Final Semester Labs', pdfs: [], status: 'Uploaded Soon' }
    ]
  },

  previousPapersBySemester: {
    'Sem I': [
      {
        code: 'BCAT 101', name: 'Discrete Mathematics',
        pdfs: [
          { label: '2025 Paper', url: pdf('/UPLOADS_PDFS_ALL/PREVIOUS_PAPERS/SEM1/MATHS_2025.pdf') },
          { label: '2026 Paper', url: pdf('/UPLOADS_PDFS_ALL/PREVIOUS_PAPERS/SEM1/MATHS_2026.pdf') }
        ]
      }
    ],
    'Sem II': [
      { code: 'BCAT 201', name: 'Discrete Mathematics (2023, 2024, 2025)', pdfs: [], status: 'Added progressively as university exam cycles conclude' }
    ],
    'Sem III': [{ code: 'SEM III', name: 'All Subjects', pdfs: [], status: 'Uploaded Soon' }],
    'Sem IV': [{ code: 'SEM IV', name: 'All Subjects', pdfs: [], status: 'Uploaded Soon' }],
    'Sem V': [{ code: 'SEM V', name: 'All Subjects', pdfs: [], status: 'Uploaded Soon' }],
    'Sem VI': [{ code: 'SEM VI', name: 'All Subjects', pdfs: [], status: 'Uploaded Soon' }]
  },

  importantQuestionsBySemester: {
    'Sem I': [
      {
        code: 'BCAT 101', name: 'Computer Organization & Logic Design (COLD)',
        pdfs: [1, 2, 3].map((s) => ({ label: `Set ${s}`, url: pdf(`/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM1/COLD_S${s}.pdf`) }))
      },
      {
        code: 'BCAT 103', name: 'Principles of Programming Languages (PPL)',
        pdfs: [1, 2].map((s) => ({ label: `Set ${s}`, url: pdf(`/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM1/PPL_S${s}.pdf`) }))
      },
      {
        code: 'BCAT 105', name: 'C Programming',
        pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM1/C_S1.pdf') }]
      }
    ],
    'Sem II': [
      { code: 'MATHS', name: 'Discrete Mathematics', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM2/MATHS_S1.pdf') }] },
      { code: 'DS', name: 'Data Structures', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM2/DS_1.pdf') }] },
      { code: 'JAVA', name: 'Java Programming', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM2/JAVA_S1.pdf') }] }
    ],
    'Sem III': [
      { code: 'OS', name: 'Operating Systems', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM3/OS_S1.pdf') }] },
      { code: 'DBMS', name: 'Database Management Systems', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM3/DBMS_S1.pdf') }] },
      { code: 'PYTHON', name: 'Python Programming', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM3/PYTHON_S1.pdf') }] },
      { code: 'CA', name: 'Computer Architecture', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM3/CA_S1.pdf') }] }
    ],
    'Sem IV': [
      { code: 'WEB', name: 'Web Technologies', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM4/WEB_S1.pdf') }] },
      {
        code: 'IOT', name: 'Internet of Things',
        pdfs: [1, 2].map((s) => ({ label: `Set ${s}`, url: pdf(`/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM4/IOT_S${s}.pdf`) }))
      },
      {
        code: 'CN', name: 'Computer Networks',
        pdfs: [1, 2].map((s) => ({ label: `Set ${s}`, url: pdf(`/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM4/CN_S${s}.pdf`) }))
      },
      { code: 'ADA', name: 'Design & Analysis of Algorithms', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM4/ADA_S1.pdf') }] }
    ],
    'Sem V': [
      { code: 'AI', name: 'Fundamentals of Artificial Intelligence', pdfs: [{ label: 'Set 1', url: pdf('/UPLOADS_PDFS_ALL/IMPORTANT_QUESTION_BANKS/SEM5/AI_S1.pdf') }] }
    ],
    'Sem VI': [{ code: 'SEM VI', name: 'Question Banks', pdfs: [], status: 'Under Preparation' }]
  },

  modelPapersBySemester: {
    'Sem V': [
      {
        code: 'AI', name: 'Artificial Intelligence Model Question Papers',
        pdfs: [{ label: 'Download Model Paper PDF', url: pdf('/UPLOADS_PDFS_ALL/MODEL_PAPERS/SEM5/AI%20Model%20Question%20Papers.pdf') }]
      }
    ],
    'Sem I': [{ code: 'SEM I', name: 'Model Papers', pdfs: [], status: 'Under Preparation' }],
    'Sem II': [{ code: 'SEM II', name: 'Model Papers', pdfs: [], status: 'Under Preparation' }],
    'Sem III': [{ code: 'SEM III', name: 'Model Papers', pdfs: [], status: 'Under Preparation' }],
    'Sem IV': [{ code: 'SEM IV', name: 'Model Papers', pdfs: [], status: 'Under Preparation' }],
    'Sem VI': [{ code: 'SEM VI', name: 'Model Papers', pdfs: [], status: 'Under Preparation' }]
  },

  syllabus: [
    { title: 'BCA Regular — Semester I Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem I', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem1.PDF') },
    { title: 'BCA Regular — Semester II Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem II', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem2.pdf') },
    { title: 'BCA Regular — Semester III Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem III', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem3.pdf') },
    { title: 'BCA Regular — Semester IV Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem IV', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem4.pdf') },
    { title: 'BCA Regular — Semester V Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem V', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem5.pdf') },
    { title: 'BCA Regular — Semester VI Syllabus', desc: 'Tumkur University SEP Syllabus', badge: 'Sem VI', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/dk_sem6.pdf') },
    { title: 'BCA AI & ML Specialisation (Sem I & II)', desc: 'AI & ML Track Syllabus PDF', badge: 'AI & ML', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/BCA-AIML-Syllabus-ist-and-2nd-sem.pdf') },
    { title: 'Constitutional Values (CV) — Sem I', desc: 'Compulsory Paper Syllabus', badge: 'Compulsory', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/CV1.pdf') },
    { title: 'Constitutional Values (CV) — Sem II', desc: 'Compulsory Paper Syllabus', badge: 'Compulsory', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/CV2.pdf') },
    { title: 'Environmental Studies (EVS) — Sem IV', desc: 'Compulsory Paper Syllabus', badge: 'Compulsory', url: pdf('/UPLOADS_PDFS_ALL/SYLLABUS/evs.pdf') }
  ],

  ebooks: [
    { title: 'Programming', desc: 'C, Java, Python & Data Structures textbooks.', badge: 'Coming Soon' },
    { title: 'Networking', desc: 'Computer Networks & Protocol design references.', badge: 'Coming Soon' },
    { title: 'Database', desc: 'DBMS, SQL & Relational modeling texts.', badge: 'Coming Soon' },
    { title: 'Artificial Intelligence', desc: 'AI, Search, Knowledge Rep & ML texts.', badge: 'Coming Soon' },
    { title: 'Cloud Computing', desc: 'Distributed systems & cloud fundamentals.', badge: 'Coming Soon' },
    { title: 'Cybersecurity', desc: 'Cryptography & network defense textbooks.', badge: 'Coming Soon' }
  ],

  videoSubjects: [
    { name: 'Artificial Intelligence', url: 'https://www.youtube.com/results?search_query=Artificial+Intelligence+full+course+tutorial' },
    { name: 'Python Programming', url: 'https://www.youtube.com/results?search_query=Python+programming+full+course+for+beginners' },
    { name: 'Data Structures', url: 'https://www.youtube.com/results?search_query=Data+Structures+and+Algorithms+full+course' },
    { name: 'Java Programming', url: 'https://www.youtube.com/results?search_query=Java+programming+full+course+for+beginners' },
    { name: 'DBMS', url: 'https://www.youtube.com/results?search_query=DBMS+full+course+tutorial' },
    { name: 'Operating Systems', url: 'https://www.youtube.com/results?search_query=Operating+System+full+course+tutorial' },
    { name: 'Computer Networks', url: 'https://www.youtube.com/results?search_query=Computer+Networks+full+course+tutorial' },
    { name: 'Web Development', url: 'https://www.youtube.com/results?search_query=Web+development+full+course+HTML+CSS+JavaScript' },
    { name: 'Software Engineering', url: 'https://www.youtube.com/results?search_query=Software+Engineering+full+course+tutorial' }
  ],

  videoChannels: [
    { name: 'CodeWithHarry', focus: 'C, Python, Web Dev, DSA', url: 'https://www.youtube.com/@CodeWithHarry' },
    { name: 'Apna College', focus: 'Java, DSA, Placement Prep', url: 'https://www.youtube.com/@ApnaCollegeOfficial' },
    { name: 'Gate Smashers', focus: 'OS, DBMS, CN, COA, TOC', url: 'https://www.youtube.com/@GATESmashers' },
    { name: "Jenny's Lectures", focus: 'C, Data Structures, Algorithms', url: 'https://www.youtube.com/@JennysLecturesCSIT' },
    { name: 'freeCodeCamp', focus: 'Full-length CS & Dev Courses', url: 'https://www.youtube.com/@freecodecamp' },
    { name: 'Telusko', focus: 'Java, Spring, Python, Backend', url: 'https://www.youtube.com/@Telusko' },
    { name: 'takeUforward', focus: 'Striver A2Z DSA & Interviews', url: 'https://www.youtube.com/@takeUforward' },
    { name: 'Chai aur Code', focus: 'JavaScript, React, Backend', url: 'https://www.youtube.com/@ChaiaurCode' },
    { name: 'Kunal Kushwaha', focus: 'Java, DSA, Git, DevOps', url: 'https://www.youtube.com/@KunalKushwaha' }
  ],

  certifications: [
    { title: 'Introduction to Cybersecurity (Cisco)', desc: 'Cisco Networking Academy cybersecurity fundamentals.', badge: 'Free', url: 'https://www.netacad.com/courses/cybersecurity' },
    { title: 'Harvard CS50', desc: 'CS50x Introduction to Computer Science on edX.', badge: 'Free Audit', url: 'https://www.edx.org/cs50' },
    { title: 'Python for Everybody (Coursera)', desc: 'University of Michigan Python specialization.', badge: 'Coursera', url: 'https://www.coursera.org/specializations/python' },
    { title: 'Full Stack Web Development', desc: 'freeCodeCamp interactive certifications.', badge: 'Free', url: 'https://www.freecodecamp.org/' },
    { title: 'Google Data Analytics', desc: 'Coursera professional certificate.', badge: 'Coursera', url: 'https://www.coursera.org/professional-certificates/google-data-analytics' },
    { title: 'Microsoft Azure Fundamentals (AZ-900)', desc: 'Microsoft Learn official cloud path.', badge: 'Free Path', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/' },
    { title: 'AWS Certified Cloud Practitioner', desc: 'AWS cloud certification & exam guide.', badge: 'AWS', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
    { title: 'Data Analytics Essentials (Cisco)', desc: 'Data analytics foundations by Cisco NetAcad.', badge: 'Free', url: 'https://www.netacad.com/courses/data-analytics' },
    { title: 'Meta Front-End Developer', desc: 'React, JS, and UI/UX professional certificate.', badge: 'Coursera', url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer' },
    { title: 'GitHub Foundations', desc: 'GitHub Skills hands-on repositories & workflows.', badge: 'Free', url: 'https://github.com/skills' },
    { title: 'IBM AI Fundamentals', desc: 'IBM SkillsBuild AI & ethics credentials.', badge: 'Free', url: 'https://skillsbuild.org/' },
    { title: 'MongoDB Basics (M001)', desc: 'MongoDB University official training.', badge: 'Free', url: 'https://university.mongodb.com/' },
    { title: 'Docker 101 Tutorial', desc: 'Containers & Docker fundamentals.', badge: 'Free', url: 'https://www.docker.com/101-tutorial/' },
    { title: 'Google AI Essentials', desc: 'Practical AI productivity & prompting by Google.', badge: 'Google', url: 'https://grow.google/ai-essentials/' },
    { title: 'Free Udemy Courses', desc: 'Curated catalog of free Udemy tech courses.', badge: 'Free', url: 'https://www.udemy.com/courses/free/' },
    { title: 'Cisco Networking', desc: 'CCNA & networking fundamentals on NetAcad.', badge: 'Cisco', url: 'https://www.netacad.com/' },
    { title: 'Google Cloud Digital Leader', desc: 'Google Cloud certification track.', badge: 'Google Cloud', url: 'https://cloud.google.com/learn/certification/cloud-digital-leader' },
    { title: 'Oracle MyLearn', desc: 'Oracle Java, SQL & OCI learning portal.', badge: 'Oracle', url: 'https://mylearn.oracle.com/' },
    { title: 'NPTEL / SWAYAM', desc: 'IIT/IISc university-credit online courses.', badge: 'Free', url: 'https://nptel.ac.in/' },
    { title: 'Salesforce Trailhead', desc: 'Gamified CRM & cloud developer trails.', badge: 'Free', url: 'https://trailhead.salesforce.com/' },
    { title: 'Google Skillshop', desc: 'Google Ads, Analytics & Workspace.', badge: 'Portal', url: 'https://skillshop.withgoogle.com' },
    { title: 'Microsoft Learn', desc: 'Azure, GitHub, AI & .NET modules.', badge: 'Portal', url: 'https://learn.microsoft.com' },
    { title: 'AWS Skill Builder', desc: 'AWS cloud labs & practice exams.', badge: 'Portal', url: 'https://skillbuilder.aws' },
    { title: 'Oracle University', desc: 'Enterprise database & Java training.', badge: 'Portal', url: 'https://education.oracle.com' },
    { title: 'NVIDIA DLI', desc: 'Deep Learning Institute courses.', badge: 'Portal', url: 'https://www.nvidia.com/en-us/training/' },
    { title: 'Docker Training', desc: 'Official container workshops.', badge: 'Portal', url: 'https://www.docker.com/resources/trainings/' }
  ],

  learningPlatforms: [
    { title: 'freeCodeCamp', desc: 'Full-stack, Python, and data science curriculum.', badge: 'Free', url: 'https://www.freecodecamp.org/' },
    { title: 'GeeksforGeeks', desc: 'DSA, CS core subjects, and interview prep.', badge: 'Freemium', url: 'https://www.geeksforgeeks.org/' },
    { title: 'W3Schools', desc: 'Quick web & SQL syntax tutorials.', badge: 'Free', url: 'https://www.w3schools.com/' },
    { title: 'MDN Web Docs', desc: 'Authoritative HTML, CSS, and JS reference.', badge: 'Free', url: 'https://developer.mozilla.org/' },
    { title: 'Microsoft Learn', desc: 'Interactive Azure & developer docs.', badge: 'Free', url: 'https://learn.microsoft.com/' },
    { title: 'Google Skillshop', desc: 'Google product & analytics catalog.', badge: 'Free', url: 'https://skillshop.exceedlms.com/student/catalog' },
    { title: 'IBM SkillsBuild', desc: 'AI, cloud, and cybersecurity learning.', badge: 'Free', url: 'https://skillsbuild.org/' },
    { title: 'AWS Skill Builder', desc: 'Cloud computing labs and courses.', badge: 'Freemium', url: 'https://skillbuilder.aws/' },
    { title: 'DataCamp', desc: 'Python, R, SQL, and ML exercises.', badge: 'Freemium', url: 'https://www.datacamp.com/' },
    { title: 'Kaggle Learn', desc: 'Micro-courses in Pandas, ML, and Vision.', badge: 'Free', url: 'https://www.kaggle.com/learn' },
    { title: 'LeetCode', desc: 'Coding interview problems & contests.', badge: 'Freemium', url: 'https://leetcode.com/' },
    { title: 'HackerRank', desc: 'Skill certifications & coding challenges.', badge: 'Free', url: 'https://www.hackerrank.com/' },
    { title: 'Coursera', desc: 'University degrees & professional certs.', badge: 'Freemium', url: 'https://www.coursera.org/' },
    { title: 'edX', desc: 'Harvard, MIT & university courses.', badge: 'Freemium', url: 'https://www.edx.org/' },
    { title: 'Harvard CS50', desc: 'CS50x official course portal.', badge: 'Free', url: 'https://cs50.harvard.edu/x/' },
    { title: 'Cisco NetAcad', desc: 'Networking & cybersecurity academies.', badge: 'Free', url: 'https://www.netacad.com/' },
    { title: 'Oracle MyLearn', desc: 'Oracle Cloud & Java training.', badge: 'Freemium', url: 'https://mylearn.oracle.com/' },
    { title: 'GitHub Skills', desc: 'Interactive Git & GitHub courses.', badge: 'Free', url: 'https://github.com/skills' },
    { title: 'Frontend Mentor', desc: 'Real-world HTML/CSS/JS UI challenges.', badge: 'Freemium', url: 'https://www.frontendmentor.io/' },
    { title: 'DevDocs', desc: 'Unified offline-ready API documentation.', badge: 'Free', url: 'https://devdocs.io/' }
  ],

  roadmaps: [
    { id: 'software', title: 'Software Developer', url: 'https://roadmap.sh/software-design-architecture', skills: ['Data Structures & Algorithms', 'OOP & SOLID Principles', 'Design Patterns', 'System Design Basics', 'Git & Testing'] },
    { id: 'frontend', title: 'Frontend Developer', url: 'https://roadmap.sh/frontend', skills: ['Semantic HTML5 & Accessibility', 'Modern CSS (Flexbox, Grid)', 'JavaScript ES6+ & TypeScript', 'React / Next.js', 'Web Performance & Testing'] },
    { id: 'backend', title: 'Backend Developer', url: 'https://roadmap.sh/backend', skills: ['Node.js / Python / Java', 'REST & GraphQL APIs', 'PostgreSQL & MongoDB', 'JWT / OAuth2 Auth', 'Caching, Queues & Docker'] },
    { id: 'fullstack', title: 'Full Stack Developer', url: 'https://roadmap.sh/full-stack', skills: ['HTML, CSS, JS/TS', 'React / Next.js Frontend', 'Node.js / Express Backend', 'Relational & NoSQL DBs', 'CI/CD & Cloud Deployment'] },
    { id: 'python', title: 'Python Developer', url: 'https://roadmap.sh/python', skills: ['Core Python & OOP', 'Virtualenvs, uv & Packaging', 'FastAPI / Django', 'Pandas & Automation', 'Pytest & Type Hints'] },
    { id: 'java', title: 'Java Developer', url: 'https://roadmap.sh/java', skills: ['Core Java & Collections', 'Streams & Concurrency', 'Spring Boot & JPA', 'REST APIs & Microservices', 'JUnit & Maven/Gradle'] },
    { id: 'data', title: 'Data Analyst', url: 'https://roadmap.sh/data-analyst', skills: ['Excel & Spreadsheets', 'SQL Joins & Window Functions', 'Python (Pandas, Matplotlib)', 'Power BI / Tableau', 'Statistics & A/B Testing'] },
    { id: 'aiml', title: 'AI & Machine Learning', url: 'https://roadmap.sh/ai-data-scientist', skills: ['Python, NumPy & Linear Algebra', 'Scikit-Learn & Classical ML', 'PyTorch / TensorFlow', 'NLP, Transformers & LLMs', 'RAG & Model Evaluation'] },
    { id: 'cloud', title: 'Cloud Engineer', url: 'https://roadmap.sh/aws', skills: ['Linux & Networking', 'AWS / Azure Core Services', 'Docker & Kubernetes', 'Terraform IaC', 'Monitoring & IAM Security'] },
    { id: 'cyber', title: 'Cyber Security', url: 'https://roadmap.sh/cyber-security', skills: ['TCP/IP, DNS & HTTP', 'Linux & Windows Internals', 'OWASP Top 10', 'Wireshark, Nmap & Burp Suite', 'Incident Response & Defense'] },
    { id: 'android', title: 'Android Developer', url: 'https://roadmap.sh/android', skills: ['Kotlin Fundamentals', 'Jetpack Compose UI', 'MVVM & Coroutines', 'Room DB & Retrofit', 'Play Store Deployment'] },
    { id: 'uiux', title: 'UI/UX Designer', url: 'https://roadmap.sh/ux-design', skills: ['Design Thinking & Research', 'Wireframing & Prototyping', 'Figma & Design Systems', 'Typography & Color Theory', 'Usability Testing'] }
  ],

  aiTools: [
    // AI Chatbots
    { name: 'ChatGPT', category: 'AI Chatbots', pricing: 'Freemium', desc: 'General-purpose reasoning, coding & study assistant.', url: 'https://chatgpt.com' },
    { name: 'Google Gemini', category: 'AI Chatbots', pricing: 'Freemium', desc: 'Multimodal AI integrated with research & code.', url: 'https://gemini.google.com' },
    { name: 'Claude', category: 'AI Chatbots', pricing: 'Freemium', desc: 'Long-context writing, analysis & coding.', url: 'https://claude.ai' },
    { name: 'Microsoft Copilot', category: 'AI Chatbots', pricing: 'Freemium', desc: 'Web-grounded AI assistant by Microsoft.', url: 'https://copilot.microsoft.com' },
    { name: 'DeepSeek', category: 'AI Chatbots', pricing: 'Free', desc: 'Open-weight reasoning & coding chat model.', url: 'https://chat.deepseek.com' },
    { name: 'Pi AI', category: 'AI Chatbots', pricing: 'Free', desc: 'Conversational personal AI companion.', url: 'https://pi.ai' },
    // AI Coding Assistants
    { name: 'GitHub Copilot', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Inline code completion & chat in VS Code.', url: 'https://github.com/features/copilot' },
    { name: 'Cursor AI', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'AI-first code editor for multi-file edits.', url: 'https://cursor.com' },
    { name: 'Windsurf', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Agentic IDE with codebase context.', url: 'https://windsurf.com' },
    { name: 'Codeium', category: 'AI Coding Assistants', pricing: 'Free', desc: 'Fast autocomplete & chat across IDEs.', url: 'https://codeium.com' },
    { name: 'Tabnine', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Private AI code completion assistant.', url: 'https://www.tabnine.com' },
    { name: 'Replit AI', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Browser IDE with AI app builder.', url: 'https://replit.com' },
    { name: 'Amazon Q Developer', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'AWS-integrated coding & cloud assistant.', url: 'https://aws.amazon.com/q/developer/' },
    { name: 'Continue.dev', category: 'AI Coding Assistants', pricing: 'Free', desc: 'Open-source AI code assistant extension.', url: 'https://www.continue.dev' },
    { name: 'Cline', category: 'AI Coding Assistants', pricing: 'Free', desc: 'Autonomous coding agent in VS Code.', url: 'https://github.com/cline/cline' },
    { name: 'Bolt.new', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Prompt-to-full-stack web app in browser.', url: 'https://bolt.new' },
    { name: 'Lovable', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Full-stack AI web application builder.', url: 'https://lovable.dev' },
    { name: 'v0 by Vercel', category: 'AI Coding Assistants', pricing: 'Freemium', desc: 'Generate React & Tailwind UI components.', url: 'https://v0.dev' },
    { name: 'Devin AI', category: 'AI Coding Assistants', pricing: 'Paid', desc: 'Autonomous software engineering agent.', url: 'https://devin.ai' },
    // Image Generation
    { name: 'Midjourney', category: 'Image Generation', pricing: 'Paid', desc: 'High-detail artistic image generation.', url: 'https://www.midjourney.com' },
    { name: 'ChatGPT Images / DALL-E', category: 'Image Generation', pricing: 'Freemium', desc: 'Text-to-image generation inside ChatGPT.', url: 'https://openai.com/dall-e-3' },
    { name: 'Adobe Firefly', category: 'Image Generation', pricing: 'Freemium', desc: 'Commercially safe generative imagery.', url: 'https://firefly.adobe.com' },
    { name: 'Leonardo AI', category: 'Image Generation', pricing: 'Freemium', desc: 'Game assets, concept art & image gen.', url: 'https://leonardo.ai' },
    { name: 'Ideogram', category: 'Image Generation', pricing: 'Freemium', desc: 'Image generation with accurate typography.', url: 'https://ideogram.ai' },
    { name: 'Playground AI', category: 'Image Generation', pricing: 'Freemium', desc: 'Design & image editing canvas.', url: 'https://playground.com' },
    // Video Generation
    { name: 'Runway Gen-2/Gen-3', category: 'Video Generation', pricing: 'Freemium', desc: 'AI video synthesis and editing suite.', url: 'https://runwayml.com' },
    { name: 'Luma Dream Machine', category: 'Video Generation', pricing: 'Freemium', desc: 'Fast realistic video generation.', url: 'https://lumalabs.ai/dream-machine' },
    { name: 'Pika', category: 'Video Generation', pricing: 'Freemium', desc: 'Idea-to-video creative platform.', url: 'https://pika.art' },
    { name: 'Synthesia', category: 'Video Generation', pricing: 'Paid', desc: 'AI avatar presenter videos from text.', url: 'https://www.synthesia.io' },
    { name: 'HeyGen', category: 'Video Generation', pricing: 'Freemium', desc: 'AI spokesperson & video translation.', url: 'https://www.heygen.com' },
    { name: 'InVideo AI', category: 'Video Generation', pricing: 'Freemium', desc: 'Script-to-video generator.', url: 'https://invideo.io' },
    // Writing & Grammar
    { name: 'Grammarly', category: 'Writing & Grammar', pricing: 'Freemium', desc: 'Grammar, tone, and clarity assistant.', url: 'https://www.grammarly.com' },
    { name: 'QuillBot', category: 'Writing & Grammar', pricing: 'Freemium', desc: 'Paraphrasing, summarizer & citation tool.', url: 'https://quillbot.com' },
    { name: 'Wordtune', category: 'Writing & Grammar', pricing: 'Freemium', desc: 'Rewrite and polish sentences.', url: 'https://www.wordtune.com' },
    { name: 'Jasper AI', category: 'Writing & Grammar', pricing: 'Paid', desc: 'Marketing & long-form content AI.', url: 'https://www.jasper.ai' },
    { name: 'Copy.ai', category: 'Writing & Grammar', pricing: 'Freemium', desc: 'Workflow & copywriting automation.', url: 'https://www.copy.ai' },
    { name: 'Writesonic', category: 'Writing & Grammar', pricing: 'Freemium', desc: 'Article & SEO writing assistant.', url: 'https://writesonic.com' },
    // Presentation Tools
    { name: 'Gamma App', category: 'Presentation Tools', pricing: 'Freemium', desc: 'Generate slide decks & docs from prompts.', url: 'https://gamma.app' },
    { name: 'Beautiful.ai', category: 'Presentation Tools', pricing: 'Paid', desc: 'Smart auto-layout presentation maker.', url: 'https://www.beautiful.ai' },
    { name: 'Tome AI', category: 'Presentation Tools', pricing: 'Freemium', desc: 'AI storytelling & slide decks.', url: 'https://tome.app' },
    { name: 'PopAi', category: 'Presentation Tools', pricing: 'Freemium', desc: 'PDF-to-presentation & study workspace.', url: 'https://www.popai.pro' },
    // Research & Search
    { name: 'Perplexity AI', category: 'Research & Search', pricing: 'Freemium', desc: 'Cited real-time answer engine.', url: 'https://www.perplexity.ai' },
    { name: 'Elicit', category: 'Research & Search', pricing: 'Freemium', desc: 'AI research assistant for academic papers.', url: 'https://elicit.com' },
    { name: 'Consensus', category: 'Research & Search', pricing: 'Freemium', desc: 'Evidence-based scientific paper search.', url: 'https://consensus.app' },
    { name: 'SciSpace', category: 'Research & Search', pricing: 'Freemium', desc: 'Read & explain research PDFs faster.', url: 'https://typeset.io' },
    { name: 'Semantic Scholar', category: 'Research & Search', pricing: 'Free', desc: 'AI-powered academic literature search.', url: 'https://www.semanticscholar.org' },
    // Voice & Audio
    { name: 'ElevenLabs', category: 'Voice & Audio', pricing: 'Freemium', desc: 'Realistic text-to-speech & voice cloning.', url: 'https://elevenlabs.io' },
    { name: 'Murf AI', category: 'Voice & Audio', pricing: 'Freemium', desc: 'Studio-quality AI voiceovers.', url: 'https://murf.ai' },
    { name: 'Descript', category: 'Voice & Audio', pricing: 'Freemium', desc: 'Edit audio & video like a text doc.', url: 'https://www.descript.com' },
    { name: 'Suno AI', category: 'Voice & Audio', pricing: 'Freemium', desc: 'Generate songs & music from prompts.', url: 'https://suno.com' },
    // Design Tools
    { name: 'Canva Magic Studio', category: 'Design Tools', pricing: 'Freemium', desc: 'All-in-one AI graphic design suite.', url: 'https://canva.com' },
    { name: 'Figma AI', category: 'Design Tools', pricing: 'Freemium', desc: 'UI design, prototyping & asset gen.', url: 'https://figma.com' },
    { name: 'Adobe Express AI', category: 'Design Tools', pricing: 'Freemium', desc: 'Quick posters, social graphics & PDFs.', url: 'https://adobe.com/express/' },
    { name: 'Uizard', category: 'Design Tools', pricing: 'Freemium', desc: 'Turn sketches & prompts into UI mockups.', url: 'https://uizard.io' },
    { name: 'Framer AI', category: 'Design Tools', pricing: 'Freemium', desc: 'Design and publish responsive websites.', url: 'https://framer.com' },
    // Productivity
    { name: 'Notion AI', category: 'Productivity', pricing: 'Freemium', desc: 'Summarize notes & manage knowledge.', url: 'https://notion.so/product/ai' },
    { name: 'Otter.ai', category: 'Productivity', pricing: 'Freemium', desc: 'Live lecture & meeting transcription.', url: 'https://otter.ai' },
    { name: 'Fireflies.ai', category: 'Productivity', pricing: 'Freemium', desc: 'Automated meeting notes & action items.', url: 'https://fireflies.ai' },
    { name: 'Motion', category: 'Productivity', pricing: 'Paid', desc: 'AI calendar & task auto-scheduler.', url: 'https://usemotion.com' },
    { name: 'Taskade AI', category: 'Productivity', pricing: 'Freemium', desc: 'AI agents, mind maps & task lists.', url: 'https://taskade.com' },
    // Resume & Career
    { name: 'Resume.io AI', category: 'Resume & Career', pricing: 'Freemium', desc: 'Clean resume templates & AI phrasing.', url: 'https://resume.io' },
    { name: 'Kickresume AI', category: 'Resume & Career', pricing: 'Freemium', desc: 'ATS-friendly resume & cover letter builder.', url: 'https://kickresume.com' },
    { name: 'Teal AI', category: 'Resume & Career', pricing: 'Freemium', desc: 'Job tracker & resume keyword matcher.', url: 'https://tealhq.com' },
    { name: 'Huntr AI', category: 'Resume & Career', pricing: 'Freemium', desc: 'Job application CRM & resume tailor.', url: 'https://huntr.co' },
    // Education
    { name: 'Khanmigo', category: 'Education', pricing: 'Freemium', desc: 'Socratic AI tutor by Khan Academy.', url: 'https://khanacademy.org/khan-labs' },
    { name: 'Quizlet AI', category: 'Education', pricing: 'Freemium', desc: 'Flashcards & adaptive practice tests.', url: 'https://quizlet.com' },
    { name: 'Socratic by Google', category: 'Education', pricing: 'Free', desc: 'Step-by-step homework & concept help.', url: 'https://socratic.org' },
    { name: 'StudyFetch', category: 'Education', pricing: 'Freemium', desc: 'Turn lecture slides into quizzes & notes.', url: 'https://studyfetch.com' }
  ],

  placementSteps: [
    '1. Registration & Profiling — Verify USN, CGPA, and resume.',
    '2. Eligibility Screening — Match active drives with branch & backlog criteria.',
    '3. Aptitude & Reasoning — Quantitative, logical & verbal timed rounds.',
    '4. Technical & Coding — DSA, SQL, OOPS & project deep-dives.',
    '5. Technical & HR Interview — Problem-solving, strengths & culture fit.',
    '6. Offer & Onboarding — Offer verification & joining formalities.'
  ],

  careerGuides: [
    { title: 'Resume Building', desc: 'ATS-friendly 1-page templates & bullet formulas.', badge: 'Soon' },
    { title: 'Interview Preparation', desc: 'Core CS (OS, DBMS, CN, OOP) + DSA patterns.', badge: 'Soon' },
    { title: 'Aptitude & Reasoning', desc: 'Quantitative, logical & verbal practice.', badge: 'Soon' },
    { title: 'Group Discussion Tips', desc: 'Structuring points & active listening.', badge: 'Soon' },
    { title: 'LinkedIn Optimization', desc: 'Headline, featured projects & outreach.', badge: 'Soon' },
    { title: 'Internship Guidance', desc: 'Portals, cold emails & open-source prep.', badge: 'Soon' },
    { title: 'Company Interview Experiences', desc: 'Alumni & senior round-by-round notes.', badge: 'Soon' },
    { title: 'Soft Skills & Communication', desc: 'Presentation, email & workplace etiquette.', badge: 'Soon' },
    { title: 'Career Counselling', desc: 'Higher studies vs. industry track planning.', badge: 'Soon' }
  ],

  examAnnouncements: [
    { title: 'Revised NEP (SEP) — Sem II & IV Exam Results, Revaluation & Photocopy', desc: 'Official university notification PDF.', badge: 'Results', url: pdf('/UPLOADS_PDFS_ALL/EXAM_NOTIFICATIONS/Revised%20NEP%20(SEP)%20-%20II%20&%20IV%20Sem%20Results.pdf') },
    { title: 'Draft Exam Time Table — Sem II & IV (Sep 2025–2026)', desc: 'Draft timetable PDF for verification.', badge: 'Draft', url: pdf('/UPLOADS_PDFS_ALL/EXAM_NOTIFICATIONS/SEP-II-IV-SEM-DRAFT-TIME-TABLE_organized_removed.pdf') },
    { title: 'Final Exam Time Table — Sem II & IV (Sep 2025–2026)', desc: 'Final approved university timetable PDF.', badge: 'Final', url: pdf('/UPLOADS_PDFS_ALL/EXAM_NOTIFICATIONS/Revised-NEP-SEP-II-IV-Sem-Final-Time-Table.pdf') }
  ],

  notices: [
    { title: 'Program Structure (Batch 2026–27 onwards)', desc: 'Official credit & course structure PDF.', badge: 'Batch 26–27', url: pdf('/UPLOADS_PDFS_ALL/NOTICE_ANNOUNCEMENTS/CST_2026-27.pdf') },
    { title: 'Program Structure (Batch 2024–25 & 2025–26)', desc: 'NEP/SEP program structure PDF.', badge: 'Batch 24–26', url: pdf('/UPLOADS_PDFS_ALL/NOTICE_ANNOUNCEMENTS/CSt_2024-25.pdf') },
    { title: 'Academic Calendar for 2026–2027', desc: 'Official university academic year calendar PDF.', badge: 'Calendar', url: pdf('/UPLOADS_PDFS_ALL/NOTICE_ANNOUNCEMENTS/2026_27_ac_year.pdf') },
    { title: 'Public Holiday Calendar 2026', desc: 'Official 2026 public holidays PDF.', badge: 'Holidays', url: pdf('/UPLOADS_PDFS_ALL/NOTICE_ANNOUNCEMENTS/2026-Public-Holiday.pdf') }
  ]
};
