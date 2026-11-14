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

  labPrograms: [
    {
      id: 'c',
      language: 'C',
      code: 'BCAP 106',
      semester: 'Sem I',
      title: 'Programming in C Lab',
      compilerUrl: 'https://www.programiz.com/c-programming/online-compiler/',
      program: `#include <stdio.h>

// Binary Search in a sorted array
int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {12, 24, 36, 48, 60, 72, 84};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 48;

    int idx = binarySearch(arr, n, key);
    if (idx != -1)
        printf("Element %d found at index %d\\n", key, idx);
    else
        printf("Element %d not found\\n", key);
    return 0;
}`,
      samples: [
        {
          name: 'Binary Search',
          code: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {12, 24, 36, 48, 60, 72, 84};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 48;

    int idx = binarySearch(arr, n, key);
    if (idx != -1)
        printf("Element %d found at index %d\\n", key, idx);
    else
        printf("Element %d not found\\n", key);
    return 0;
}`
        },
        {
          name: 'Matrix Multiplication',
          code: `#include <stdio.h>

int main() {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{5, 6}, {7, 8}};
    int C[2][2] = {0};

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
            printf("%d ", C[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`
        }
      ],
      viva: [
        { q: 'What is the difference between malloc() and calloc()?', a: 'malloc(size) allocates a single uninitialized block of memory, whereas calloc(n, size) allocates n blocks and initializes all bytes to zero.' },
        { q: 'What is a pointer and what is a NULL pointer?', a: 'A pointer stores the memory address of another variable. A NULL pointer points to nothing (address 0) and prevents dangling pointer dereferencing.' },
        { q: 'Explain call by value vs call by reference in C.', a: 'Call by value passes a copy of the variable so the original is unchanged. Call by reference passes the address (&var) using pointers so the function can modify the original.' },
        { q: 'What is the difference between struct and union?', a: 'In a struct, every member has its own memory location (total size = sum of members + padding). In a union, all members share the same memory (size = largest member).' },
        { q: 'Why do we use #include <stdio.h>?', a: 'It is a preprocessor directive that includes the Standard Input Output header file containing declarations for printf(), scanf(), fopen(), etc.' },
        { q: 'What is the difference between ++i and i++?', a: '++i (pre-increment) increments i first and then returns the new value; i++ (post-increment) returns the current value first and then increments i.' },
        { q: 'What is recursion? Give a base case example.', a: 'Recursion is a function calling itself directly or indirectly. A base case (e.g., if (n <= 1) return 1;) stops infinite recursion.' },
        { q: 'What is a dangling pointer?', a: 'A pointer that still holds the address of memory that has already been freed using free() or gone out of scope.' },
        { q: 'Differentiate between break and continue.', a: 'break exits the innermost loop or switch immediately, whereas continue skips the rest of the current iteration and jumps to the next iteration.' },
        { q: 'What is the scope of static variables in C?', a: 'A static local variable retains its value across function calls; a static global variable is restricted to the file in which it is declared.' }
      ]
    },
    {
      id: 'java',
      language: 'Java',
      code: 'BCAP 204',
      semester: 'Sem II',
      title: 'Java Programming Lab',
      compilerUrl: 'https://www.programiz.com/java-programming/online-compiler/',
      program: `// Polymorphism & Interface Demo in Java
interface Printable {
    void printDetails();
}

class Student implements Printable {
    private String name;
    private double cgpa;

    Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }

    @Override
    public void printDetails() {
        System.out.println("Student: " + name + " | CGPA: " + cgpa);
    }
}

public class Main {
    public static void main(String[] args) {
        Printable s = new Student("Ananya", 9.15);
        s.printDetails();
    }
}`,
      samples: [
        {
          name: 'Interface & Polymorphism',
          code: `interface Printable {
    void printDetails();
}

class Student implements Printable {
    private String name;
    private double cgpa;

    Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }

    @Override
    public void printDetails() {
        System.out.println("Student: " + name + " | CGPA: " + cgpa);
    }
}

public class Main {
    public static void main(String[] args) {
        Printable s = new Student("Ananya", 9.15);
        s.printDetails();
    }
}`
        },
        {
          name: 'Exception Handling',
          code: `public class Main {
    static void checkAttendance(int pct) {
        if (pct < 75) {
            throw new IllegalArgumentException("Attendance below 75%: " + pct + "%");
        }
        System.out.println("Eligible for exam: " + pct + "%");
    }

    public static void main(String[] args) {
        try {
            checkAttendance(68);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Attendance check completed.");
        }
    }
}`
        }
      ],
      viva: [
        { q: 'Why is Java platform-independent?', a: 'Java source code compiles into bytecode (.class), which runs on any OS that has a Java Virtual Machine (JVM) — "Write Once, Run Anywhere".' },
        { q: 'Differentiate between JDK, JRE, and JVM.', a: 'JVM executes bytecode; JRE = JVM + core libraries to run Java apps; JDK = JRE + development tools (javac, debugger, etc.).' },
        { q: 'What is the difference between method overloading and overriding?', a: 'Overloading happens in the same class with the same method name and different parameters (compile-time). Overriding redefines a superclass method in a subclass with the same signature (runtime).' },
        { q: 'Why does Java not support multiple inheritance with classes?', a: 'To avoid the Diamond Problem (ambiguity when two parent classes define the same method). Java achieves multiple inheritance via interfaces.' },
        { q: 'What is the difference between abstract class and interface?', a: 'An abstract class can have constructors, state (non-final fields), and concrete/abstract methods. An interface defines a contract (methods are abstract/default/static, fields are public static final).' },
        { q: 'Explain the final keyword in Java.', a: 'A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited.' },
        { q: 'What is the difference between == and .equals()?', a: '== compares object references (memory addresses) for objects, whereas .equals() compares logical content (when overridden, as in String).' },
        { q: 'What is a checked vs unchecked exception?', a: 'Checked exceptions (e.g., IOException) are verified at compile time and must be caught or declared with throws. Unchecked exceptions (e.g., NullPointerException) extend RuntimeException.' },
        { q: 'Why is String immutable in Java?', a: 'For security, thread-safety, and String Constant Pool caching, which saves memory when identical string literals are reused.' },
        { q: 'What does the static keyword mean?', a: 'static members belong to the class rather than any specific instance and are loaded once when the class is loaded into memory.' }
      ]
    },
    {
      id: 'python',
      language: 'Python',
      code: 'BCAP 306',
      semester: 'Sem III',
      title: 'Python Programming Lab',
      compilerUrl: 'https://www.programiz.com/python-programming/online-compiler/',
      program: `# Student SGPA & Topper Analyzer in Python
students = [
    {"name": "Aarav", "scores": [88, 92, 85, 90]},
    {"name": "Diya", "scores": [94, 89, 96, 91]},
    {"name": "Rohan", "scores": [76, 81, 79, 84]},
]

for s in students:
    avg = sum(s["scores"]) / len(s["scores"])
    grade = "O" if avg >= 90 else "A+" if avg >= 80 else "A"
    print(f"{s['name']}: Avg = {avg:.2f} | Grade = {grade}")

topper = max(students, key=lambda s: sum(s["scores"]))
print("Topper:", topper["name"])`,
      samples: [
        {
          name: 'Student Score Analyzer',
          code: `students = [
    {"name": "Aarav", "scores": [88, 92, 85, 90]},
    {"name": "Diya", "scores": [94, 89, 96, 91]},
    {"name": "Rohan", "scores": [76, 81, 79, 84]},
]

for s in students:
    avg = sum(s["scores"]) / len(s["scores"])
    grade = "O" if avg >= 90 else "A+" if avg >= 80 else "A"
    print(f"{s['name']}: Avg = {avg:.2f} | Grade = {grade}")

topper = max(students, key=lambda s: sum(s["scores"]))
print("Topper:", topper["name"])`
        },
        {
          name: 'Fibonacci & Prime Filter',
          code: `def is_prime(n):
    if n < 2:
        return False
    return all(n % i != 0 for i in range(2, int(n ** 0.5) + 1))

fib = [0, 1]
for _ in range(10):
    fib.append(fib[-1] + fib[-2])

primes_in_fib = [x for x in fib if is_prime(x)]
print("Fibonacci:", fib)
print("Prime Fibonacci numbers:", primes_in_fib)`
        }
      ],
      viva: [
        { q: 'What is the difference between a list and a tuple in Python?', a: 'Lists ([]) are mutable (elements can be added, removed, or changed), whereas tuples (()) are immutable, faster, and can be used as dictionary keys.' },
        { q: 'What is a dictionary and how is it implemented?', a: 'A dict stores key-value pairs using a hash table, providing average O(1) lookup, insertion, and deletion.' },
        { q: 'Explain list comprehension with an example.', a: 'A concise syntax to create lists: squares = [x**2 for x in range(1, 6)] produces [1, 4, 9, 16, 25].' },
        { q: 'What are *args and **kwargs?', a: '*args collects extra positional arguments into a tuple; **kwargs collects extra keyword arguments into a dictionary.' },
        { q: 'What is the difference between deep copy and shallow copy?', a: 'copy.copy() creates a new outer object but references nested objects; copy.deepcopy() recursively copies all nested objects.' },
        { q: 'What is a lambda function?', a: 'An anonymous single-expression function defined with lambda, e.g., lambda x: x * 2, often passed to map(), filter(), or sorted().' },
        { q: 'How does Python manage memory?', a: 'Python uses private heap space managed by reference counting and a cyclic garbage collector to reclaim unused objects.' },
        { q: 'What is PEP 8?', a: 'PEP 8 is Python’s official style guide covering naming conventions, 4-space indentation, line length, and code readability.' },
        { q: 'What is the difference between is and ==?', a: '== checks value equality, whereas is checks object identity (whether both variables point to the exact same object in memory).' },
        { q: 'What is a decorator in Python?', a: 'A function that wraps another function to extend or modify its behavior without altering its source code, applied with @decorator_name.' }
      ]
    },
    {
      id: 'sql',
      language: 'SQL',
      code: 'BCAP 304',
      semester: 'Sem III',
      title: 'DBMS / SQL Lab',
      compilerUrl: 'https://www.programiz.com/sql/online-compiler/',
      program: `-- BCA Student & Enrollment Schema + Analytical Queries
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    semester INT CHECK (semester BETWEEN 1 AND 6),
    cgpa DECIMAL(4,2)
);

INSERT INTO Students VALUES
(101, 'Ananya Rao', 3, 9.10),
(102, 'Karthik M', 3, 8.45),
(103, 'Sneha K', 4, 8.90);

-- Aggregate & Filter Query
SELECT semester, COUNT(*) AS total_students, ROUND(AVG(cgpa), 2) AS avg_cgpa
FROM Students
GROUP BY semester
HAVING AVG(cgpa) >= 8.50
ORDER BY avg_cgpa DESC;`,
      samples: [
        {
          name: 'DDL, DML & GROUP BY',
          code: `CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    semester INT CHECK (semester BETWEEN 1 AND 6),
    cgpa DECIMAL(4,2)
);

INSERT INTO Students VALUES
(101, 'Ananya Rao', 3, 9.10),
(102, 'Karthik M', 3, 8.45),
(103, 'Sneha K', 4, 8.90);

SELECT semester, COUNT(*) AS total_students, ROUND(AVG(cgpa), 2) AS avg_cgpa
FROM Students
GROUP BY semester
HAVING AVG(cgpa) >= 8.50
ORDER BY avg_cgpa DESC;`
        },
        {
          name: 'INNER & LEFT JOIN',
          code: `SELECT s.student_id, s.name, c.course_code, e.grade
FROM Students s
INNER JOIN Enrollments e ON s.student_id = e.student_id
LEFT JOIN Courses c ON e.course_id = c.course_id
WHERE s.semester = 3
ORDER BY s.name;`
        }
      ],
      viva: [
        { q: 'What is the difference between DELETE, TRUNCATE, and DROP?', a: 'DELETE removes specific rows (DML, can use WHERE, rollbackable). TRUNCATE removes all rows quickly (DDL, resets identity). DROP deletes the entire table structure and data.' },
        { q: 'What is the difference between WHERE and HAVING?', a: 'WHERE filters individual rows before grouping; HAVING filters grouped rows after GROUP BY and can use aggregate functions.' },
        { q: 'Explain Primary Key vs Unique Key.', a: 'A table can have only one Primary Key and it cannot contain NULLs. A table can have multiple Unique Keys, and they typically allow NULL.' },
        { q: 'What is a Foreign Key?', a: 'A column (or set of columns) that references the Primary Key of another table to enforce referential integrity.' },
        { q: 'What are ACID properties in DBMS?', a: 'Atomicity (all or nothing), Consistency (valid state transitions), Isolation (concurrent transactions do not interfere), Durability (committed changes persist).' },
        { q: 'Explain 1NF, 2NF, and 3NF.', a: '1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependency on a composite key. 3NF: 2NF + no transitive dependency between non-key attributes.' },
        { q: 'What is the difference between INNER JOIN and LEFT JOIN?', a: 'INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matched rows (or NULL) from the right table.' },
        { q: 'What is an Index in SQL and what is its trade-off?', a: 'An index (usually B-Tree) speeds up SELECT queries, but slows down INSERT/UPDATE/DELETE and consumes extra storage.' },
        { q: 'What is a View in SQL?', a: 'A virtual table based on the result set of a SELECT query; it simplifies complex queries and restricts column/row access.' },
        { q: 'Differentiate between UNION and UNION ALL.', a: 'UNION combines results and removes duplicates (slower due to sorting), whereas UNION ALL keeps all rows including duplicates.' }
      ]
    }
  ],

  formulaSheets: [
    {
      id: 'discrete-math',
      title: 'Discrete Mathematics',
      code: 'BCAT 101',
      subtitle: '1-Page Condensed Exam Cheat Sheet — Logic, Sets, Relations, Graphs & Combinatorics',
      sections: [
        {
          heading: 'Propositional Logic & Equivalences',
          items: [
            { term: 'Implication', formula: 'p → q ≡ ¬p ∨ q', note: 'False only when p=T, q=F' },
            { term: 'Contrapositive', formula: 'p → q ≡ ¬q → ¬p', note: 'Logically equivalent to p → q' },
            { term: 'De Morgan’s Laws', formula: '¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q', note: 'Applies to quantifiers too: ¬∀x P(x) ≡ ∃x ¬P(x)' },
            { term: 'Absorption', formula: 'p ∨ (p ∧ q) ≡ p ; p ∧ (p ∨ q) ≡ p', note: 'Useful for simplifying Boolean expressions' }
          ]
        },
        {
          heading: 'Sets, Relations & Functions',
          items: [
            { term: 'Inclusion–Exclusion (2 sets)', formula: '|A ∪ B| = |A| + |B| − |A ∩ B|', note: '3 sets: +|A∩B∩C| after subtracting pairwise' },
            { term: 'Power Set Size', formula: '|P(A)| = 2ⁿ  where |A| = n', note: 'Number of subsets of A' },
            { term: 'Equivalence Relation', formula: 'Reflexive + Symmetric + Transitive', note: 'Partitions a set into disjoint equivalence classes' },
            { term: 'Partial Order (Poset)', formula: 'Reflexive + Antisymmetric + Transitive', note: 'Represented visually by a Hasse Diagram' }
          ]
        },
        {
          heading: 'Counting & Pigeonhole Principle',
          items: [
            { term: 'Permutations (nPr)', formula: 'P(n, r) = n! / (n − r)!', note: 'Order matters' },
            { term: 'Combinations (nCr)', formula: 'C(n, r) = n! / (r!(n − r)!)', note: 'Order does not matter' },
            { term: 'Pigeonhole Principle', formula: '⌈N / k⌉ objects in at least one box', note: 'N objects into k boxes' },
            { term: 'Recurrence (Linear)', formula: 'aₙ = c₁aₙ₋₁ + c₂aₙ₋₂', note: 'Solve characteristic eq: r² − c₁r − c₂ = 0' }
          ]
        },
        {
          heading: 'Graph Theory Essentials',
          items: [
            { term: 'Handshaking Lemma', formula: '∑ deg(v) = 2|E|', note: 'Even number of odd-degree vertices' },
            { term: 'Euler’s Planar Formula', formula: 'v − e + f = 2', note: 'Connected planar graph; e ≤ 3v − 6' },
            { term: 'Euler Circuit', formula: 'All vertices have even degree', note: 'Euler path: exactly 0 or 2 odd-degree vertices' },
            { term: 'Tree Property', formula: '|E| = |V| − 1', note: 'Connected acyclic graph' }
          ]
        }
      ]
    },
    {
      id: 'cold',
      title: 'Computer Organization & Logic Design (COLD)',
      code: 'BCAT 105',
      subtitle: '1-Page Condensed Exam Cheat Sheet — Number Systems, Boolean Algebra, K-Maps & Sequential Circuits',
      sections: [
        {
          heading: 'Number Systems & Complements',
          items: [
            { term: 'Base Conversion', formula: '(N)ᵦ = ∑ dᵢ × bⁱ', note: 'Binary (2), Octal (8 = 3 bits), Hex (16 = 4 bits)' },
            { term: '1’s Complement', formula: 'Invert all bits (0 ↔ 1)', note: 'Range for n bits: −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1)' },
            { term: '2’s Complement', formula: '1’s Complement + 1', note: 'Range: −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1); unique zero' },
            { term: 'Gray Code (B → G)', formula: 'Gₙ = Bₙ ; Gᵢ = Bᵢ₊₁ ⊕ Bᵢ', note: 'Unit-distance code (1 bit changes per step)' }
          ]
        },
        {
          heading: 'Boolean Algebra & Logic Gates',
          items: [
            { term: 'Universal Gates', formula: 'NAND & NOR', note: 'Any Boolean function can be built using only NAND or only NOR' },
            { term: 'Consensus Theorem', formula: 'XY + X’Z + YZ = XY + X’Z', note: 'Redundant term YZ is eliminated' },
            { term: 'XOR & XNOR', formula: 'A ⊕ B = A’B + AB’ ; A ⊙ B = AB + A’B’', note: 'XOR is odd-1s detector' },
            { term: 'Duality Principle', formula: 'Swap (+ ↔ ·) and (0 ↔ 1)', note: 'Keeps variables unchanged' }
          ]
        },
        {
          heading: 'Combinational Circuits',
          items: [
            { term: 'Half Adder', formula: 'Sum = A ⊕ B ; Carry = A · B', note: '2 inputs, 2 outputs' },
            { term: 'Full Adder', formula: 'Sum = A ⊕ B ⊕ Cᵢₙ ; Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B)', note: 'Uses 2 Half Adders + 1 OR gate' },
            { term: 'Multiplexer (MUX)', formula: '2ⁿ data inputs, n select lines → 1 output', note: 'Universal logic implementer' },
            { term: 'Decoder', formula: 'n inputs → 2ⁿ outputs', note: 'Generates all minterms of n variables' }
          ]
        },
        {
          heading: 'Flip-Flops & Sequential Logic',
          items: [
            { term: 'SR Flip-Flop', formula: 'Q(t+1) = S + R’Q(t) ; SR = 0', note: 'S=1, R=1 is invalid/forbidden' },
            { term: 'JK Flip-Flop', formula: 'Q(t+1) = JQ’(t) + K’Q(t)', note: 'J=1, K=1 toggles output (eliminates SR invalid state)' },
            { term: 'D Flip-Flop', formula: 'Q(t+1) = D', note: 'Data / Delay flip-flop' },
            { term: 'T Flip-Flop', formula: 'Q(t+1) = T ⊕ Q(t)', note: 'Used in binary counters (mod-N needs ⌈log₂N⌉ FFs)' }
          ]
        }
      ]
    },
    {
      id: 'daa',
      title: 'Design & Analysis of Algorithms (DAA)',
      code: 'BCAT 405',
      subtitle: '1-Page Condensed Exam Cheat Sheet — Asymptotics, Master Theorem, Greedy, DP & Graph Algorithms',
      sections: [
        {
          heading: 'Asymptotic Notations & Master Theorem',
          items: [
            { term: 'Big-O / Ω / Θ', formula: 'O (upper), Ω (lower), Θ (tight bound)', note: '1 < log n < √n < n < n log n < n² < 2ⁿ < n!' },
            { term: 'Master Theorem', formula: 'T(n) = aT(n/b) + f(n), a≥1, b>1', note: 'Compare f(n) with n^(log_b a)' },
            { term: 'Case 1 / 2 / 3', formula: 'f(n) < n^c ⇒ Θ(n^c) | f(n) = Θ(n^c) ⇒ Θ(n^c log n) | f(n) > n^c ⇒ Θ(f(n))', note: 'c = log_b(a)' }
          ]
        },
        {
          heading: 'Sorting & Divide-and-Conquer',
          items: [
            { term: 'Binary Search', formula: 'T(n) = T(n/2) + O(1) ⇒ O(log n)', note: 'Requires sorted array' },
            { term: 'Merge Sort', formula: 'Best/Avg/Worst: Θ(n log n) | Space: O(n)', note: 'Stable, Divide & Conquer' },
            { term: 'Quick Sort', formula: 'Best/Avg: O(n log n) | Worst: O(n²)', note: 'In-place O(log n) stack; worst when already sorted' },
            { term: 'Heap Sort', formula: 'Best/Avg/Worst: O(n log n) | Space: O(1)', note: 'Not stable, uses binary heap' }
          ]
        },
        {
          heading: 'Greedy vs Dynamic Programming',
          items: [
            { term: 'Fractional Knapsack', formula: 'Greedy by (Value / Weight) → O(n log n)', note: 'Optimal for fractional items' },
            { term: '0/1 Knapsack (DP)', formula: 'dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])', note: 'Time & Space: O(nW)' },
            { term: 'LCS (DP)', formula: 'O(m × n) time', note: 'Match: 1 + dp[i-1][j-1]; Mismatch: max(dp[i-1][j], dp[i][j-1])' },
            { term: 'Huffman Coding', formula: 'Greedy min-heap → O(n log n)', note: 'Optimal prefix-free binary code' }
          ]
        },
        {
          heading: 'Graph Algorithms & Complexity Classes',
          items: [
            { term: 'BFS / DFS', formula: 'O(V + E) using Adjacency List', note: 'BFS = shortest unweighted path; DFS = cycle/toposort' },
            { term: 'Dijkstra’s Shortest Path', formula: 'O((V + E) log V) with Min-Heap', note: 'Fails with negative edge weights (use Bellman-Ford O(VE))' },
            { term: 'Kruskal / Prim (MST)', formula: 'Kruskal: O(E log E) | Prim: O(E log V)', note: 'Greedy minimum spanning tree' },
            { term: 'P, NP, NP-Complete', formula: 'P ⊆ NP ; NPC = NP ∩ NP-Hard', note: 'SAT, TSP, Clique, Vertex Cover are NP-Complete' }
          ]
        }
      ]
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence (AI)',
      code: 'BCAT 501',
      subtitle: '1-Page Condensed Exam Cheat Sheet — Search, Heuristics, Game Playing, Logic & Bayes',
      sections: [
        {
          heading: 'Uninformed Search Strategies',
          items: [
            { term: 'BFS', formula: 'Time & Space: O(bᵈ)', note: 'Complete & Optimal (for uniform step cost); FIFO queue' },
            { term: 'DFS', formula: 'Time: O(bᵐ) | Space: O(bm)', note: 'Not complete in infinite depth; LIFO stack' },
            { term: 'Uniform Cost Search', formula: 'Time & Space: O(b^(1+⌊C*/ε⌋))', note: 'Expands lowest path cost g(n); optimal' },
            { term: 'IDS (Iterative Deepening)', formula: 'Time: O(bᵈ) | Space: O(bd)', note: 'Combines BFS completeness with DFS low memory' }
          ]
        },
        {
          heading: 'Informed (Heuristic) Search',
          items: [
            { term: 'Greedy Best-First', formula: 'f(n) = h(n)', note: 'Fast but neither complete nor optimal' },
            { term: 'A* Search', formula: 'f(n) = g(n) + h(n)', note: 'Optimal if h(n) is admissible (never overestimates) & consistent' },
            { term: 'Admissibility', formula: '0 ≤ h(n) ≤ h*(n)', note: 'h*(n) = true optimal cost from n to goal' },
            { term: 'Hill Climbing', formula: 'Local search maximizing/minimizing h(n)', note: 'Can get stuck in local maxima, plateaus, or ridges' }
          ]
        },
        {
          heading: 'Adversarial Search (Games)',
          items: [
            { term: 'Minimax Algorithm', formula: 'MAX maximizes utility; MIN minimizes', note: 'Time: O(bᵐ), Space: O(bm)' },
            { term: 'Alpha-Beta Pruning', formula: 'Prune when α ≥ β', note: 'α = best MAX choice, β = best MIN choice; best-case O(b^(m/2))' }
          ]
        },
        {
          heading: 'Knowledge Representation & Uncertainty',
          items: [
            { term: 'Modus Ponens', formula: 'From (P → Q) and P, infer Q', note: 'Sound inference rule in Propositional & First-Order Logic' },
            { term: 'Resolution Rule', formula: '(A ∨ B) ∧ (¬B ∨ C) ⊢ (A ∨ C)', note: 'Refutation-complete in CNF' },
            { term: 'Bayes’ Theorem', formula: 'P(H|E) = [P(E|H) · P(H)] / P(E)', note: 'Posterior = (Likelihood × Prior) / Evidence' },
            { term: 'PEAS Framework', formula: 'Performance, Environment, Actuators, Sensors', note: 'Used to specify intelligent agent task environments' }
          ]
        }
      ]
    }
  ],

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
