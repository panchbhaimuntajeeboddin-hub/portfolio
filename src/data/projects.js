/**
 * Projects Data File
 * You can edit descriptions, technologies, GitHub links, and live demo URLs below.
 * Replace placeholder URLs with your active repositories and deployment links.
 */

export const projectsData = [
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection ML",
    category: "Machine Learning",
    badge: "AI/ML & Data Science",
    shortDescription: "High-accuracy anomaly detection system utilizing Scikit-Learn and ensemble learning to detect fraudulent financial transactions.",
    fullDescription: "An end-to-end Machine Learning pipeline engineered to detect fraudulent credit card transactions in highly imbalanced datasets. Utilized SMOTE (Synthetic Minority Over-sampling Technique) to balance transaction classes, evaluated Random Forest, XGBoost, and Logistic Regression models, and deployed an interactive prediction dashboard with real-time risk scoring and feature importance analytics.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "SMOTE", "Flask"],
    githubUrl: "https://github.com/panchbhaimuntajeeboddin-hub/Credit_fraud_detection",
    demoUrl: "https://credit-fraud-frontend-v83s.onrender.com/",
    highlights: [
      "Mitigated class imbalance ratio of 99.8:0.2 using SMOTE and stratified k-fold validation",
      "Achieved 99.2% ROC-AUC score and minimized false positives for legitimate transactions",
      "Interactive analytics interface with confusion matrix visualizer and SHAP feature explainability",
      "Modular Python pipeline structured for batch inference and streaming mock transactions"
    ],
    status: "Completed / Live on Render"
  },
  {
    id: "govt-schemes-ai",
    title: "AI-Based Government Scheme Recommendation",
    category: "AI & Full Stack",
    badge: "NLP & Citizen Tech",
    shortDescription: "Intelligent NLP-driven recommendation engine matching citizens with eligible social welfare and government welfare schemes.",
    fullDescription: "A citizen-centric recommendation engine that simplifies discovering government welfare schemes. Powered by Natural Language Processing and rule-based eligibility filtering, users input their demographic background, income, occupation, and location to receive tailored, ranked recommendations along with simplified application steps and required documentation checklists.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "FastAPI", "React", "NLP", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/panchbhaimuntajeeboddin-hub/government-officer-management-system",
    demoUrl: "https://government-officer-management-system.netlify.app/",
    highlights: [
      "Natural Language query parsing supporting multiple user demographic profiles",
      "Multi-criteria eligibility scoring algorithm ranking schemes by benefit impact",
      "Clean multilingual-ready React frontend with intuitive multi-step form wizard",
      "RESTful FastAPI backend with schema caching and rapid sub-100ms response times"
    ],
    status: "Completed / Live on Netlify"
  },
  {
    id: "roadguard-ai",
    title: "RoadGuard AI — Road Defect Detection",
    category: "Computer Vision",
    badge: "Computer Vision & IoT",
    shortDescription: "Real-time automated road pothole and surface defect detection system built using deep learning computer vision.",
    fullDescription: "RoadGuard AI automates the detection and reporting of road degradation, potholes, and cracks to assist municipal authorities in proactive infrastructure maintenance. Employs deep learning computer vision models trained on custom road hazard datasets to annotate and geolocate defects from dashboard camera video feeds.",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "PyTorch", "OpenCV", "YOLOv8", "Streamlit", "Geolocation API"],
    githubUrl: "https://github.com/panchbhaimuntajeeboddin-hub",
    demoUrl: "",
    highlights: [
      "Trained on annotated road defect datasets achieving 88%+ mAP in varying daylight conditions",
      "Frame-by-frame video inference pipeline processing up to 30 FPS on consumer hardware",
      "Automated severity grading (Minor, Moderate, Critical) for prioritization",
      "Exportable defect mapping reports with simulated GPS coordinate telemetry"
    ],
    status: "Active Development / Hackathon Project"
  },
  {
    id: "fullstack-apps",
    title: "Modern Full-Stack Web Suite",
    category: "Full Stack",
    badge: "React & Cloud Architecture",
    shortDescription: "Scalable MERN/PERN full-stack applications featuring JWT auth, role-based access, and reactive state management.",
    fullDescription: "A series of production-ready full-stack web applications engineered with modular component hierarchies, robust API design, secure authentication workflows, and relational/document database persistence. Built with performance, accessibility, and intuitive user experiences as core design tenets.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/panchbhaimuntajeeboddin-hub",
    demoUrl: "",
    highlights: [
      "Secure JWT token-based authentication with refresh rotation and bcrypt password hashing",
      "Responsive, accessible UI with Tailwind CSS and Framer Motion micro-interactions",
      "RESTful API architecture with comprehensive input validation and error middleware",
      "Database connection pooling and optimized indexing for rapid query execution"
    ],
    status: "Featured Showcase"
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Computer Vision",
  "Full Stack",
  "AI & Full Stack"
];
