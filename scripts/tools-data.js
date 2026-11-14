/**
 * ScholarGrid Tools Data
 * - semesterCredits: Pre-loaded credits & course structures
 * - resumePresets: ATS-optimized resume profiles for BCA students
 * - mcqBank: Core CS & Aptitude questions
 */
window.SCHOLAR_TOOLS_DATA = {
  semesterCredits: {
    'Sem I': [
      { code: 'BCAT 101', name: 'Discrete Mathematics', credits: 4 },
      { code: 'BCAT 103', name: 'Principles of Programming Languages (PPL)', credits: 4 },
      { code: 'BCAT 105', name: 'Computer Organization & Logic Design (COLD)', credits: 4 },
      { code: 'BCAP 102', name: 'Logic Design Lab', credits: 2 },
      { code: 'BCAP 104', name: 'MS Office & PPL Lab', credits: 2 },
      { code: 'BCAP 106', name: 'Programming in C Lab', credits: 2 },
      { code: 'AECC 101', name: 'English & Environmental Studies', credits: 3 }
    ],
    'Sem II': [
      { code: 'BCAT 201', name: 'Data Structures & File Organization', credits: 4 },
      { code: 'BCAT 203', name: 'Object-Oriented Programming with Java', credits: 4 },
      { code: 'BCAT 205', name: 'Numerical & Statistical Methods', credits: 4 },
      { code: 'BCAP 202', name: 'Data Structures Lab', credits: 2 },
      { code: 'BCAP 204', name: 'Java Programming Lab', credits: 2 },
      { code: 'BCAP 206', name: 'Web Design (HTML/CSS/JS) Lab', credits: 2 },
      { code: 'AECC 201', name: 'Communication Skills & Constitution', credits: 3 }
    ],
    'Sem III': [
      { code: 'BCAT 301', name: 'Operating Systems (OS)', credits: 4 },
      { code: 'BCAT 303', name: 'Database Management Systems (DBMS)', credits: 4 },
      { code: 'BCAT 305', name: 'Python Programming', credits: 4 },
      { code: 'BCAT 307', name: 'Computer Architecture (CA)', credits: 3 },
      { code: 'BCAP 302', name: 'Operating Systems Lab', credits: 2 },
      { code: 'BCAP 304', name: 'DBMS & SQL Lab', credits: 2 },
      { code: 'BCAP 306', name: 'Python Programming Lab', credits: 2 }
    ],
    'Sem IV': [
      { code: 'BCAT 401', name: 'Computer Networks (CN)', credits: 4 },
      { code: 'BCAT 403', name: 'Internet of Things (IoT)', credits: 4 },
      { code: 'BCAT 405', name: 'Design & Analysis of Algorithms (DAA)', credits: 4 },
      { code: 'BCAT 407', name: 'Software Engineering', credits: 3 },
      { code: 'BCAP 402', name: 'Design & Analysis of Algorithms Lab', credits: 2 },
      { code: 'BCAP 404', name: 'Computer Networks Lab', credits: 2 },
      { code: 'BCAP 406', name: 'Web Programming Lab', credits: 2 }
    ],
    'Sem V': [
      { code: 'BCAT 501', name: 'Artificial Intelligence (AI)', credits: 4 },
      { code: 'BCAT 503', name: 'R Programming & Data Analytics', credits: 4 },
      { code: 'BCAT 505', name: 'Cloud Computing & DevOps', credits: 3 },
      { code: 'BCAT 507', name: 'Unix & Shell Programming', credits: 3 },
      { code: 'BCAP 502', name: 'R Programming Lab', credits: 2 },
      { code: 'BCAP 504', name: 'Artificial Intelligence Lab', credits: 2 },
      { code: 'BCAP 506', name: 'Mini Project', credits: 3 }
    ],
    'Sem VI': [
      { code: 'BCAT 601', name: 'Machine Learning', credits: 4 },
      { code: 'BCAT 603', name: 'Cyber Security & Cryptography', credits: 4 },
      { code: 'BCAT 605', name: 'Mobile Application Development', credits: 3 },
      { code: 'BCAT 607', name: 'Elective: Big Data / Blockchain', credits: 3 },
      { code: 'BCAP 602', name: 'Machine Learning Lab', credits: 2 },
      { code: 'BCAP 604', name: 'Major Capstone Project', credits: 5 }
    ]
  },

  resumePresets: {
  "fullstack": {
    "fullName": "Mohit Gujjar",
    "title": "Full Stack Developer | BCA Undergraduate",
    "email": "mohitgujjar07@gmail.com",
    "phone": "+91 98765 43210",
    "location": "Bengaluru, India",
    "linkedin": "linkedin.com/in/mohitgujjar07",
    "github": "github.com/Mohitgujjar07",
    "portfolio": "mohitgujjar.dev",
    "summary": "Results-driven BCA student and Full Stack Developer with hands-on experience building scalable web applications and RESTful APIs using React, Node.js, and PostgreSQL. Passionate about clean code, intuitive UI/UX, and performance optimization.",
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA)",
        "institution": "Tumkur University",
        "location": "Karnataka, India",
        "year": "2023 \u2013 2026",
        "score": "CGPA: 8.85 / 10.0",
        "coursework": "Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering"
      }
    ],
    "skills": {
      "languages": "JavaScript (ES6+), TypeScript, Python, C++, Java, SQL",
      "frameworks": "React.js, Next.js, Node.js, Express.js, Tailwind CSS, HTML5, CSS3",
      "databases": "PostgreSQL, MongoDB, MySQL, Redis, Supabase",
      "tools": "Git, GitHub, Docker, Postman, Linux / Bash, Vite, Vercel",
      "concepts": "RESTful API Design, Object-Oriented Programming (OOP), Agile/Scrum, CI/CD"
    },
    "projects": [
      {
        "name": "ScholarGrid \u2014 All-in-One Academic Workspace",
        "tech": "JavaScript, PWA, Service Workers, CSS3 Glassmorphism, Node.js",
        "link": "github.com/Mohitgujjar07/ScholarGrid",
        "bullets": [
          "Architected an ad-free open academic portal organizing 170+ syllabus materials, notes, and interactive calculation tools for BCA students.",
          "Implemented offline-first Progressive Web App (PWA) caching with Service Workers, enabling instant load times even in zero-network conditions.",
          "Engineered real-time SGPA/CGPA grade calculation engine and interactive 75% attendance compliance tracking."
        ]
      },
      {
        "name": "ShopSphere \u2014 E-Commerce Microservices Platform",
        "tech": "React, Node.js, Express, PostgreSQL, Stripe API, JWT",
        "link": "github.com/Mohitgujjar07/ShopSphere",
        "bullets": [
          "Developed full-stack shopping platform with secure JWT authentication, cart persistence, and Stripe checkout handling 500+ mock transactions.",
          "Designed normalized relational database schema with PostgreSQL, optimizing search and filtering queries by 35% using indexing.",
          "Built responsive mobile-first UI with Tailwind CSS achieving 98+ Google Lighthouse performance score."
        ]
      },
      {
        "name": "Real-Time Collaborative Code Editor",
        "tech": "Next.js, Socket.io, Node.js, WebSockets, Tailwind",
        "link": "github.com/Mohitgujjar07/CodeCollab",
        "bullets": [
          "Built browser-based code workspace supporting simultaneous multi-user code editing with sub-50ms synchronization latency.",
          "Integrated syntax highlighting for 12+ programming languages and customizable dark/light theme editor settings."
        ]
      }
    ],
    "experience": [
      {
        "role": "Full Stack Web Developer Intern",
        "company": "TechNova Digital Solutions",
        "location": "Bengaluru, India",
        "period": "Jun 2025 \u2013 Aug 2025",
        "bullets": [
          "Engineered 14+ reusable React components and integrated REST endpoints, accelerating frontend delivery by 25%.",
          "Assisted in refactoring legacy MySQL database queries, improving API response times from 320ms to 180ms.",
          "Collaborated closely with cross-functional engineering team through daily Agile standups, code reviews, and Git workflows."
        ]
      }
    ],
    "certifications": [
      "Meta Front-End Developer Professional Certificate \u2014 Coursera",
      "AWS Certified Cloud Practitioner \u2014 Amazon Web Services",
      "Introduction to Cybersecurity \u2014 Cisco Networking Academy"
    ]
  },
  "python_ai": {
    "fullName": "Mohit Gujjar",
    "title": "Data Analyst & Python Developer | BCA Undergraduate",
    "email": "mohitgujjar07@gmail.com",
    "phone": "+91 98765 43210",
    "location": "Bengaluru, India",
    "linkedin": "linkedin.com/in/mohitgujjar07",
    "github": "github.com/Mohitgujjar07",
    "portfolio": "mohitgujjar.dev",
    "summary": "Analytical BCA undergraduate specializing in Python, exploratory data analysis (EDA), and machine learning. Proficient in transforming raw datasets into actionable insights using Pandas, SQL, and interactive dashboards.",
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA)",
        "institution": "Tumkur University",
        "location": "Karnataka, India",
        "year": "2023 \u2013 2026",
        "score": "CGPA: 8.85 / 10.0",
        "coursework": "Artificial Intelligence, Python Programming, Database Management Systems, Data Mining, Statistics & Probability"
      }
    ],
    "skills": {
      "languages": "Python, SQL, R, JavaScript, C",
      "frameworks": "Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Flask, FastAPI",
      "databases": "PostgreSQL, MySQL, SQLite, MongoDB",
      "tools": "Jupyter Notebook, Power BI, Excel (Advanced), Git, GitHub, VS Code",
      "concepts": "Data Cleaning, Predictive Modeling, Hypothesis Testing, Feature Engineering"
    },
    "projects": [
      {
        "name": "Predictive University Exam Performance Model",
        "tech": "Python, Scikit-Learn, Pandas, Streamlit, Matplotlib",
        "link": "github.com/Mohitgujjar07/student-perf-ml",
        "bullets": [
          "Built machine learning regression pipeline predicting student semester SGPA with 91.4% accuracy across 1,200+ historical records.",
          "Extracted key feature correlations identifying attendance and internal assessment scores as the primary determinants of final grades.",
          "Deployed interactive Streamlit dashboard allowing students to simulate grade scenarios in real time."
        ]
      },
      {
        "name": "Financial Sentiment Analysis Engine",
        "tech": "Python, NLTK, BeautifulSoup, Pandas, PostgreSQL",
        "link": "github.com/Mohitgujjar07/fin-sentiment",
        "bullets": [
          "Scraped 15,000+ daily financial headlines and tweets to gauge market sentiment using VADER NLP lexicon.",
          "Automated daily ETL pipeline writing structured sentiment scores to PostgreSQL database with automated summary emails."
        ]
      }
    ],
    "experience": [
      {
        "role": "Data Analytics Intern",
        "company": "InsightData Analytics",
        "location": "Remote",
        "period": "May 2025 \u2013 Jul 2025",
        "bullets": [
          "Cleaned and validated 50,000+ customer transaction rows using Python and SQL, eliminating duplicate entries by 18%.",
          "Created 6 executive Power BI dashboards tracking monthly churn rates and regional revenue growth metrics."
        ]
      }
    ],
    "certifications": [
      "Google Data Analytics Professional Certificate \u2014 Coursera",
      "IBM AI Fundamentals \u2014 IBM SkillsBuild",
      "Python for Everybody Specialization \u2014 University of Michigan"
    ]
  },
  "core_fresher": {
    "fullName": "Mohit Gujjar",
    "title": "Software Engineer Fresher | BCA Undergraduate",
    "email": "mohitgujjar07@gmail.com",
    "phone": "+91 98765 43210",
    "location": "Bengaluru, India",
    "linkedin": "linkedin.com/in/mohitgujjar07",
    "github": "github.com/Mohitgujjar07",
    "portfolio": "mohitgujjar.dev",
    "summary": "Motivated BCA undergraduate with a rigorous foundation in Computer Science fundamentals: Data Structures, Algorithms, Object-Oriented Programming, and DBMS. Eager to contribute to high-impact software engineering teams.",
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA)",
        "institution": "Tumkur University",
        "location": "Karnataka, India",
        "year": "2023 \u2013 2026",
        "score": "CGPA: 8.85 / 10.0",
        "coursework": "Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Computer Networks, Discrete Mathematics"
      }
    ],
    "skills": {
      "languages": "Java, C++, C, Python, SQL, JavaScript",
      "frameworks": "Spring Boot (Basics), JDBC, HTML5, CSS3",
      "databases": "MySQL, PostgreSQL",
      "tools": "Git, GitHub, Eclipse, VS Code, Linux Command Line",
      "concepts": "Data Structures & Algorithms, Object-Oriented Design (OOP), Memory Management, Multi-threading"
    },
    "projects": [
      {
        "name": "Secure Multi-Threaded Banking System",
        "tech": "Java, Multithreading, Concurrency, JDBC, MySQL",
        "link": "github.com/Mohitgujjar07/JavaBankingSystem",
        "bullets": [
          "Architected console & GUI banking system supporting concurrent account transactions, fund transfers, and balance inquiries.",
          "Prevented race conditions using Java thread synchronization and transaction lock isolation levels.",
          "Connected application to MySQL database via JDBC with parameterized queries preventing SQL injection."
        ]
      },
      {
        "name": "Campus Library Management System",
        "tech": "C++, File Handling, Object-Oriented Programming",
        "link": "github.com/Mohitgujjar07/LibraryManagement",
        "bullets": [
          "Implemented comprehensive library catalogue management with book issue/return tracking and fine calculation algorithms.",
          "Engineered fast binary search algorithms on indexed file records, reducing lookup latency by 60%."
        ]
      }
    ],
    "experience": [],
    "certifications": [
      "Harvard CS50: Introduction to Computer Science \u2014 edX",
      "HackerRank Problem Solving (Intermediate) Certificate",
      "GitHub Foundations Certificate"
    ]
  },
  "blank": {
    "fullName": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "github": "",
    "portfolio": "",
    "summary": "",
    "education": [
      {
        "degree": "",
        "institution": "",
        "location": "",
        "year": "",
        "score": "",
        "coursework": ""
      }
    ],
    "skills": {
      "languages": "",
      "frameworks": "",
      "databases": "",
      "tools": "",
      "concepts": ""
    },
    "projects": [
      {
        "name": "",
        "tech": "",
        "link": "",
        "bullets": [
          ""
        ]
      }
    ],
    "experience": [],
    "certifications": []
  }
},

  mcqBank: {
    DBMS: [
      {
        q: 'Which normal form eliminates transitive functional dependencies between non-key attributes?',
        options: ['1NF', '2NF', '3NF', '4NF'],
        answer: 2,
        explanation: 'Third Normal Form (3NF) requires the relation to be in 2NF and have no transitive dependency (A → B → C where A is a superkey and B is non-prime).'
      },
      {
        q: 'Which SQL command is a DDL statement that removes all rows and cannot be rolled back in standard SQL?',
        options: ['DELETE', 'TRUNCATE', 'REMOVE', 'CLEAR'],
        answer: 1,
        explanation: 'TRUNCATE is a Data Definition Language (DDL) command that deallocates data pages for the table, unlike DELETE (DML).'
      },
      {
        q: 'In the ACID properties of a transaction, what does "Isolation" ensure?',
        options: [
          'Transactions are saved permanently after commit',
          'All operations succeed or none do',
          'Concurrent transactions execute without interfering with each other',
          'Database constraints remain valid'
        ],
        answer: 2,
        explanation: 'Isolation ensures that intermediate states of a transaction are invisible to other concurrent transactions.'
      },
      {
        q: 'Which SQL clause is used to filter groups created by GROUP BY?',
        options: ['WHERE', 'HAVING', 'ORDER BY', 'DISTINCT'],
        answer: 1,
        explanation: 'WHERE filters rows before grouping, whereas HAVING filters groups after GROUP BY.'
      },
      {
        q: 'A B+ Tree index stores actual data pointers (or records) in:',
        options: ['Only the root node', 'Internal nodes only', 'Leaf nodes only', 'Every level equally'],
        answer: 2,
        explanation: 'In a B+ Tree, internal nodes store only routing keys, while all data pointers reside in the linked leaf nodes for fast range scans.'
      },
      {
        q: 'Which relational algebra operation combines tuples from two relations based on a common attribute?',
        options: ['Projection (π)', 'Selection (σ)', 'Natural Join (⋈)', 'Cartesian Product (×)'],
        answer: 2,
        explanation: 'Natural Join (⋈) matches tuples with equal values on common attributes and eliminates duplicate columns.'
      },
      {
        q: 'A minimal superkey is called a:',
        options: ['Foreign Key', 'Candidate Key', 'Composite Key', 'Alternate Key'],
        answer: 1,
        explanation: 'A Candidate Key is a superkey with no proper subset that is also a superkey.'
      },
      {
        q: 'Which schedule guarantees that no dirty reads or cascading aborts occur?',
        options: ['Serializable only', 'Cascadeless schedule', 'View-serializable', 'Non-recoverable schedule'],
        answer: 1,
        explanation: 'A cascadeless schedule only allows transactions to read values written by already-committed transactions, preventing dirty reads and cascading aborts.'
      }
    ],
    OS: [
      {
        q: 'Which CPU scheduling algorithm can suffer from starvation for long processes?',
        options: ['Round Robin', 'FCFS', 'Shortest Job First (SJF)', 'FIFO'],
        answer: 2,
        explanation: 'SJF (and Priority Scheduling) can starve long/low-priority processes if short/high-priority processes keep arriving.'
      },
      {
        q: 'Which of the following is NOT one of Coffman’s four necessary conditions for deadlock?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption', 'Circular Wait'],
        answer: 2,
        explanation: 'The four deadlock conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.'
      },
      {
        q: 'Belady’s Anomaly occurs in which page replacement algorithm?',
        options: ['LRU', 'Optimal', 'FIFO', 'LFU'],
        answer: 2,
        explanation: 'In FIFO page replacement, increasing the number of page frames can paradoxically increase the number of page faults (Belady’s Anomaly).'
      },
      {
        q: 'What is "Thrashing" in an operating system?',
        options: [
          'CPU overheating due to high clock speed',
          'Excessive paging activity where the system spends more time swapping than executing',
          'Deadlock between two kernel threads',
          'Disk fragmentation on SSDs'
        ],
        answer: 1,
        explanation: 'Thrashing occurs when working sets exceed available RAM, causing continuous page faults and very low CPU utilization.'
      },
      {
        q: 'Which IPC mechanism is fastest for processes sharing data on the same machine?',
        options: ['Sockets', 'Message Queues', 'Shared Memory', 'Pipes'],
        answer: 2,
        explanation: 'Shared Memory avoids kernel copying after the shared segment is mapped into each process’s address space.'
      },
      {
        q: 'A counting semaphore initialized to 5 has 3 P (wait) and 2 V (signal) operations performed. Its final value is:',
        options: ['0', '4', '6', '10'],
        answer: 1,
        explanation: 'Each wait decrements by 1 and each signal increments by 1: 5 - 3 + 2 = 4.'
      },
      {
        q: 'The Banker’s Algorithm is used for:',
        options: ['Deadlock Detection', 'Deadlock Avoidance', 'CPU Scheduling', 'Disk Scheduling'],
        answer: 1,
        explanation: 'Dijkstra’s Banker’s Algorithm checks for a safe state before granting resource requests, implementing deadlock avoidance.'
      },
      {
        q: 'Which data structure maps virtual page numbers to physical frame numbers?',
        options: ['Process Control Block', 'Page Table', 'File Allocation Table', 'Interrupt Vector Table'],
        answer: 1,
        explanation: 'The Page Table (accelerated by the TLB) translates virtual page numbers to physical frame numbers.'
      }
    ],
    CN: [
      {
        q: 'Which layer of the OSI model is responsible for end-to-end reliable delivery and flow control?',
        options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Session Layer'],
        answer: 2,
        explanation: 'The Transport Layer (Layer 4, e.g., TCP) handles end-to-end delivery, segmentation, error recovery, and flow control.'
      },
      {
        q: 'What is the default subnet mask for a Class C IPv4 address?',
        options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.128'],
        answer: 2,
        explanation: 'Class C uses 24 network bits (/24) and 8 host bits, giving a default mask of 255.255.255.0.'
      },
      {
        q: 'Which protocol translates an IPv4 address to a MAC (physical) address on a LAN?',
        options: ['DNS', 'ARP', 'RARP', 'ICMP'],
        answer: 1,
        explanation: 'Address Resolution Protocol (ARP) resolves a known IPv4 address to its corresponding link-layer MAC address.'
      },
      {
        q: 'How many usable host addresses are available in a /26 IPv4 subnet?',
        options: ['30', '62', '64', '126'],
        answer: 1,
        explanation: 'A /26 mask leaves 32 - 26 = 6 host bits. Usable hosts = 2^6 - 2 = 64 - 2 = 62 (excluding network and broadcast addresses).'
      },
      {
        q: 'Which port numbers are used by HTTP and HTTPS respectively?',
        options: ['21 and 22', '53 and 80', '80 and 443', '25 and 110'],
        answer: 2,
        explanation: 'HTTP uses TCP port 80 and HTTPS uses TCP port 443.'
      },
      {
        q: 'TCP uses which mechanism to establish a reliable connection?',
        options: ['Two-way handshake', 'Three-way handshake (SYN, SYN-ACK, ACK)', 'ARP Broadcast', 'Token Passing'],
        answer: 1,
        explanation: 'TCP establishes connections using the 3-way handshake: SYN → SYN-ACK → ACK.'
      },
      {
        q: 'Which routing algorithm is used by OSPF (Open Shortest Path First)?',
        options: ['Distance Vector (Bellman-Ford)', 'Link State (Dijkstra)', 'Path Vector (BGP)', 'Flooding'],
        answer: 1,
        explanation: 'OSPF is an interior gateway Link-State protocol that runs Dijkstra’s Shortest Path First algorithm.'
      },
      {
        q: 'What does CSMA/CD stand for in classic Ethernet?',
        options: [
          'Carrier Sense Multiple Access with Collision Detection',
          'Carrier Signal Multiple Access with Collision Avoidance',
          'Channel Sense Multi-Access with Congestion Detection',
          'Carrier Sense Multiplexing with Data'
        ],
        answer: 0,
        explanation: 'Wired Ethernet (IEEE 802.3) uses CSMA/CD, whereas Wi-Fi (802.11) uses CSMA/CA (Collision Avoidance).'
      }
    ],
    Aptitude: [
      {
        q: 'A train 150 m long passes a pole in 15 seconds. What is its speed in km/h?',
        options: ['30 km/h', '36 km/h', '45 km/h', '54 km/h'],
        answer: 1,
        explanation: 'Speed = 150 / 15 = 10 m/s. In km/h: 10 × (18 / 5) = 36 km/h.'
      },
      {
        q: 'If A can complete a job in 12 days and B in 24 days, how many days will they take working together?',
        options: ['6 days', '8 days', '9 days', '10 days'],
        answer: 1,
        explanation: 'Combined rate = 1/12 + 1/24 = 3/24 = 1/8 job/day, so they finish in 8 days.'
      },
      {
        q: 'What is the next number in the series: 3, 7, 15, 31, 63, ?',
        options: ['95', '125', '127', '131'],
        answer: 2,
        explanation: 'Each term follows (prev × 2) + 1: 63 × 2 + 1 = 127 (also 2^n - 1).'
      },
      {
        q: 'The price of a laptop increases by 20% and then decreases by 20%. What is the net percentage change?',
        options: ['0% (No change)', '4% increase', '4% decrease', '2% decrease'],
        answer: 2,
        explanation: 'Successive percentage change = x + y + (xy)/100 = +20 - 20 + (-400)/100 = -4% (4% decrease).'
      },
      {
        q: 'In how many ways can the letters of the word "CODE" be arranged?',
        options: ['12', '16', '24', '32'],
        answer: 2,
        explanation: '"CODE" has 4 distinct letters, so 4! = 4 × 3 × 2 × 1 = 24 arrangements.'
      },
      {
        q: 'Two dice are rolled simultaneously. What is the probability of getting a sum of 7?',
        options: ['1/12', '1/6', '5/36', '1/9'],
        answer: 1,
        explanation: 'Favorable pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 out of 36 outcomes = 6/36 = 1/6.'
      },
      {
        q: 'If the ratio of ages of Ram and Shyam is 4:5 and their sum is 54, what is Shyam’s age?',
        options: ['24', '27', '30', '32'],
        answer: 2,
        explanation: '4x + 5x = 54 ⇒ 9x = 54 ⇒ x = 6. Shyam’s age = 5 × 6 = 30.'
      },
      {
        q: 'A shopkeeper sells an item at ₹540 making a 20% profit. What was the cost price?',
        options: ['₹432', '₹450', '₹480', '₹500'],
        answer: 1,
        explanation: 'CP = SP / 1.20 = 540 / 1.2 = ₹450.'
      }
    ]
  }
};
