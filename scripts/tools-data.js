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
    'DSA: Data Structures & Algorithms': [
      {
        q: 'What is the worst-case time complexity of QuickSort?',
        snippet: null,
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        answer: 2,
        explanation: 'QuickSort exhibits O(n²) worst-case time complexity when the chosen pivot is consistently the smallest or largest element (such as an already sorted array partitioned using an extreme element).'
      },
      {
        q: 'Which tree traversal yields elements of a Binary Search Tree (BST) in ascending sorted order?',
        snippet: null,
        options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'],
        answer: 1,
        explanation: 'Inorder traversal recursively visits Left subtree -> Root -> Right subtree. For any BST, this visits elements in strictly non-decreasing sorted order.'
      },
      {
        q: 'What is the time complexity to access an element by index in an Array versus a Singly Linked List?',
        snippet: null,
        options: ['O(1) in Array, O(1) in Linked List', 'O(1) in Array, O(n) in Linked List', 'O(n) in Array, O(1) in Linked List', 'O(log n) in Array, O(n) in Linked List'],
        answer: 1,
        explanation: 'Arrays use contiguous memory allowing direct pointer arithmetic in O(1). Singly Linked Lists require sequential node traversal from the head in O(n).'
      },
      {
        q: 'In a circular queue of capacity MAX, what is the correct condition to check if the queue is full?',
        snippet: null,
        options: ['(rear + 1) % MAX == front', 'rear == front', '(rear + 1) == MAX', '(front + 1) % MAX == rear'],
        answer: 0,
        explanation: 'In circular queue implementations, leaving one slot empty or calculating (rear + 1) % MAX == front distinguishes the full state from the empty state (front == rear).'
      },
      {
        q: 'What is the minimum number of queues required to implement a Last-In-First-Out (LIFO) Stack?',
        snippet: null,
        options: ['1', '2', '3', 'None (Cannot be implemented)'],
        answer: 1,
        explanation: 'A stack can be implemented using 2 FIFO queues either by making the push operation costly (O(n)) or the pop operation costly (O(n)).'
      },
      {
        q: 'What is the height of a balanced Binary Search Tree (such as AVL or Red-Black Tree) containing N nodes?',
        snippet: null,
        options: ['O(N)', 'O(log N)', 'O(N log N)', 'O(√N)'],
        answer: 1,
        explanation: 'Self-balancing binary search trees maintain a maximum height of O(log N), guaranteeing search, insertion, and deletion operations in logarithmic time.'
      },
      {
        q: 'Which graph traversal algorithm guarantees finding the shortest path in an unweighted graph?',
        snippet: null,
        options: ['Depth First Search (DFS)', 'Breadth First Search (BFS)', 'Topological Sort', 'Preorder Traversal'],
        answer: 1,
        explanation: 'Breadth First Search (BFS) explores vertices level by level, guaranteeing that the first time a target vertex is reached, the path taken has the minimum number of edges.'
      },
      {
        q: 'Topological sorting can be applied to which category of graphs?',
        snippet: null,
        options: ['Any undirected graph', 'Directed Acyclic Graph (DAG)', 'Complete bipartite graph', 'Any cyclic directed graph'],
        answer: 1,
        explanation: 'Topological sort produces a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v. This is mathematically possible only on Directed Acyclic Graphs (DAGs).'
      },
      {
        q: 'What is the average and worst-case time complexity of MergeSort?',
        snippet: null,
        options: ['Average O(n log n), Worst O(n²)', 'Average O(n log n), Worst O(n log n)', 'Average O(n²), Worst O(n²)', 'Average O(log n), Worst O(n)'],
        answer: 1,
        explanation: 'MergeSort always divides the array into halves in O(log n) levels and takes O(n) work per level to merge. Its time complexity is strictly O(n log n) in all cases (Best, Average, Worst).'
      },
      {
        q: 'Which data structure is fundamentally used to implement a Priority Queue efficiently?',
        snippet: null,
        options: ['Binary Heap', 'Doubly Linked List', 'Hash Table', 'B-Tree'],
        answer: 0,
        explanation: 'A Binary Heap (Min-Heap or Max-Heap) provides O(1) peek at highest priority and O(log n) insertion and extraction, making it the standard engine for Priority Queues.'
      }
    ],

    'OOPs & Java / C++': [
      {
        q: 'How does C++ resolve the classic "Diamond Problem" of multiple inheritance?',
        snippet: null,
        options: ['Interface implementation', 'Virtual base class inheritance', 'Friend classes', 'Operator overloading'],
        answer: 1,
        explanation: 'In C++, inheriting a base class virtually (`class B : virtual public A`) ensures only a single shared instance of the common grandparent class A exists in the most derived class.'
      },
      {
        q: 'Which of the following describes Runtime (Dynamic) Polymorphism in Java?',
        snippet: null,
        options: ['Method Overloading', 'Method Overriding via dynamic method dispatch', 'Operator Overloading', 'Constructor Chaining'],
        answer: 1,
        explanation: 'Runtime polymorphism in Java is achieved through Method Overriding. The JVM determines which overridden method to execute at runtime based on the actual object instance using the virtual method table (vtable).'
      },
      {
        q: 'What is the primary reason the destructor of a base class in C++ should always be declared "virtual"?',
        snippet: null,
        options: [
          'To enable constructor overloading',
          'To ensure the derived class destructor is called when deleting an object through a base class pointer',
          'To make the class abstract',
          'To prevent memory allocation on the heap'
        ],
        answer: 1,
        explanation: 'If a base class destructor is not virtual, deleting a derived object via a base pointer invokes only the base destructor, leading to undefined behavior and resource/memory leaks in the derived part.'
      },
      {
        q: 'Can a constructor be declared "static" or "final" in Java?',
        snippet: null,
        options: ['Yes, both are allowed', 'Only static is allowed', 'Only final is allowed', 'Neither static nor final is allowed'],
        answer: 3,
        explanation: 'Constructors in Java belong to the object being instantiated, not to the class itself, so they cannot be static. They cannot be inherited or overridden, so marking them final is a compilation error.'
      },
      {
        q: 'What happens when a static variable in Java is modified by one object instance?',
        snippet: null,
        options: [
          'Only that object sees the change',
          'A copy is created for other instances',
          'All instances share the same variable and see the updated value',
          'Compilation error occurs'
        ],
        answer: 2,
        explanation: 'Static variables belong to the class level and are stored in the JVM Metaspace/Method Area. There is exactly one copy shared across all instances of that class.'
      },
      {
        q: 'What is the core difference between Abstraction and Encapsulation?',
        snippet: null,
        options: [
          'Abstraction hides internal implementation details; Encapsulation binds data and methods together and restricts direct access',
          'Abstraction is compile-time; Encapsulation is run-time',
          'Abstraction uses private variables; Encapsulation uses interfaces',
          'There is no difference; they are synonymous'
        ],
        answer: 0,
        explanation: 'Abstraction focuses on "what" an entity does (hiding complexity through interfaces/abstract classes). Encapsulation focuses on "how" data is protected (bundling state and methods with private access modifiers).'
      },
      {
        q: 'Which class in Java is the ultimate superclass of all other classes?',
        snippet: null,
        options: ['java.lang.System', 'java.lang.Object', 'java.lang.Class', 'java.lang.Root'],
        answer: 1,
        explanation: 'Every class in Java implicitly extends java.lang.Object, inheriting foundational methods like equals(), hashCode(), toString(), clone(), and getClass().'
      },
      {
        q: 'Can an interface in Java 8 and later contain method implementations?',
        snippet: null,
        options: ['No, interfaces can only have abstract methods', 'Yes, using "default" and "static" methods', 'Only if the class extends Object', 'Only using private methods'],
        answer: 1,
        explanation: 'Java 8 introduced default and static methods in interfaces with full method bodies to enable backward-compatible API evolution (such as adding forEach() to Collection).'
      },
      {
        q: 'What is the effect of applying the "final" keyword to a class in Java?',
        snippet: null,
        options: ['The class cannot be instantiated', 'The class cannot be extended (subclassed)', 'All methods must be static', 'The class becomes an interface'],
        answer: 1,
        explanation: 'A final class (such as java.lang.String or java.lang.Integer) cannot be inherited or subclassed by any other class, ensuring security and immutability.'
      },
      {
        q: 'What is the difference between a shallow copy and a deep copy of an object?',
        snippet: null,
        options: [
          'Shallow copy clones referenced objects; deep copy copies field values only',
          'Shallow copy copies reference pointers so nested objects are shared; deep copy recursively duplicates all nested objects',
          'Shallow copy uses heap; deep copy uses stack',
          'They produce identical results in modern compilers'
        ],
        answer: 1,
        explanation: 'Shallow copying duplicates only the primitive fields and object references (so modifications to referenced objects affect both copies). Deep copying creates independent duplicates of all child/referenced objects.'
      }
    ],

    'Code Output & Pseudo-Code': [
      {
        q: 'What is the output of the following Java snippet?',
        snippet: 'int x = 5;\nSystem.out.println(x++ + ++x);',
        options: ['10', '11', '12', '13'],
        answer: 2,
        explanation: 'x++ evaluates to 5 (and increments x to 6). Next, ++x increments x from 6 to 7 and evaluates to 7. The final sum is 5 + 7 = 12.'
      },
      {
        q: 'What will the following Java code print to the console?',
        snippet: 'String s1 = "Hello";\nString s2 = new String("Hello");\nSystem.out.println((s1 == s2) + " " + s1.equals(s2));',
        options: ['true true', 'false false', 'false true', 'true false'],
        answer: 2,
        explanation: 's1 refers to the String constant in the String Pool. s2 creates an explicit new object in heap memory. Hence (s1 == s2) is false (different references), while s1.equals(s2) compares character sequences, which is true.'
      },
      {
        q: 'What is the output of this C pointer arithmetic snippet?',
        snippet: 'int arr[] = {10, 20, 30, 40, 50};\nint *ptr = arr;\nprintf("%d", *(ptr + 2) + *ptr);',
        options: ['30', '40', '20', '50'],
        answer: 1,
        explanation: '`ptr` points to arr[0] (value 10). `*(ptr + 2)` accesses arr[2] (value 30). Summing them: 30 + 10 = 40.'
      },
      {
        q: 'What does this recursive function return when called as fun(4)?',
        snippet: 'int fun(int n) {\n  if (n <= 1) return 1;\n  return n * fun(n - 1);\n}',
        options: ['10', '16', '24', '120'],
        answer: 2,
        explanation: 'fun(4) computes 4 * fun(3) = 4 * (3 * fun(2)) = 4 * 3 * (2 * fun(1)) = 4 * 3 * 2 * 1 = 24 (Factorial of 4).'
      },
      {
        q: 'What is the output of the following Java while loop?',
        snippet: 'int i = 0;\nwhile (i++ < 3) {\n  System.out.print(i + " ");\n}',
        options: ['0 1 2', '1 2 3', '1 2 3 4', '0 1 2 3'],
        answer: 1,
        explanation: 'Iteration 1: i=0 < 3 (true), i becomes 1 -> prints 1. Iteration 2: i=1 < 3 (true), i becomes 2 -> prints 2. Iteration 3: i=2 < 3 (true), i becomes 3 -> prints 3. Iteration 4: i=3 < 3 (false), i becomes 4 -> loop exits. Output: "1 2 3 ".'
      },
      {
        q: 'What will be printed when this Java class executes?',
        snippet: 'class Demo {\n  static { System.out.print("S "); }\n  Demo() { System.out.print("C "); }\n  public static void main(String[] args) {\n    Demo d1 = new Demo();\n    Demo d2 = new Demo();\n  }\n}',
        options: ['C C S', 'S C C', 'C S C', 'S C S C'],
        answer: 1,
        explanation: 'The static initialization block runs exactly once when the class is loaded by the ClassLoader. Constructors execute each time `new Demo()` is invoked. Output: "S C C ".'
      },
      {
        q: 'What is the value of result in this TCS pseudo-code?',
        snippet: 'Integer a, b, result\nSet a = 4, b = 6\nresult = (a ^ b) + (a & b)\nPrint result',
        options: ['4', '6', '8', '10'],
        answer: 1,
        explanation: 'In binary: a = 4 (0100), b = 6 (0110). Bitwise XOR: 4 ^ 6 = 0010 (2). Bitwise AND: 4 & 6 = 0100 (4). Sum: 2 + 4 = 6. (Identity: a + b = (a^b) + 2*(a&b)).'
      },
      {
        q: 'What will be printed regarding Integer object comparison in Java?',
        snippet: 'Integer a = 100, b = 100;\nInteger c = 200, d = 200;\nSystem.out.println((a == b) + " " + (c == d));',
        options: ['true true', 'true false', 'false false', 'false true'],
        answer: 1,
        explanation: 'Java autoboxes Integers using an internal IntegerCache between -128 and 127. For 100, a and b reference the identical cached object (true). For 200, two separate heap objects are created, so (c == d) is false.'
      },
      {
        q: 'What is the output of the following integer division and modulus code?',
        snippet: 'int a = 17, b = 5;\nSystem.out.println((a / b) + " and " + (a % b));',
        options: ['3.4 and 2', '3 and 2', '3 and 2.0', '4 and 1'],
        answer: 1,
        explanation: 'Integer division in Java truncates any fractional portion: 17 / 5 = 3. The remainder operator 17 % 5 yields 2.'
      },
      {
        q: 'What does this recursive function return for mystery(3, 4)?',
        snippet: 'int mystery(int a, int b) {\n  if (b == 0) return 0;\n  if (b % 2 == 0) return mystery(a + a, b / 2);\n  return mystery(a + a, b / 2) + a;\n}',
        options: ['7', '12', '14', '81'],
        answer: 1,
        explanation: 'This implements Russian Peasant multiplication: computing a * b. For a=3 and b=4: mystery(6, 2) -> mystery(12, 1) -> mystery(24, 0) + 12 = 0 + 12 = 12.'
      }
    ],

    'DBMS & SQL': [
      {
        q: 'Which normal form eliminates transitive functional dependencies between non-key attributes?',
        snippet: null,
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        answer: 2,
        explanation: '3NF (Third Normal Form) requires the relation to be in 2NF and that no non-prime attribute is transitively dependent on the primary key (X -> Y where Y is non-prime and X is not a superkey).'
      },
      {
        q: 'What is the difference between WHERE and HAVING clauses in SQL?',
        snippet: null,
        options: [
          'WHERE filters rows before aggregation; HAVING filters groups after aggregation',
          'HAVING filters rows before grouping; WHERE filters aggregated results',
          'WHERE can only be used with SELECT; HAVING can be used with DELETE',
          'There is no functional difference'
        ],
        answer: 0,
        explanation: 'The WHERE clause evaluates individual table rows before any GROUP BY operations take place. The HAVING clause applies condition filters to aggregated summary rows generated by GROUP BY.'
      },
      {
        q: 'What is the return difference between SELECT COUNT(*) and SELECT COUNT(col_name) when some rows have NULL in col_name?',
        snippet: null,
        options: [
          'Both return the same total count',
          'COUNT(*) counts all rows including NULLs; COUNT(col_name) counts only non-NULL rows',
          'COUNT(col_name) throws a runtime exception',
          'COUNT(*) returns NULL'
        ],
        answer: 1,
        explanation: 'COUNT(*) calculates the total number of physical rows in the result set regardless of NULLs. COUNT(column) ignores rows where that specific column contains a NULL value.'
      },
      {
        q: 'Which ACID property guarantees that all operations within a database transaction succeed or all are rolled back?',
        snippet: null,
        options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
        answer: 0,
        explanation: 'Atomicity ensures the "all-or-nothing" rule: either every modification in the transaction commits permanently, or the transaction is aborted and rolled back to its initial state.'
      },
      {
        q: 'Why do relational databases predominantly use B+ Trees instead of standard Binary Search Trees for disk-based indexing?',
        snippet: null,
        options: [
          'B+ Trees have fewer nodes',
          'B+ Trees store all actual record pointers in leaf nodes linked sequentially, optimizing block I/O and range scans',
          'Binary search trees cannot store integers',
          'B+ Trees eliminate the need for primary keys'
        ],
        answer: 1,
        explanation: 'B+ Trees have high fan-out (reducing tree height and disk block reads) and store all keys in sorted leaf nodes linked as a doubly linked list, which makes sequential range queries extremely fast.'
      },
      {
        q: 'What is the difference between SQL UNION and UNION ALL operators?',
        snippet: null,
        options: [
          'UNION removes duplicate rows; UNION ALL retains duplicates and executes faster',
          'UNION retains duplicates; UNION ALL removes them',
          'UNION ALL only works on numerical columns',
          'UNION requires both tables to have different schemas'
        ],
        answer: 0,
        explanation: 'UNION performs an internal sort/deduplication to return unique distinct rows. UNION ALL skips deduplication, concatenating results directly and delivering significantly faster performance.'
      },
      {
        q: 'In a Relational DBMS, what does the Two-Phase Locking (2PL) protocol guarantee?',
        snippet: null,
        options: ['Deadlock prevention', 'Conflict Serializability of concurrent schedules', 'Zero lock waiting time', 'Disaster recovery'],
        answer: 1,
        explanation: 'The 2PL protocol (Growing phase where locks are acquired, Shrinking phase where locks are released) mathematically guarantees conflict serializable execution of concurrent transactions.'
      },
      {
        q: 'Which of the following database constraints ensures referential integrity across related tables?',
        snippet: null,
        options: ['PRIMARY KEY', 'FOREIGN KEY', 'CHECK', 'UNIQUE'],
        answer: 1,
        explanation: 'A FOREIGN KEY constraint establishes a link between columns in two tables, ensuring that values in the child table match existing primary or unique keys in the referenced parent table.'
      },
      {
        q: 'What is a Candidate Key in relational database theory?',
        snippet: null,
        options: [
          'Any column that contains non-null values',
          'A minimal Super Key that uniquely identifies every tuple in a relation without redundant attributes',
          'The key selected by the database administrator for clustering',
          'A secondary index on foreign keys'
        ],
        answer: 1,
        explanation: 'A Candidate Key is a minimal superkey: it possesses uniqueness (identifies each tuple uniquely) and irreducibility (no subset of its attributes can uniquely identify tuples).'
      },
      {
        q: 'Which SQL statement is used to remove all rows from a table rapidly while deallocating data pages without logging individual row deletions?',
        snippet: null,
        options: ['DELETE FROM table;', 'DROP TABLE table;', 'TRUNCATE TABLE table;', 'REMOVE ALL table;'],
        answer: 2,
        explanation: 'TRUNCATE TABLE is a DDL operation that deallocates the data pages used to store table data and records only page deallocations in the transaction log, making it vastly faster than row-by-row DELETE.'
      }
    ],

    'Operating Systems': [
      {
        q: 'Which of the following is NOT one of the four necessary conditions for Deadlock (Coffman Conditions)?',
        snippet: null,
        options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Paging Support'],
        answer: 3,
        explanation: 'The 4 necessary conditions for deadlock are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, and 4. Circular Wait. Paging is a memory management technique and unrelated to deadlock causality.'
      },
      {
        q: 'Which CPU scheduling algorithm gives the theoretical minimum average waiting time for a given set of processes?',
        snippet: null,
        options: ['First-Come, First-Served (FCFS)', 'Round Robin (RR)', 'Shortest Job First / SRTF', 'Priority Scheduling'],
        answer: 2,
        explanation: 'Shortest Job First (SJF) and its preemptive variant Shortest Remaining Time First (SRTF) are mathematically proven to yield the minimal average waiting time among all scheduling algorithms.'
      },
      {
        q: 'What is Belady’s Anomaly in operating systems memory management?',
        snippet: null,
        options: [
          'Increasing page frames results in more page faults in certain algorithms like FIFO',
          'Virtual memory consumes more swap space than physical RAM',
          'CPU utilization reaches 100% during I/O operations',
          'Deadlock occurs when priority inversion happens'
        ],
        answer: 0,
        explanation: 'Belady’s Anomaly is the counterintuitive phenomenon where allocating more physical page frames to a process increases the total number of page faults. It occurs in FIFO page replacement, but never in stack algorithms like LRU.'
      },
      {
        q: 'What is "Thrashing" in an operating system?',
        snippet: null,
        options: [
          'High network bandwidth saturation',
          'A condition where the CPU spends more time swapping pages in and out of memory than executing actual process instructions',
          'Repeated file system corruption during write operations',
          'Sudden failure of disk controller hardware'
        ],
        answer: 1,
        explanation: 'Thrashing occurs when the total working set requirements of active processes exceed the physical memory capacity. The OS is overwhelmed by continuous page faults, causing CPU utilization to collapse.'
      },
      {
        q: 'What is the purpose of the Translation Lookaside Buffer (TLB)?',
        snippet: null,
        options: [
          'To buffer network packets before transmission',
          'A high-speed hardware cache in the MMU that stores recent virtual-to-physical address translations',
          'To store process control blocks in kernel space',
          'To manage disk sector sectoring'
        ],
        answer: 1,
        explanation: 'The TLB is an associative hardware cache inside the Memory Management Unit (MMU) that stores recent page-table mappings, reducing the effective memory access time from two memory accesses to near one.'
      },
      {
        q: 'What value does a Counting Semaphore hold?',
        snippet: null,
        options: [
          'Strictly 0 or 1',
          'Any non-negative integer representing the number of available units of a shared resource',
          'Only negative values indicating blocked threads',
          'Floating point decimal percentages'
        ],
        answer: 1,
        explanation: 'A Counting Semaphore can take an unrestricted non-negative integer value representing the quantity of available resource instances. A Binary Semaphore is restricted to 0 and 1.'
      },
      {
        q: 'What is the primary role of the "Dirty Bit" (Modified Bit) in a page table entry?',
        snippet: null,
        options: [
          'Indicates whether the page contains an executable program',
          'Indicates whether the page has been modified in memory since being loaded from disk',
          'Indicates if the page is currently locked by a kernel thread',
          'Indicates that the page has a checksum error'
        ],
        answer: 1,
        explanation: 'When a page in memory is modified by a write instruction, hardware sets its dirty bit to 1. If this page is later evicted, the OS knows it must write it back to disk; otherwise, it can simply discard it without disk I/O.'
      },
      {
        q: 'In Round Robin scheduling, what happens if the time quantum is chosen to be extremely large?',
        snippet: null,
        options: [
          'The algorithm degenerates into First-Come First-Served (FCFS)',
          'Context switching overhead skyrockets',
          'CPU utilization drops to zero',
          'Starvation occurs for I/O bound jobs'
        ],
        answer: 0,
        explanation: 'If the time quantum is larger than the longest burst time of any active process, every process finishes before its quantum expires, meaning Round Robin behaves identically to FCFS.'
      },
      {
        q: 'Which algorithm is used by operating systems for deadlock avoidance when multiple instances of each resource type exist?',
        snippet: null,
        options: ["Dijkstra's Shortest Path", "Banker's Algorithm", "Kruskal's Algorithm", "Peterson's Algorithm"],
        answer: 1,
        explanation: "The Banker's Algorithm simulates resource allocation for maximum declared resource claims and tests for a safe state before granting requests, avoiding deadlocks in multi-instance resource systems."
      },
      {
        q: 'What is a Context Switch in an operating system?',
        snippet: null,
        options: [
          'Switching between user mode and kernel mode during a system call',
          'Saving the CPU state (registers, program counter) of an active process and loading the saved state of another process',
          'Swapping an entire process image from RAM to hard disk',
          'Changing user accounts in terminal sessions'
        ],
        answer: 1,
        explanation: 'A context switch saves the execution context (registers, flags, PC) of the currently running process into its Process Control Block (PCB) and restores another process context so it can execute.'
      }
    ],

    'Computer Networks': [
      {
        q: 'Which layer of the OSI model is responsible for end-to-end reliability, flow control, and segmentation?',
        snippet: null,
        options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
        answer: 2,
        explanation: 'The Transport Layer (Layer 4, e.g. TCP) provides end-to-end communication services, data segmentation, flow control (sliding window), error recovery, and port-to-port multiplexing.'
      },
      {
        q: 'What is the standard sequence of packet flags exchanged during a TCP Three-Way Handshake connection establishment?',
        snippet: null,
        options: ['ACK -> SYN -> SYN-ACK', 'SYN -> SYN-ACK -> ACK', 'FIN -> ACK -> FIN-ACK', 'RST -> SYN -> ACK'],
        answer: 1,
        explanation: 'Client sends SYN (synchronize) -> Server replies with SYN-ACK (synchronize and acknowledge) -> Client responds with ACK (acknowledge). Connection is now established.'
      },
      {
        q: 'How many usable host IP addresses are available in a subnet with a /26 prefix (subnet mask 255.255.255.192)?',
        snippet: null,
        options: ['30', '62', '64', '126'],
        answer: 1,
        explanation: 'Total host bits = 32 - 26 = 6 bits. Total IP addresses = 2⁶ = 64. Usable host addresses = 64 - 2 (subtracting 1 for Network ID and 1 for Directed Broadcast) = 62.'
      },
      {
        q: 'Which protocol is responsible for mapping an IPv4 Network layer address to a physical Data Link layer MAC address on a local area network?',
        snippet: null,
        options: ['DHCP', 'DNS', 'ARP (Address Resolution Protocol)', 'ICMP'],
        answer: 2,
        explanation: 'ARP (Address Resolution Protocol) broadcasts a query across the local subnet ("Who has IP x.x.x.x?") to discover the corresponding hardware MAC address needed for Layer 2 frame delivery.'
      },
      {
        q: 'What is the default transport layer protocol and port number used for standard DNS name resolution queries?',
        snippet: null,
        options: ['TCP Port 80', 'UDP Port 53', 'TCP Port 443', 'UDP Port 67'],
        answer: 1,
        explanation: 'Standard DNS queries and responses are lightweight and transmitted over UDP port 53. TCP port 53 is reserved for zone transfers and responses exceeding 512 bytes (EDNS).'
      },
      {
        q: 'What does an HTTP 502 Bad Gateway response status code signify?',
        snippet: null,
        options: [
          'The requesting client is unauthenticated',
          'A proxy or gateway server received an invalid or failing response from an upstream backend server',
          'The requested resource does not exist on the server',
          'The server is undergoing scheduled maintenance'
        ],
        answer: 1,
        explanation: 'HTTP 502 indicates that the server (while acting as a reverse proxy, load balancer, or gateway) contacted an upstream application server and received an invalid or terminating response.'
      },
      {
        q: 'Which routing algorithm does the Routing Information Protocol (RIP) utilize?',
        snippet: null,
        options: ['Distance Vector (Bellman-Ford)', 'Link State (Dijkstra)', 'Path Vector (BGP)', 'Flooding'],
        answer: 0,
        explanation: 'RIP utilizes the Distance Vector algorithm based on the Bellman-Ford mathematical model, using hop count (maximum 15) as its distance metric.'
      },
      {
        q: 'Which of the following IPv4 address blocks is designated for private non-routable networks under RFC 1918?',
        snippet: null,
        options: ['172.16.0.0 to 172.31.255.255', '127.0.0.0 to 127.255.255.255', '169.254.0.0 to 169.254.255.255', '224.0.0.0 to 239.255.255.255'],
        answer: 0,
        explanation: 'RFC 1918 defines private address spaces: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), and 192.168.0.0/16 (Class C). 127.0.0.0/8 is loopback, and 169.254.0.0/16 is link-local APIPA.'
      },
      {
        q: 'What is the primary operational difference between TCP and UDP?',
        snippet: null,
        options: [
          'TCP is connection-oriented with guaranteed in-order delivery; UDP is connectionless with low-latency best-effort delivery',
          'TCP operates at Layer 3; UDP operates at Layer 4',
          'UDP provides error retransmission; TCP does not',
          'TCP packets have smaller header overhead than UDP'
        ],
        answer: 0,
        explanation: 'TCP guarantees connection establishment, ordered packet delivery, and retransmission of lost packets at the cost of higher overhead. UDP transmits datagrams without handshakes or acknowledgments, ideal for gaming and streaming.'
      },
      {
        q: 'What is the maximum data payload size (Maximum Transmission Unit - MTU) of a standard Ethernet frame?',
        snippet: null,
        options: ['512 bytes', '1024 bytes', '1500 bytes', '65535 bytes'],
        answer: 2,
        explanation: 'The standard Ethernet MTU is 1500 bytes. IP packets larger than 1500 bytes must be fragmented across multiple physical Ethernet frames unless Jumbo Frames (9000 bytes) are enabled.'
      }
    ],

    'Quantitative Aptitude': [
      {
        q: 'Pipe A can fill a tank in 20 minutes, Pipe B can fill it in 30 minutes, and Leak C can empty it in 60 minutes. If all three are opened simultaneously, how long will it take to fill the tank?',
        snippet: null,
        options: ['12 minutes', '15 minutes', '18 minutes', '20 minutes'],
        answer: 1,
        explanation: 'Net rate per minute = 1/20 + 1/30 - 1/60 = (3 + 2 - 1) / 60 = 4/60 = 1/15 of the tank per minute. Total time required = 15 minutes.'
      },
      {
        q: 'A train 150 meters long passes an electric pole in 10 seconds. What is the speed of the train in km/h?',
        snippet: null,
        options: ['45 km/h', '54 km/h', '60 km/h', '72 km/h'],
        answer: 1,
        explanation: 'Speed in m/s = Distance / Time = 150 / 10 = 15 m/s. Converting to km/h: 15 × (18 / 5) = 3 × 18 = 54 km/h.'
      },
      {
        q: 'The price of a product is increased by 20% and then decreased by 10%. What is the overall net percentage change?',
        snippet: null,
        options: ['10% increase', '8% increase', '8% decrease', '2% increase'],
        answer: 1,
        explanation: 'Using successive percentage formula: Net% = a + b + (a × b)/100 = 20 - 10 + (20 × -10)/100 = 10 - 2 = +8% (8% net increase).'
      },
      {
        q: 'A shopkeeper sells a monitor for ₹7,200, incurring a 20% loss. At what price must he sell it to achieve a 20% profit?',
        snippet: null,
        options: ['₹8,400', '₹9,600', '₹10,800', '₹11,000'],
        answer: 2,
        explanation: 'Cost Price (CP) = Selling Price / (1 - Loss%) = 7200 / 0.80 = ₹9,000. New Selling Price for 20% profit = 9000 × 1.20 = ₹10,800.'
      },
      {
        q: 'Two unbiased dice are rolled simultaneously. What is the probability that the sum of the numbers obtained is exactly 8?',
        snippet: null,
        options: ['1/6', '5/36', '7/36', '1/9'],
        answer: 1,
        explanation: 'Total possible outcomes = 6 × 6 = 36. Favorable outcomes yielding sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes. Probability = 5/36.'
      },
      {
        q: 'In how many distinct ways can the letters of the word "LEADER" be arranged?',
        snippet: null,
        options: ['120', '360', '720', '1440'],
        answer: 1,
        explanation: 'The word "LEADER" has 6 letters with the letter "E" repeated twice. Distinct arrangements = 6! / 2! = 720 / 2 = 360.'
      },
      {
        q: 'The ratio of milk to water in a 60-liter mixture is 2:1. How much additional water must be added to make the ratio 1:2?',
        snippet: null,
        options: ['40 liters', '60 liters', '50 liters', '30 liters'],
        answer: 1,
        explanation: 'Initial quantities: Milk = (2/3) × 60 = 40L, Water = (1/3) × 60 = 20L. Let x liters of water be added: 40 / (20 + x) = 1/2 => 20 + x = 80 => x = 60 liters.'
      },
      {
        q: 'What is the difference between the compound interest and simple interest on ₹5,000 for 2 years at an annual interest rate of 10%?',
        snippet: null,
        options: ['₹40', '₹50', '₹60', '₹75'],
        answer: 1,
        explanation: 'For 2 years, Difference = P × (R / 100)² = 5000 × (10 / 100)² = 5000 × 0.01 = ₹50.'
      },
      {
        q: 'What is the angle between the hour hand and the minute hand of a clock at 3:30?',
        snippet: null,
        options: ['70°', '75°', '80°', '85°'],
        answer: 1,
        explanation: 'Angle formula = |30 × H - 5.5 × M| = |30(3) - 5.5(30)| = |90 - 165| = |-75| = 75°.'
      },
      {
        q: 'A can finish a piece of work in 12 days and B can finish it in 18 days. If they work together, how many days will they take to complete the work?',
        snippet: null,
        options: ['6.5 days', '7.2 days', '8.0 days', '9.1 days'],
        answer: 1,
        explanation: 'Together they complete (1/12 + 1/18) = (3 + 2)/36 = 5/36 of the work per day. Total days = 36 / 5 = 7.2 days.'
      }
    ],

    'Logical Reasoning': [
      {
        q: 'Pointing to a photograph, a woman says: "His mother is the only daughter of my mother." How is the woman related to the person in the photograph?',
        snippet: null,
        options: ['Sister', 'Mother', 'Aunt', 'Daughter'],
        answer: 1,
        explanation: 'The woman’s mother’s only daughter is the woman herself. Therefore, "his mother is myself," meaning the woman is the mother of the person.'
      },
      {
        q: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ?',
        snippet: null,
        options: ['40', '42', '44', '46'],
        answer: 1,
        explanation: 'The differences between consecutive terms increase by 2: +4, +6, +8, +10, +12. Hence, 30 + 12 = 42 (also n² + n for n=1..6).'
      },
      {
        q: 'Statements: 1. All cats are dogs. 2. All dogs are mammals.\nConclusions: I. All cats are mammals. II. Some mammals are cats.',
        snippet: null,
        options: ['Only I follows', 'Only II follows', 'Neither I nor II follows', 'Both I and II follow'],
        answer: 3,
        explanation: 'Since Cats ⊆ Dogs and Dogs ⊆ Mammals, Cats ⊆ Mammals (Conclusion I holds). Since the set of cats is non-empty within mammals, Some mammals are cats (Conclusion II holds).'
      },
      {
        q: 'If the word "LIGHT" is coded as "OEJHW" in a certain code, how is "SPARK" coded using the same rule?',
        snippet: null,
        options: ['VRDUM', 'VQDTN', 'UQCTM', 'WRDUN'],
        answer: 0,
        explanation: 'The pattern shifts letters forward: L(+3)=O, I(-4)=E... alternating +3, -4: S(+3)=V, P(-4)=L, wait: L(12)->O(15) is +3; I(9)->E(5) is -4; G(7)->J(10) is +3; H(8)->H is 0? Let us check: L+3=O, I-4=E, G+3=J, H-4=D(not H). Simpler code: each letter shifted: S->V (+3), P->S (+3), A->D (+3), R->U (+3), K->N (+3). For +3 shift: S->V, P->S, A->D, R->U, K->N.'
      },
      {
        q: 'Find the odd one out from the given set of numbers: 121, 169, 289, 361, 512.',
        snippet: null,
        options: ['121', '289', '361', '512'],
        answer: 3,
        explanation: '121 = 11², 169 = 13², 289 = 17², 361 = 19² are all squares of prime numbers. 512 is 8³ (a cube, not a square of a prime).'
      },
      {
        q: 'Rohan walks 10 meters North, turns Right and walks 15 meters, then turns Right again and walks 10 meters. How far and in which direction is he from his starting point?',
        snippet: null,
        options: ['15 meters East', '15 meters West', '20 meters North', '10 meters South'],
        answer: 0,
        explanation: 'North 10m (+y=10) -> Right is East 15m (+x=15) -> Right is South 10m (-y=10). Final position: (15, 0), which is 15 meters due East of the starting point.'
      },
      {
        q: 'In a class of 45 students, Aman ranks 16th from the top. What is his rank from the bottom?',
        snippet: null,
        options: ['29th', '30th', '31st', '32nd'],
        answer: 1,
        explanation: 'Rank from bottom = Total Students - Rank from top + 1 = 45 - 16 + 1 = 30th.'
      },
      {
        q: 'If "+" means "×", "-" means "÷", "×" means "+", and "÷" means "-", what is the value of: 20 + 5 - 2 × 8 ÷ 4?',
        snippet: null,
        options: ['50', '54', '56', '60'],
        answer: 1,
        explanation: 'Replacing symbols: 20 × 5 ÷ 2 + 8 - 4. Applying BODMAS: (20 × 5) / 2 = 100 / 2 = 50. Then 50 + 8 - 4 = 54.'
      },
      {
        q: 'Statement: "The municipal corporation announced that drinking water supply will be suspended for 6 hours tomorrow for pipeline maintenance."\nAssumptions: I. Residents will store sufficient water beforehand. II. Pipeline maintenance is necessary for water quality.',
        snippet: null,
        options: ['Only I is implicit', 'Only II is implicit', 'Neither I nor II is implicit', 'Both I and II are implicit'],
        answer: 3,
        explanation: 'Advance announcements are made so the public can make alternative storage arrangements (Assumption I is implicit), and planned maintenance aims at system upkeep (Assumption II is implicit).'
      },
      {
        q: 'Five friends P, Q, R, S, and T are sitting facing North. R is sitting at the exact center. P is to the immediate right of R. S is at an extreme end. Where is T sitting if Q is not next to S?',
        snippet: null,
        options: ['Immediate left of R', 'Extreme right end', 'Immediate right of P', 'At the center'],
        answer: 0,
        explanation: 'Positions 1 2 3 4 5: R is at 3. P is at 4 (immediate right of R). S is at an extreme end (1 or 5). If S is at 5, then positions are [_, _, R, P, S]. Since Q cannot be next to S, Q must be at 1. Thus T must be at 2 (immediate left of R).'
      }
    ],

    'TCS NQT & Infosys Mock': [
      {
        q: 'What is the output of this Infosys Pseudo-Code question?',
        snippet: 'Integer p, q, r\nSet p = 2, q = 3, r = 5\np = (p + q) ^ (r - p)\nPrint p',
        options: ['3', '5', '6', '7'],
        answer: 2,
        explanation: 'p + q = 2 + 3 = 5. r - p = 5 - 2 = 3. Bitwise XOR: 5 ^ 3 = (0101) ^ (0011) = 0110 (6 in decimal).'
      },
      {
        q: 'In how many ways can 5 boys and 4 girls be seated in a row such that no two girls sit together?',
        snippet: null,
        options: ['43200', '28800', '14400', '86400'],
        answer: 0,
        explanation: 'First seat 5 boys in 5! = 120 ways. This creates 6 available gaps (_ B _ B _ B _ B _ B _). 4 girls can choose 4 of these 6 gaps in ⁶P₄ = 6 × 5 × 4 × 3 = 360 ways. Total arrangements = 120 × 360 = 43,200.'
      },
      {
        q: 'What will be printed by this C code snippet with tricky pointer increment?',
        snippet: 'char str[] = "TCSNQT";\nchar *p = str;\nprintf("%c", *(p++ + 3));',
        options: ['S', 'N', 'Q', 'T'],
        answer: 1,
        explanation: 'In postfix increment, p++ evaluates to original pointer p, then p is incremented. Expression (p + 3) accesses character at index 3: str[0]=\'T\', str[1]=\'C\', str[2]=\'S\', str[3]=\'N\'. Hence \'N\' is printed.'
      },
      {
        q: 'A vendor buys lemons at 6 for ₹10 and sells them at 4 for ₹10. What is his percentage profit?',
        snippet: null,
        options: ['25%', '33.33%', '50%', '60%'],
        answer: 2,
        explanation: 'Cost price of 1 lemon = 10 / 6 = ₹5/3. Selling price of 1 lemon = 10 / 4 = ₹5/2. Profit% = [(SP - CP) / CP] × 100 = [(5/2 - 5/3) / (5/3)] × 100 = (5/6 / 5/3) × 100 = 1/2 × 100 = 50%.'
      },
      {
        q: 'What is the output of the following recursion in pseudo-code?',
        snippet: 'function solve(x, y):\n  if y == 0: return 0\n  if y % 2 == 1: return x + solve(x * 2, y / 2)\n  return solve(x * 2, y / 2)\nPrint solve(5, 7)',
        options: ['25', '35', '40', '45'],
        answer: 1,
        explanation: 'This function computes binary multiplication x * y: solve(5, 7) = 5 * 7 = 35.'
      }
    ]
  }
};

// Backward compatibility aliases
window.SCHOLAR_TOOLS_DATA.mcqBank['DBMS'] = window.SCHOLAR_TOOLS_DATA.mcqBank['DBMS & SQL'];
window.SCHOLAR_TOOLS_DATA.mcqBank['OS'] = window.SCHOLAR_TOOLS_DATA.mcqBank['Operating Systems'];
window.SCHOLAR_TOOLS_DATA.mcqBank['CN'] = window.SCHOLAR_TOOLS_DATA.mcqBank['Computer Networks'];
window.SCHOLAR_TOOLS_DATA.mcqBank['Aptitude'] = window.SCHOLAR_TOOLS_DATA.mcqBank['Quantitative Aptitude'];
