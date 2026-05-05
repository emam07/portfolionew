import ciforgeImg from "../assets/projects/project-7.png";
import rentofluencerImg from "../assets/projects/project-2.png";
import valochatImg from "../assets/projects/notes-vault.png";
import nftMinterImg from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Backend engineer with 2+ years building real-time trading infrastructure and distributed systems. Currently infra lead at NolimitNode shipping Kafka streaming pipelines, gRPC market-data services, and Kubernetes-based microservices in Rust and Python. I own systems end-to-end — from data ingestion to API to deployment.`;

export const ABOUT_TEXT = `I am a backend engineer focused on distributed systems, real-time data pipelines, and production infrastructure. At NolimitNode I work on trading infrastructure as infra lead — streaming pipelines in Rust, Python, and PyFlink on Kafka, gRPC services backed by Redis and ClickHouse, and a full Kubernetes-based microservices platform with Prometheus, Grafana, and ArgoCD.

Beyond my day job, I build things — CIForge (a CI attribution engine), Rentofluencer (a P2P gear rental marketplace I am founding), and other projects that scratch real itches. I care about systems that are observable, reliable, and fast. Outside of engineering, I play football, explore new infrastructure tooling, and travel whenever I can.`;

export const EXPERIENCES = [
  {
    year: "Dec 2025 – Present",
    role: "Backend Engineer · Infra Lead",
    company: "NolimitNode / Clr3 — Bangalore",
    description: `Infra lead delivering real-time market data and trading infrastructure. Built streaming pipelines in Rust, Python, and PyFlink on Kafka processing millions of events daily. Designed gRPC market-data services backed by Redis and ClickHouse for sub-second queries on high-cardinality time-series data. Shipped ez_wallet — backend services for orders, wallet operations, and settlement. Operate microservices on Kubernetes with Helm, ArgoCD, and full observability via Prometheus, Grafana, Loki, and Tempo. Powered a live trading strategy in production contributing to consistent positive PnL.`,
    technologies: ["Rust", "Python", "Kafka", "gRPC", "Kubernetes", "ClickHouse", "Redis", "PostgreSQL"],
  },
  {
    year: "Aug 2024 – Nov 2025",
    role: "Frontend Developer",
    company: "Cerebry Spark — Noida (Remote)",
    description: `Built reusable React.js components and responsive interfaces for an EdTech platform serving users across multiple markets. Deepened backend and systems skills in parallel before transitioning to a backend-focused role.`,
    technologies: ["React.js", "JavaScript", "LaTeX", "Django"],
  },
  {
    year: "Aug 2023 – Sep 2023",
    role: "Web Development Intern",
    company: "Stirring Minds — New Delhi",
    description: `Built interactive web modules and frontend features using HTML, CSS, and JavaScript.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "CIForge",
    image: ciforgeImg,
    description:
      "CI failure attribution platform — ingests GitHub Actions events via a GitHub App and attributes test failures and flakiness back to the responsible change. Baseline + ranked attribution worker over a Postgres event store; webhook ingestion and worker pipeline shipped end-to-end.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "GitHub App"],
    link: "https://github.com/emam07/CI-Forge",
  },
  {
    title: "Rentofluencer",
    image: rentofluencerImg,
    description:
      "Founder and lead engineer of a P2P gear rental marketplace for Mumbai content creators — cameras, lenses, lighting, and accessories. Razorpay escrow payments, verified listings, talent marketplace, and CI/CD via GitHub Actions.",
    technologies: ["Next.js", "Supabase", "Prisma", "Razorpay", "Vercel", "GitHub Actions"],
    link: "https://rento-fluencer.vercel.app/",
  },
  {
    title: "Valo-chat",
    image: valochatImg,
    description:
      "Real-time gaming chat with presence, rooms, and OAuth. Wires Stream Chat SDK, Supabase auth, and Google OAuth into a live messaging experience with channel management and user presence.",
    technologies: ["React", "Stream Chat", "Supabase", "Google OAuth"],
    link: "https://valo-chat.vercel.app/",
  },
  {
    title: "NFT Minter DApp",
    image: nftMinterImg,
    description:
      "ERC-721 minting application with smart contract deployment, MetaMask wallet integration, and React frontend deployed on Sepolia testnet via Hardhat.",
    technologies: ["React", "Solidity", "Hardhat", "Ethers.js", "MetaMask"],
    link: "https://github.com/emam07/NFT-minter",
  },
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91 87388 78326",
  email: "emamulkhanmgs@gmail.com",
  linkedin: "https://www.linkedin.com/in/emamul-khan-872278235/",
};
