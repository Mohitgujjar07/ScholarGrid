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
    { id: 'resume-builder', icon: '📄', title: 'ATS Resume Builder', desc: 'Harvard/Tech format single-page resume builder with instant PDF export.', badge: 'Career', type: 'tool' },
    { id: 'mcq-quiz', icon: '🎯', title: 'MCQ & Aptitude Quiz', desc: 'Timed Core CS (DBMS, OS, CN) & Aptitude quizzes with explanations.', badge: 'Practice', type: 'tool' },
    { id: 'project-hub', icon: '🚀', title: 'Project & SRS Repository', desc: 'Final Year BCA project documentation, 5 complete SRS bundles, templates & UML blueprints.', badge: 'Sem V–VI', type: 'project-hub' },
    { id: 'placement-papers', icon: '💼', title: 'Placement Papers & Interview Vault', desc: 'Solved TCS NQT, Infosys, Wipro, Accenture recruitment papers & Top 100 Technical Q&As.', badge: 'Top MNCs', type: 'placement-papers' },
    { id: 'solved-model-papers', icon: '📑', title: 'Solved Model Papers & Schemes', desc: 'Subject-wise solved examination papers with 2-mark, 5-mark & 10-mark step-by-step schemes.', badge: 'NEP Pattern', type: 'solved-model-papers' },
    { id: 'reference-books', icon: '📚', title: 'Prescribed Textbooks & Topper Notes', desc: 'Standard textbooks (Silberschatz, Korth, Tanenbaum, Rosen) & chapter-wise revision cheat sheets.', badge: 'Standard Texts', type: 'reference-books' },
    { id: 'nep-guidelines', icon: '📜', title: 'NEP 2020 & Sem VI Internship Guide', desc: 'NEP credit framework, multiple exit pathways, Sem VI internship diary format & viva checklist.', badge: 'University Regs', type: 'nep-guidelines' }
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
  ],

  // =========================================================================
  // High-Value Academic Add-On Data Packages (Sem V-VI & Placement Vault)
  // =========================================================================

  projectHub: {
    reportTemplate: {
      title: 'Standard BCA University Project Report Guidelines & Template',
      structure: [
        { section: 'Front Matter', items: ['Cover Page & Title Page (University Prescribed Format)', 'Certificate of Originality from Principal & HOD', 'Candidate Declaration & Guide Approval Certificate', 'Acknowledgements & Abstract (Executive Summary 250 words)', 'Table of Contents, List of Figures, List of Tables'] },
        { section: 'Chapter 1: Introduction', items: ['Project Background & Motivation', 'Problem Statement & Need for the System', 'Project Objectives & Scope of Work'] },
        { section: 'Chapter 2: System Analysis & Feasibility', items: ['Existing System vs Proposed System Comparative Table', 'Technical, Operational & Economic Feasibility Study', 'Hardware & Software Environment Specifications'] },
        { section: 'Chapter 3: Software Requirements Specification (SRS)', items: ['User Roles & Permission Matrix', 'Functional Requirements (Module-by-Module)', 'Non-Functional Requirements (Security, Performance, Scalability)'] },
        { section: 'Chapter 4: System Design & Blueprints', items: ['System Architecture Diagram', 'Data Flow Diagrams (Level 0 Context & Level 1 Process)', 'Entity-Relationship Diagram (ERD) with Normalization (3NF)', 'UML Class Diagram & Use Case Diagrams', 'Database Schema Tables & Foreign Key Constraints'] },
        { section: 'Chapter 5: Implementation & Code Highlights', items: ['Key Algorithms & Logic Walkthrough', 'Front-End UI Screenshots with Descriptions', 'Core Controller & API Code Snippets'] },
        { section: 'Chapter 6: Software Testing', items: ['Unit Testing, Integration Testing & System Validation', 'Black-Box & White-Box Test Cases Table (Input, Expected, Actual, Status)'] },
        { section: 'Chapter 7: Conclusion & Future Scope', items: ['Project Summary & Limitations', 'Future Enhancements & Scalability Roadmap'] },
        { section: 'Back Matter', items: ['References & Bibliography (IEEE Citation Style)', 'Appendix: User Manual & Setup Instructions'] }
      ]
    },

    srsBundles: [
      {
        id: 'hms',
        title: 'Hospital Management System (HMS)',
        scope: 'Automates patient OPD/IPD registration, doctor appointments, bed allocations, lab tests, pharmacy inventory, and medical billing.',
        roles: ['SuperAdmin', 'Doctor', 'Nurse / Ward In-charge', 'Pharmacist', 'Patient / Attendant'],
        functional: [
          'Patient Registration: Auto-generates unique Patient ID (PID) with barcode support.',
          'Doctor Consultation Queue: Real-time token tracking and prescription generation.',
          'Bed & Ward Management: Live visualization of general, ICU, and private ward occupancy.',
          'Pharmacy Inventory: Drug stock alerts, batch expiry warnings, and bill generation.',
          'Billing & Insurance: Consolidated OPD/IPD invoicing with itemized hospital charges.'
        ],
        nonFunctional: [
          'Security: Role-Based Access Control (RBAC) with AES-256 data encryption.',
          'Performance: Page load under 1.2 seconds; supports 500 concurrent hospital staff sessions.',
          'Reliability: 99.9% uptime with automated daily database backups.'
        ],
        techStack: 'Frontend: React.js / HTML5 • Backend: Node.js (Express) • Database: PostgreSQL / MySQL'
      },
      {
        id: 'ecommerce',
        title: 'E-Commerce & Online Storefront (ShopEase)',
        scope: 'Full-stack retail storefront featuring product discovery, cart, secure online checkout, vendor fulfillment, and customer reviews.',
        roles: ['Customer', 'Vendor / Merchant', 'Platform SuperAdmin'],
        functional: [
          'Product Catalog: Multi-level category filtering, full-text search, and price sliders.',
          'Shopping Cart & Wishlist: Persistent local storage cart synced to user cloud account on login.',
          'Payment Gateway: Stripe / Razorpay webhook integration with mock payment sandbox.',
          'Order Fulfillment: Real-time tracking from dispatch to delivery with email invoices.',
          'Ratings & Reviews: Verified purchaser review system with rating distribution.'
        ],
        nonFunctional: [
          'Security: PCI-DSS compliant checkout flow; HTTPS TLS 1.3 enforced.',
          'Scalability: Handles flash-sale traffic spikes of 10,000 requests/minute using caching.',
          'Mobile Responsiveness: 100% responsive fluid mobile layout.'
        ],
        techStack: 'Frontend: Next.js / React • Backend: Node.js • Database: MongoDB / PostgreSQL'
      },
      {
        id: 'smartcampus',
        title: 'Student Attendance & Academic Portal (SmartCampus)',
        scope: 'Campus administrative portal tracking student subject-wise attendance, 75% shortage threshold alerts, internal marks, and exam eligibility.',
        roles: ['Student', 'Faculty Member', 'Head of Department (HOD)', 'Academic Office / Admin'],
        functional: [
          'Attendance Tracker: Daily period-wise attendance marking with instant percentage calculation.',
          'Shortage Warning Alerts: Automated SMS/Email warning when student attendance dips below 75%.',
          'Internal Assessment (IA): Entry of test marks, assignments, and automatic best-of-two averaging.',
          'Leave Applications: Multi-level leave submission with mentor and HOD approval workflows.',
          'Hall Ticket Eligibility: Auto-locking hall ticket download for students with attendance shortages.'
        ],
        nonFunctional: [
          'Integrity: Immutable attendance audit log; historical modifications require HOD credentials.',
          'Accessibility: WCAG 2.1 AA accessible pure light theme.'
        ],
        techStack: 'Frontend: Vanilla JS / Bootstrap • Backend: Python FastAPI / Django • Database: PostgreSQL'
      },
      {
        id: 'placement-tracker',
        title: 'College Placement & Recruitment Tracker (HireGrid)',
        scope: 'Centralized university placement portal managing student resumes, company job drives, CGPA eligibility filtering, and interview round outcomes.',
        roles: ['Student Candidate', 'Training & Placement Officer (TPO)', 'Company Recruiter'],
        functional: [
          'ATS Resume Builder: Automated resume parsing and single-page ATS profile generation.',
          'Drive Management: Posting company drives with strict criteria (CGPA cutoff, allowed backlogs).',
          'One-Click Eligibility Filter: Generates verified candidate spreadsheets matching criteria.',
          'Interview Scheduler: Multi-round tracking (Aptitude, Tech Round 1, Tech Round 2, HR).',
          'Offer Letter Dispatch: Automated offer status logging with salary package (LPA) statistics.'
        ],
        nonFunctional: [
          'Data Privacy: Strict student personal data protection; recruiters access only applied candidates.',
          'Speed: Exports 500 student records into Excel in under 2 seconds.'
        ],
        techStack: 'Frontend: React / Vue • Backend: Java Spring Boot / Node.js • Database: MySQL'
      },
      {
        id: 'library-system',
        title: 'Digital Library & Book Reservation System (LibTrack)',
        scope: 'Automated library management system with ISBN catalog lookup, barcode issue/return, late fee calculation, and advance book reservations.',
        roles: ['Student Member', 'Faculty Member', 'Librarian'],
        functional: [
          'Catalog Search (OPAC): Search by Title, Author, ISBN, or Subject with real-time rack location.',
          'Book Issue & Return: Barcode/RFID check-out counter with 14-day borrowing limit.',
          'Fine Calculator: Automated overdue penalty accrual (₹2/day for students, ₹5/day after 1 month).',
          'Book Reservation: Advance hold placement on books currently borrowed by other members.',
          'Digital Repository: Integrated access to open-access research papers and BCA notes PDFs.'
        ],
        nonFunctional: [
          'Concurrency: Prevents duplicate issue of the same physical copy to multiple borrowers.',
          'Audit Log: Complete ledger of past borrowing history for 5 years.'
        ],
        techStack: 'Frontend: HTML5 / Modern CSS • Backend: Node.js • Database: SQLite / PostgreSQL'
      }
    ],

    architectureBlueprints: [
      {
        title: 'Entity-Relationship (ER) Diagram Architecture',
        desc: 'Relational database schema adhering to 3rd Normal Form (3NF) with primary and foreign key constraints.',
        schemaText: `
+------------------+         +--------------------+         +-------------------+
|     STUDENTS     |         |    ENROLLMENTS     |         |     SUBJECTS      |
+------------------+         +--------------------+         +-------------------+
| * student_id (PK)|<------->| * enrollment_id(PK)|<------->| * subject_id (PK) |
|   usn_number     |  1   N  |   student_id (FK)  |  N   1  |   subject_code    |
|   full_name      |         |   subject_id (FK)  |         |   subject_name    |
|   email          |         |   semester         |         |   credits         |
|   current_sem    |         |   academic_year    |         |   max_ia_marks    |
+------------------+         +--------------------+         +-------------------+
         |                             |                              |
         | 1                           | 1                            | 1
         |                             |                              |
         | N                           | N                            | N
+------------------+         +--------------------+         +-------------------+
|    ATTENDANCE    |         |     IA_MARKS       |         |   EXAM_RESULTS    |
+------------------+         +--------------------+         +-------------------+
| * att_id (PK)    |         | * mark_id (PK)     |         | * result_id (PK)  |
|   student_id (FK)|         |   enrollment_id(FK)|         |   student_id (FK) |
|   subject_id (FK)|         |   test_1_marks     |         |   subject_id (FK) |
|   date           |         |   test_2_marks     |         |   internal_marks  |
|   status (P/A)   |         |   assignment_marks |         |   external_marks  |
+------------------+         +--------------------+         +-------------------+`
      },
      {
        title: 'Data Flow Diagram (DFD) — Level 0 & Level 1 Context',
        desc: 'Process decomposition from high-level system boundary to individual transactional sub-processes.',
        schemaText: `
Level 0: Context Diagram
+-------------+         Credentials & Requests          +--------------------+
|   Student   | ======================================> |                    |
|             | <====================================== |                    |
+-------------+         Timetable, Notes, IA & Results  |                    |
                                                        |     ScholarGrid    |
+-------------+         Course Updates & Attendance     |     Core Engine    |
|   Faculty   | ======================================> |                    |
|             | <====================================== |                    |
+-------------+         Eligibility Reports & Ledgers   +--------------------+
                                                                  ||
Level 1: Sub-Processes Decomposition                              || Read / Write
[1.0 User Auth] ---> [2.0 Academic Directory] ---> [3.0 Quiz] ---> [4.0 Central DB]`
      }
    ],

    vivaGuide: [
      { q: 'Why did you choose this particular tech stack?', answer: 'Highlight modularity, strong community support, performance, and clear separation of concerns (e.g. client-side rendering with reactive UI, scalable RESTful API backend, and ACID-compliant relational storage).' },
      { q: 'How does your application prevent SQL Injection and Cross-Site Scripting (XSS)?', answer: 'SQL Injection is prevented through parameterized prepared statements and ORM abstraction. XSS is mitigated via contextual HTML sanitization, escaping dynamic outputs, and using modern Content Security Policy (CSP) headers.' },
      { q: 'Explain how your database schema is normalized up to 3NF.', answer: '1NF eliminates repeating groups with atomic columns. 2NF removes partial dependencies on composite keys. 3NF removes transitive dependencies (non-key attribute depending on another non-key attribute).' },
      { q: 'What was the most challenging technical roadblock during development?', answer: 'Discuss a concrete scenario, such as designing reliable offline state synchronization, handling race conditions in concurrent transactions, or building responsive data tables for mobile viewports.' }
    ]
  },

  placementPapers: {
    companyPapers: [
      {
        company: 'TCS NQT (National Qualifier Test)',
        badge: 'TCS Foundation & Advanced',
        pattern: 'Numerical Ability (20 Qs) • Reasoning Ability (20 Qs) • Verbal Ability (25 Qs) • Hands-on Coding (2 Problems)',
        sampleQuestions: [
          {
            section: 'Numerical Ability',
            q: 'A sum of ₹12,000 amounts to ₹15,870 in 2.5 years at a certain rate of simple interest per annum. What is the rate of interest?',
            solution: 'Simple Interest SI = 15870 - 12000 = ₹3,870. Formula: SI = (P × R × T) / 100. Hence R = (3870 × 100) / (12000 × 2.5) = 387000 / 30000 = 12.9% p.a.'
          },
          {
            section: 'Reasoning Ability',
            q: 'Seven people A, B, C, D, E, F, and G are sitting around a circular table facing center. B is to the immediate right of A. C is second to the left of B. Who sits opposite to A?',
            solution: 'Arranging positions clockwise starting at A (Pos 1): B is Pos 2. C is Pos 7. Placing remaining elements according to conditions places E opposite to A (Pos 4 or 5 depending on secondary constraints).'
          },
          {
            section: 'Hands-on Coding Problem',
            q: 'Given an array of integers, find the equilibrium index such that the sum of elements at lower indices equals the sum of elements at higher indices.',
            solution: 'Time Complexity O(n), Space Complexity O(1): Calculate total sum of array. Iterate through array maintaining left_sum. At each index i, right_sum = total_sum - left_sum - arr[i]. If left_sum == right_sum, return i. Else left_sum += arr[i]. If no index found, return -1.'
          }
        ]
      },
      {
        company: 'Infosys Recruitment Exam',
        badge: 'Infosys SP & DSE',
        pattern: 'Pseudo-Code & Algorithms (5 Qs) • Mathematical Thinking (10 Qs) • Critical Reasoning (15 Qs) • Advanced Coding (3 Problems)',
        sampleQuestions: [
          {
            section: 'Pseudo-Code Tracing',
            q: 'What is the return value of mystery(4, 3) where function mystery(a, b) { if (b == 0) return 1; return a * mystery(a, b - 1); }?',
            solution: 'This calculates power a^b: 4^3 = 4 * 4 * 4 = 64.'
          },
          {
            section: 'Mathematical Puzzle',
            q: 'A clock shows 8:20. Through how many degrees has the hour hand turned when the clock shows 2:00 in the afternoon?',
            solution: 'Time difference from 8:20 to 2:00 is 5 hours and 40 minutes = 5 + 40/60 = 17/3 hours. Hour hand moves 360° / 12 = 30° per hour. Total rotation = (17/3) × 30° = 170°.'
          },
          {
            section: 'Advanced Coding Problem',
            q: 'Find the Length of Longest Substring Without Repeating Characters.',
            solution: 'Use Sliding Window with a Hash Map / Character Frequency array. Track left and right pointers. Expand right pointer; if character seen inside current window, jump left pointer to max(left, last_seen_index + 1). Max length is updated at each step in O(n) time.'
          }
        ]
      },
      {
        company: 'Accenture & Wipro Technical Assessment',
        badge: 'Cognitive & Technical',
        pattern: 'Cognitive Ability (30 Qs) • Technical Assessment (40 Qs) • Coding (2 Problems) • Communication Round',
        sampleQuestions: [
          {
            section: 'Automata Debugging & Logic',
            q: 'Identify the bug in array reversal: for(int i=0; i<=n; i++) { swap(a[i], a[n-i]); }',
            solution: 'Two errors: 1. Loop bounds must be `i < n/2`, otherwise reversing twice restores the original array. 2. Index must be `a[n - 1 - i]` for 0-indexed arrays with length n.'
          },
          {
            section: 'Critical Thinking',
            q: 'If all Zips are Zaps, and some Zaps are Zops, can we conclude that some Zips are definitely Zops?',
            solution: 'No. The intersection between Zaps and Zops does not necessarily include Zips. Hence the conclusion does not follow logically.'
          }
        ]
      }
    ],

    top100Questions: [
      { category: 'Java & OOPs', q: 'What is the difference between Method Overloading and Method Overriding?', a: 'Overloading happens at compile-time within the same class (same method name, different parameter signature). Overriding happens at runtime across parent-child inheritance (same method name and identical signature, dynamically dispatched via vtable).' },
      { category: 'Java & OOPs', q: 'Why is String immutable in Java?', a: 'Security (safe sharing across network sockets & classloaders), thread-safety without explicit synchronization, and caching optimizations (String Constant Pool and precomputed hashCodes).' },
      { category: 'Java & OOPs', q: 'How does HashMap handle collisions internally?', a: 'Uses separate chaining with linked lists. In Java 8+, if the number of colliding keys in a bucket exceeds 8 and total capacity >= 64, the linked list transforms into a balanced Red-Black Tree, improving lookup from O(n) to O(log n).' },
      { category: 'Python', q: 'What is the Python Global Interpreter Lock (GIL)?', a: 'A mutex that prevents multiple native threads from executing Python bytecodes simultaneously in CPython, ensuring thread-safe memory management but requiring multiprocessing for CPU-bound parallelism.' },
      { category: 'Python', q: 'What is the difference between a List and a Tuple in Python?', a: 'Lists are mutable (can append, insert, remove) and stored with over-allocation for growth. Tuples are immutable, consume less memory, can be used as dictionary keys, and are faster to allocate.' },
      { category: 'DBMS & SQL', q: 'What are ACID properties in database transactions?', a: 'Atomicity (all-or-nothing execution), Consistency (maintains integrity constraints), Isolation (concurrent transactions execute independently), Durability (committed data survives system crashes).' },
      { category: 'DBMS & SQL', q: 'What is the difference between Clustered and Non-Clustered Indexes?', a: 'A Clustered Index dictates the physical ordering of data rows on disk (only one per table, usually the Primary Key). A Non-Clustered Index is a separate B+ Tree structure holding key values and pointers to data pages (multiple allowed per table).' },
      { category: 'Operating Systems', q: 'What is the difference between a Process and a Thread?', a: 'A process is an independent execution unit with its own virtual address space, file handles, and memory map. A thread is a lightweight execution stream within a process that shares code, heap, and files with sibling threads, keeping only its private registers and stack.' },
      { category: 'Computer Networks', q: 'Explain the TCP 3-Way Handshake.', a: 'Client sends SYN packet with Initial Sequence Number (ISN). Server replies with SYN-ACK acknowledging client ISN and offering its own ISN. Client replies with ACK. Full-duplex connection is now established.' },
      { category: 'HR & Behavioral', q: 'How do you answer "Tell me about your greatest technical challenge"?', a: 'Use the STAR framework: Situation (the project background), Task (the roadblock), Action (the specific debugging/engineering steps you took), Result (measurable outcome, e.g. 40% performance gain or zero test failures).' }
    ]
  },

  solvedModelPapers: {
    subjects: [
      {
        subject: 'Data Structures & Algorithms (BCAT 201)',
        semester: 'Sem II',
        parts: [
          {
            part: 'Part A (2-Mark Questions — Crisp Definitions)',
            items: [
              { q: 'Define an Abstract Data Type (ADT) with two examples.', a: 'An ADT is a mathematical specification of a set of data objects and operations that can be performed on them, completely independent of any programming language implementation (e.g., Stack ADT, Queue ADT, Priority Queue ADT).' },
              { q: 'What is the condition for Stack Underflow and Stack Overflow in array representation?', a: 'Stack Overflow occurs when attempting to push onto a full stack: top == MAX - 1. Stack Underflow occurs when attempting to pop from an empty stack: top == -1.' },
              { q: 'State the prerequisite for executing Binary Search on an array.', a: 'The elements in the array must be strictly arranged in sorted (monotonic ascending or descending) order with direct random index access.' }
            ]
          },
          {
            part: 'Part B (5-Mark Questions — Analytical & Algorithms)',
            items: [
              { q: 'Explain the four rotation cases used to rebalance an AVL Tree.', a: 'AVL trees maintain balance factor BF in {-1, 0, +1}: 1. Left-Left (LL) Heavy: Fixed with a single Right Rotation. 2. Right-Right (RR) Heavy: Fixed with a single Left Rotation. 3. Left-Right (LR) Heavy: Fixed with Left Rotation on child followed by Right Rotation on root. 4. Right-Left (RL) Heavy: Fixed with Right Rotation on child followed by Left Rotation on root. [Marking: 2 marks rotation logic + 3 marks diagrams]' },
              { q: 'Write the step-by-step algorithm to insert a node at the beginning of a Singly Linked List.', a: '1. Allocate memory for new_node. 2. Set new_node->data = value. 3. Set new_node->next = head. 4. Update head = new_node. 5. Return success. Time Complexity: O(1).' }
            ]
          },
          {
            part: 'Part C (10-Mark Questions — Comprehensive Derivations & Code)',
            items: [
              { q: 'Explain QuickSort with partitioning algorithm, analyze its best, average, and worst case time complexities, and trace with an example array.', a: '1. Partition Algorithm (Lomuto or Hoare): Selects pivot, rearranges array so elements < pivot are left and > pivot are right. 2. Best & Average Case: T(n) = 2T(n/2) + O(n) => O(n log n) by Master Theorem. 3. Worst Case: Occurs on sorted array with unbalanced partitioning T(n) = T(n-1) + O(n) => O(n²). 4. Complete trace on [10, 80, 30, 90, 40, 50, 70] showing recursion tree.' }
            ]
          }
        ]
      },
      {
        subject: 'Database Management Systems (BCAT 303)',
        semester: 'Sem III',
        parts: [
          {
            part: 'Part A (2-Mark Questions)',
            items: [
              { q: 'Differentiate between DDL and DML commands in SQL.', a: 'DDL (Data Definition Language) defines and alters database schema (CREATE, ALTER, DROP, TRUNCATE; auto-committed). DML (Data Manipulation Language) queries and modifies data records (SELECT, INSERT, UPDATE, DELETE; rollback capable).' },
              { q: 'What is a Foreign Key and why is it important?', a: 'A foreign key is an attribute in one relation that references the primary key of another relation, enforcing referential integrity and preventing orphaned records.' }
            ]
          },
          {
            part: 'Part B (5-Mark Questions)',
            items: [
              { q: 'Compare 3NF and BCNF with a concrete example.', a: '3NF allows functional dependency X -> Y if Y is a prime attribute even if X is not a superkey. BCNF is stricter: for every non-trivial functional dependency X -> Y, X must strictly be a superkey. Every BCNF relation is in 3NF, but not all 3NF relations satisfy BCNF.' }
            ]
          },
          {
            part: 'Part C (10-Mark Questions)',
            items: [
              { q: 'Explain the Two-Phase Locking (2PL) protocol. How does it guarantee Serializability and what are its variants?', a: '2PL Protocol: 1. Growing Phase: Transactions acquire locks and cannot release any locks. 2. Shrinking Phase: Transactions release locks and cannot acquire any new locks. Lock Point is the instant the last lock is acquired. Variants: Conservative 2PL (deadlock-free), Strict 2PL (prevents cascading rollbacks by holding exclusive locks until commit), and Rigorous 2PL (holds all locks until commit).' }
            ]
          }
        ]
      },
      {
        subject: 'Operating Systems (BCAT 301)',
        semester: 'Sem III',
        parts: [
          {
            part: 'Part A (2-Mark Questions)',
            items: [
              { q: 'What is a System Call? Name two examples.', a: 'A system call provides the programmatic interface between a running user program and the operating system kernel (e.g. fork(), exec() for process control; read(), write() for file management).' },
              { q: 'Define Belady’s Anomaly.', a: 'The anomalous phenomenon where allocating more page frames to a process increases the total number of page faults, observable in FIFO page replacement.' }
            ]
          },
          {
            part: 'Part B (5-Mark Questions)',
            items: [
              { q: 'Explain the four conditions necessary for Deadlock to occur.', a: '1. Mutual Exclusion (non-shareable resources). 2. Hold and Wait (process holds resource while awaiting another). 3. No Preemption (resources cannot be forcibly taken). 4. Circular Wait (closed chain of processes where each holds a resource requested by next).' }
            ]
          },
          {
            part: 'Part C (10-Mark Questions)',
            items: [
              { q: 'Explain Demand Paging and Page Replacement Algorithms. Given reference string [7,0,1,2,0,3,0,4,2,3,0,3,2] with 3 frames, calculate page faults for FIFO and LRU.', a: 'Demand paging loads virtual pages into physical RAM only upon reference (page fault interrupt). Step-by-step frame table trace yields: FIFO = 10 Page Faults; LRU = 9 Page Faults. Detailed diagram of page fault handling routine (Trap to OS -> Save registers -> Allocate free frame -> Disk I/O -> Update page table -> Restart instruction).' }
            ]
          }
        ]
      }
    ]
  },

  referenceBooks: {
    books: [
      {
        title: 'Operating System Concepts (10th Edition)',
        authors: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
        publisher: 'Wiley ("The Dinosaur Book")',
        semesters: 'Sem III (BCAT 301)',
        units: 'Unit 1: Process Management • Unit 2: CPU Scheduling & Threads • Unit 3: Synchronization & Deadlocks • Unit 4: Memory Management & Paging • Unit 5: File Systems & Storage',
        revisionSheet: [
          'Process Control Block (PCB): Holds Process State, PID, Program Counter, CPU registers, memory limits, and open file lists.',
          'CPU Scheduling Formulas: Turnaround Time = Completion Time - Arrival Time. Waiting Time = Turnaround Time - Burst Time.',
          'Critical Section 3 Criteria: Mutual Exclusion, Progress, Bounded Waiting.',
          'Page Fault Effective Access Time: EAT = (1 - p) × Memory_Access + p × Page_Fault_Overhead.',
          'Disk Scheduling: SCAN (Elevator algorithm), C-SCAN (Circular SCAN, provides uniform wait time).'
        ]
      },
      {
        title: 'Database System Concepts (7th Edition)',
        authors: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
        publisher: 'McGraw-Hill Education',
        semesters: 'Sem III (BCAT 303)',
        units: 'Unit 1: Relational Model & SQL • Unit 2: ER Modeling & Database Design • Unit 3: Normalization (1NF–BCNF) • Unit 4: Transaction Management & Concurrency • Unit 5: Storage & B+ Tree Indexing',
        revisionSheet: [
          'Relational Algebra Core Operators: Selection (σ), Projection (π), Cartesian Product (×), Union (∪), Set Difference (-), Rename (ρ).',
          'Candidate Key Definition: Minimal superkey having uniqueness and irreducibility.',
          'Closure of Attribute Set (X+): Repeatedly apply functional dependencies until no more attributes can be added.',
          'B+ Tree Properties: Root has 2 to n children; non-leaf nodes have ⌈n/2⌉ children; all records stored in linked leaf nodes.',
          'WAL Protocol: Write-Ahead Logging requires log records to be flushed to non-volatile disk before corresponding database data pages are written.'
        ]
      },
      {
        title: 'Computer Networks (6th Edition)',
        authors: 'Andrew S. Tanenbaum, David J. Wetherall',
        publisher: 'Pearson',
        semesters: 'Sem IV (BCAT 401)',
        units: 'Unit 1: Physical Layer & Transmission • Unit 2: Data Link Layer & Framing • Unit 3: Network Layer & Routing • Unit 4: Transport Layer (TCP/UDP) • Unit 5: Application Layer (DNS, HTTP)',
        revisionSheet: [
          'Channel Capacity: Nyquist Max Bit Rate = 2B log2(V) bps. Shannon Capacity = B log2(1 + S/N) bps.',
          'Cyclic Redundancy Check (CRC): Transmit Frame = Message + Remainder after polynomial modulo-2 division.',
          'CIDR Formula: Usable hosts per subnet = 2^(32 - prefix) - 2.',
          'TCP Congestion Control: 1. Slow Start (exponential window growth). 2. Congestion Avoidance (linear growth). 3. Fast Retransmit / Fast Recovery on 3 duplicate ACKs.',
          'DNS Hierarchy: Root Servers -> TLD Servers (.com/.edu) -> Authoritative Nameservers.'
        ]
      },
      {
        title: 'Discrete Mathematics and Its Applications (8th Edition)',
        authors: 'Kenneth H. Rosen',
        publisher: 'McGraw-Hill Education',
        semesters: 'Sem I (BCAT 101)',
        units: 'Unit 1: Propositional Logic • Unit 2: Sets, Functions & Sequences • Unit 3: Relations & Equivalence • Unit 4: Graph Theory • Unit 5: Combinatorics & Recurrences',
        revisionSheet: [
          'De Morgan Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.',
          'Equivalence Relation: Reflexive (aRa), Symmetric (aRb => bRa), and Transitive (aRb & bRc => aRc).',
          'Pigeonhole Principle: If k + 1 or more objects are placed into k boxes, at least one box contains two or more objects.',
          'Euler Path vs Hamiltonian Cycle: Euler visits every edge exactly once; Hamiltonian visits every vertex exactly once.',
          'Handshaking Theorem: In any undirected graph, the sum of vertex degrees equals 2 × Number of Edges (2|E|).'
        ]
      }
    ]
  },

  nepGuidelines: {
    regulations: [
      {
        title: 'National Education Policy (NEP 2020) BCA Credit Architecture',
        points: [
          'Credit Definition: 1 Theory Credit = 15 hours of direct lecture contact. 1 Practical/Lab Credit = 30 hours of laboratory engagement.',
          'Total Course Load: 20–24 Credits per semester, totaling 120–132 Credits for 3-Year BCA Degree (and 160–176 Credits for 4-Year BCA Honours with Research).',
          'Course Categories: Disciplinary Core (Major), Minor Domain, Skill Enhancement Course (SEC), Ability Enhancement Course (AECC), and Value Addition Courses (VAC).'
        ]
      },
      {
        title: 'Multiple Entry & Multiple Exit Pathways',
        points: [
          'Exit at Year 1 (Sem I–II / 40–44 Credits): Eligible for Undergraduate Certificate in Computer Applications.',
          'Exit at Year 2 (Sem III–IV / 80–88 Credits): Eligible for Undergraduate Diploma in Computer Applications.',
          'Exit at Year 3 (Sem V–VI / 120–132 Credits): Awarded Bachelor of Computer Applications (BCA Degree).',
          'Completion of Year 4 (Sem VII–VIII / 160–176 Credits): Awarded BCA (Honours with Research), enabling direct admission into Ph.D. programs.'
        ]
      },
      {
        title: 'Continuous Evaluation & Examination Scheme',
        points: [
          'Assessment Ratio: 40% Continuous Internal Evaluation (CIE) + 60% Semester End Examination (SEE).',
          'CIE Breakdown: 2 Written Internal Assessment Tests (averaged to 20 marks) + Assignments / Seminars (10 marks) + Attendance & Active Classroom Participation (10 marks).',
          'Passing Standard: Minimum 40% marks in Semester End Exam (SEE) AND 40% aggregate in CIE + SEE combined.'
        ]
      }
    ],

    internshipManual: {
      title: 'Semester VI Industrial Internship Guidelines & Defense Protocol',
      duration: '4 to 8 Weeks mandatory industrial engagement (4 Academic Credits)',
      weeklyDiaryFormat: {
        fields: ['Week Number & Date Range', 'Assigned Industry Mentor & Company Department', 'Daily Log of Tasks & Coding Deliverables', 'Technologies, Tools & Frameworks Utilized', 'Engineering Challenges Faced & Problem Resolution', 'Mentor Feedback, Rating & Official Signature']
      },
      certificateTemplate: `TO WHOMSOEVER IT MAY CONCERN
This is to certify that [Student Full Name], USN: [Student USN], a student of Bachelor of Computer Applications (BCA) at [College Name], has successfully completed an industrial internship in [Domain / Project Name] from [Start Date] to [End Date] at [Company Name]. During this period, the candidate demonstrated outstanding technical capability, disciplined attendance, and adherence to company ethics.`,
      vivaDefenseChecklist: [
        { item: 'Official Internship Diary (Duly signed weekly by Industry Supervisor)', weight: '10 Marks' },
        { item: 'Company Completion Certificate & Letter of Evaluation', weight: '10 Marks' },
        { item: 'Comprehensive Technical Internship Report (Spiral/Hard Bound)', weight: '15 Marks' },
        { item: 'Live Demonstration & Code Walkthrough before University External Examiners', weight: '15 Marks' }
      ]
    }
  }
};
