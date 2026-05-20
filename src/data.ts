import { Project, SkillCategory, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "Meghana Pallem",
  fullName: "Pallem Meghana Naga Rajeswari",
  title: "AI & ML Undergraduate",
  subTitle: "Aspiring Machine Learning Engineer",
  tagline: "Building intelligent, data-driven systems and real-world Generative AI applications.",
  email: "meghanapallem09@gmail.com",
  phone: "+91 89855 13022",
  location: "Andhra Pradesh, India",
  availability: "Open to Remote Work / Internships",
  linkedin: "https://linkedin.com/in/meghana-naga-rajeswari-pallem-ab9950375",
  github: "https://github.com/PallemMeghana09",
  aboutText: "I am an AI & Machine Learning undergraduate with a strong foundation in Python, Machine Learning, Data Science, and Generative AI. I am passionate about developing intelligent, data-driven solutions and building real-world AI applications. I specialize in model training, NLP pipelines, data preprocessing, and automated workflows. Eager to contribute technical expertise, innovation, and continuous learning to high-impact technical environments."
};

export const PROJECTS: Project[] = [
  {
    id: "health-assistant",
    title: "AI Health Assistant",
    period: "Feb 2025 - Apr 2025",
    description: "Developed an AI-powered healthcare assistant that provides symptom analysis, basic health recommendations, and medical information using Machine Learning and Python.",
    tech: ["Python", "Machine Learning", "NLP", "Streamlit", "Symptom Parsing"],
    category: "ml",
    highlights: [
      "Engineered automated symptom-to-condition classification using ML pipelines",
      "Integrated basic medical QA system with safety guardrails and disclaimer controls",
      "Built clean interactive data fields for symptom weight and duration analytics"
    ],
    icon: "Activity"
  },
  {
    id: "trading-bot",
    title: "Automated Trading Bot",
    period: "May 2025 - Jun 2025",
    description: "Built an automated trading bot using Python to analyze market trends, execute simulated trades, and generate real-time trading insights.",
    tech: ["Python", "Pandas", "Scikit-Learn", "APIs", "Trend Analysis"],
    category: "analytics",
    highlights: [
      "Computed real-time moving averages, RSI indexes, and Bollinger Band deviations",
      "Developed a paper-trading simulation ledger with historical logging and performance summaries",
      "Achieved automated system-trigger signaling of buy/sell options based on market indicators"
    ],
    icon: "TrendingUp"
  },
  {
    id: "ai-tutor",
    title: "Virtual AI Tutor",
    period: "Aug 2025 - Sep 2025",
    description: "Created an intelligent AI tutor platform that delivers personalized learning support, quiz generation, and doubt clarification using AI and NLP.",
    tech: ["Python", "NLP", "Generative AI", "Quiz Generator", "Prompt Engineering"],
    category: "nlp",
    highlights: [
      "Customized personalized study roadmap engines based on user mastery assessments",
      "Designed dynamic question generation algorithms using context-aware NLP mechanisms",
      "Created instant question-answering systems for complex concept clarifications"
    ],
    icon: "BookOpen"
  },
  {
    id: "rec-agent",
    title: "Product Recommendation Agent",
    period: "Oct 2025 - Dec 2025",
    description: "Designed an AI-based recommendation system that suggests personalized products based on user preferences, browsing behavior, and data analysis techniques.",
    tech: ["Python", "Collaborative Filtering", "Data Scraping", "Scikit-Learn"],
    category: "agents",
    highlights: [
      "Developed collaborative and content-based recommendation hybrid models",
      "Created analytics pipelines for user behavioral graphs and purchase intent scoring",
      "Implemented swift user-profile clustering using advanced matrix factorization"
    ],
    icon: "ThumbsUp"
  },
  {
    id: "travel-assistant",
    title: "Virtual Travel Assistant",
    period: "Jan 2026 - Feb 2026",
    description: "Developed an AI-driven travel assistant that helps users with trip planning, destination recommendations, budgeting, and itinerary management.",
    tech: ["Python", "Generative AI", "Route Optimization", "GeoAPIs", "Budgeting Tool"],
    category: "agents",
    highlights: [
      "Implemented a distance-minimizing traveling salesman algorithm for perfect daily routing",
      "Structured strict budget constraints trackers to suggest custom hotels and local spots",
      "Synthesized natural language itineraries describing weather, transport, and local guidelines"
    ],
    icon: "Compass"
  },
  {
    id: "game-companion",
    title: "AI Game Companion Agent",
    period: "Mar 2026 - May 2026",
    description: "Built an AI-powered gaming assistant that provides in-game guidance, strategy recommendations, and interactive player support using intelligent automation.",
    tech: ["Python", "Agentic Workflows", "Computer Vision", "Reinforcement Learning"],
    category: "agents",
    highlights: [
      "Built game-state tracking pipelines to give contextually matched voice commands",
      "Formulated tactical recommendations and real-time enemy build counters",
      "Curated multi-agent interactive loops for active, conversational player support"
    ],
    icon: "Gamepad2"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning (Scikit-Learn)", level: 92 },
      { name: "Deep Learning & Neural Nets", level: 80 },
      { name: "Natural Language Processing (NLP)", level: 88 },
      { name: "Data Preprocessing & Augmentation", level: 90 },
      { name: "Model Training & Evaluation", level: 89 }
    ]
  },
  {
    category: "Tools & Automation",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Workflow Automation (n8n)", level: 85 },
      { name: "Antigravity & AI Models", level: 82 },
      { name: "Web Application Deployment", level: 84 }
    ]
  },
  {
    category: "Soft Skills & Teamwork",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Analytical Thinking", level: 92 },
      { name: "Team Collaboration", level: 88 },
      { name: "Project Management", level: 85 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Trust and Security with Google Cloud",
    issuer: "Google Cloud via Simplilearn",
    date: "Dec 2025",
    logoColor: "from-blue-500 to-cyan-400"
  },
  {
    title: "AWS Foundations: Machine Learning Basics",
    issuer: "AWS via Simplilearn",
    date: "Dec 2025",
    logoColor: "from-orange-500 to-yellow-400"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "Dec 2025",
    logoColor: "from-purple-500 to-indigo-400"
  },
  {
    title: "Introduction to AWS Inferentia and Amazon EC2 Inf1 Instances",
    issuer: "AWS via Simplilearn",
    date: "Dec 2025",
    logoColor: "from-amber-500 to-red-500"
  }
];

export const EDUCATION = {
  collegePath: "B-Tech in Artificial Intelligence & Machine Learning",
  college: "Seshadri Rao Gudlavalleru Engineering College",
  location: "Jangareddigudem, Andhra Pradesh, India",
  duration: "Jul 2024 - Present",
  gpa: "8.8 / 10.0",
  highlights: [
    "Specialized coursework in ML theory, Neural Networks, Advanced Math for Data Science, and Python automation workflows.",
    "Active participant in technical symposiums, research clubs, and collaborative AI research groups.",
    "Strong focus on developing client-ready solutions utilizing Generative Models, agent framework architectures, and standard libraries."
  ]
};
