/**
 * Skills Data File
 * Categorized technical competencies. No arbitrary percentages invented.
 * Grouped into clean categories with focus areas.
 */

export const skillsCategories = [
  {
    category: "Programming Languages",
    id: "programming",
    icon: "Code2",
    description: "Core languages for object-oriented programming, systems logic, algorithms, and data science.",
    skills: [
      { name: "Java", focus: "OOP, Data Structures, Collections, Spring Boot", tag: "Core" },
      { name: "Python", focus: "AI/ML, NLP (TF-IDF, Naive Bayes), Flask APIs", tag: "Core" },
      { name: "C++", focus: "OOP, Standard Template Library (STL), Problem Solving", tag: "Foundational" },
      { name: "C", focus: "Procedural logic, Memory management, Fundamentals", tag: "Foundational" }
    ]
  },
  {
    category: "Frontend Development",
    id: "frontend",
    icon: "Layout",
    description: "Crafting modern, accessible, responsive web and mobile user interfaces.",
    skills: [
      { name: "React.js", focus: "Hooks, State Management, Component Architecture", tag: "Primary" },
      { name: "React Native", focus: "Cross-platform mobile application development", tag: "Mobile" },
      { name: "JavaScript", focus: "ES6+, Async/Await, Web APIs, Event Loop", tag: "Core" },
      { name: "HTML & CSS", focus: "Semantic HTML5, CSS3, Responsive Design, Tailwind CSS", tag: "Standard" }
    ]
  },
  {
    category: "Backend Engineering",
    id: "backend",
    icon: "Server",
    description: "Scalable server architectures, secure RESTful API design, and enterprise backends.",
    skills: [
      { name: "Node.js", focus: "Event-driven runtime, Non-blocking I/O, NPM Ecosystem", tag: "Core" },
      { name: "Express.js", focus: "REST API routing, Middleware, JWT Authentication", tag: "Core" },
      { name: "Spring Boot", focus: "Java Enterprise, REST Controllers, Backend Services", tag: "Enterprise" }
    ]
  },
  {
    category: "Databases & Storage",
    id: "database",
    icon: "Database",
    description: "Relational schemas, SQL queries, transaction management, and indexing.",
    skills: [
      { name: "PostgreSQL", focus: "ACID compliance, Complex Relational Queries, Schema Design", tag: "Relational" },
      { name: "MySQL", focus: "Relational modeling, SQL Queries, Joins, Constraints", tag: "Relational" },
      { name: "Oracle", focus: "Enterprise relational database management, SQL queries", tag: "Relational" }
    ]
  },
  {
    category: "AI / Machine Learning",
    id: "ai-ml",
    icon: "Cpu",
    description: "Applied Machine Learning, NLP classification, and predictive anomaly detection.",
    skills: [
      { name: "NLP & Text Processing", focus: "Natural Language Processing, Tokenization, Text Classifiers", tag: "Applied" },
      { name: "Machine Learning", focus: "Scikit-Learn, SMOTE Class Balancing, Random Forest, XGBoost", tag: "Applied" },
      { name: "Model Evaluation", focus: "ROC-AUC, Precision/Recall, Confusion Matrix, Validation", tag: "Metrics" }
    ]
  },
  {
    category: "Version Control & Tools",
    id: "tools",
    icon: "Wrench",
    description: "Version control, API testing, debugging, and software engineering workflows.",
    skills: [
      { name: "Git", focus: "Branching workflows, Merge conflict resolution, Versioning", tag: "Workflow" },
      { name: "GitHub", focus: "Remote repositories, Pull requests, Issue tracking", tag: "Workflow" },
      { name: "VS Code", focus: "Development environment, Debugging, Extensions", tag: "Tools" },
      { name: "Postman", focus: "RESTful API testing, Endpoints, Request validation", tag: "Testing" }
    ]
  }
];
