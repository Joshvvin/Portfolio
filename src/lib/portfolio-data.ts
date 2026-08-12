export const profile = {
  name: "Joshvvin Joshy",
  role: "Full Stack Developer",
  location: "Bangalore, India",
  email: "joshvvinjoshy@gmail.com",
  phone: "+91 94952 43883",
  linkedin: "https://linkedin.com/in/joshvvin-joshy",
  summary:
    "Full-stack developer specializing in React, Python and TypeScript. I build type-safe database architectures with Drizzle ORM and PostgreSQL, and engineer high-performance web applications — backed by 300+ solved LeetCode problems.",
};

export const stats = [
  { value: "2.5+", label: "Years shipping production" },
  { value: "10", label: "Developers led" },
  { value: "300+", label: "LeetCode problems" },
  { value: "20%", label: "Engagement lift via API tuning" },
];

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Python (FastAPI)",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LangChain",
      "Ollama",
      "PyTorch",
      "LLMs",
      "Machine Learning",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "AWS (ECS, RDS)", "Jenkins", "Postman", "Jira"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "MUI", "HTML", "CSS"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "System Design", "RESTful APIs"],
  },
];

export const experience = [
  {
    company: "Varthana Finance Private Limited",
    role: "Full Stack Developer",
    period: "11/2024 — 02/2026",
    location: "Bangalore, India",
    points: [
      "Led a team of 10 developers to build v2 of a high-stakes Loan Origination System, facilitating daily scrums, task distribution and code reviews across the full SDLC.",
      "Engineered high-concurrency backend services in Python (FastAPI) using asynchronous design patterns to handle I/O-intensive workloads efficiently.",
      "Optimized database performance with Redis caching alongside PostgreSQL, driving down query latency and improving reliability across financial workflows.",
      "Designed dynamic, configurable workflows for multiple loan types, increasing processing throughput and system flexibility.",
    ],
    stack: [
      "React.js",
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Drizzle ORM",
      "Docker",
      "Material UI",
    ],
  },
  {
    company: "Mountblue Technologies Private Limited",
    role: "Software Developer",
    period: "07/2023 — 11/2024",
    location: "Bangalore, India",
    points: [
      "Engineered high-performance PostgreSQL queries and optimized REST APIs, lifting user engagement 20% through improved responsiveness.",
      "Integrated CI/CD pipelines with Docker and automated workflows for rapid, zero-downtime deployments in production AWS environments.",
      "Built data processing and transformation pipelines with Python (Pandas, NumPy), streamlining background report generation and ingestion.",
      "Partnered with cross-functional teams to identify and squash critical bugs, improving application stability.",
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React.js",
      "Docker",
      "Material UI",
    ],
  },
];

export const projects = [
  {
    name: "AI Technical Interviewer",
    blurb:
      "An offline-capable interview simulator that grades candidate answers against domain knowledge bases and speaks its feedback back in real time.",
    points: [
      "Offline RAG pipeline with LangChain + ChromaDB comparing responses using embedding similarity metrics.",
      "Ollama for local LLM inference — objective feedback and personalized code reviews with zero third-party API dependencies.",
      "Async REST APIs in FastAPI with AWS Polly TTS streaming low-latency audio for a realistic interview feel.",
    ],
    stack: [
      "Python (FastAPI)",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "AWS Polly",
      "scikit-learn",
      "TypeScript",
      "React",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science & Engineering",
  school: "APJ Abdul Kalam Technological University",
  period: "07/2018 — 07/2022",
  location: "Thiruvananthapuram, India",
};

export const certificates = ["JLPT N4"];
export const languages = ["English", "Japanese", "Malayalam", "Hindi"];
