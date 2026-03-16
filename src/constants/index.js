import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import notesVault from "../assets/projects/notes-vault.png";

export const HERO_CONTENT = `Backend & infrastructure engineer building scalable real-time systems. Experienced with Kubernetes, streaming data pipelines, and blockchain infrastructure, focused on reliable and production-ready architectures.`;

export const ABOUT_TEXT = `I'm a backend and infrastructure engineer focused on building scalable distributed systems. Over the past year, I've worked with modern web technologies like React, Next.js, and Node.js, while expanding into infrastructure, streaming data systems, and cloud-native deployments. I enjoy designing reliable backend architectures, optimizing performance, and building production-ready systems. Outside of work, I enjoy playing football, exploring new technologies, contributing to open-source projects, and traveling.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Engineer / Infrastructure Engineer",
    company: "CLR3 (Startup)",
    description: `Working on backend infrastructure and real-time data systems for blockchain-based applications. Focused on designing and optimizing scalable services, streaming pipelines, and reliable production deployments while collaborating with the team on system performance and architecture decisions.`,
    technologies: ["Kubernetes", "Docker", "Rancher", "Kafka", "Redpanda", "Redis", "ClickHouse", "Grafana", "Loki", "Tempo", "CI/CD"],
  },
  {
    year: "2024 - Present",
    role: "Coder",
    company: "Cerebry Spark",
    description: `Coding the doc of mathematical question using latex and maintaining the json files.`,
    technologies: ["Javascript", "React.js", "Latex"],
  },
  {
    year: "Oct-2022 - Dec-2022(internship)",
    role: "Frontend Developer",
    company: "Stirring minds",
    description: `Designed and developed user interfaces for web applications using Html and React. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL","Javascript"],
  },
  
];

export const PROJECTS = [
  {
    title: "Notes Vault",
    image: notesVault,
    description:
      "A minimalistic yet powerful browser-based note-taking app with full CRUD, instant sync to localStorage, and dark/light mode toggle. Built with performance, scalability, and modern UI/UX principles.",
    technologies: ["Next.js 14", "Tailwind CSS", "ShadCN/UI", "Framer Motion", "localStorage"],
    link:"https://notes-vault-s42m.vercel.app/",
  },
  {
    title: "Shelter INN",
    image: project2,
    description:
      "An application for stray animals to have a shelter for medication, treatment and adoption.",
    technologies: ["HTML", "CSS", "Angular", "Javascript","React"],
    link:"https://shelterinn.netlify.app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"https://portfolionew-wine.vercel.app/",
  },
  {
    title: "Real Time Facial Animation",
    image: project4,
    description:
      "A Deep learning project for real-time implementing expressions on a still image using Python libraries (Pytorch, GAN, Computer Vision).",
    technologies: ["Python", "Pandas", "GAN", "PyTorch", "Computer Vision"],
    link:"#",
  },
  {
    title: "Voting Dapp",
    image: project5,
    description:
      "A Smart contract application made in Solidity to replicate the casting of votes in elections.",
    technologies: ["React", "Express", "Solidity", "HardHat"],
    link:"#",
  },
];

export const CONTACT = {
  address: "Johri Farm Noor Nagar New Delhi",
  phoneNo: "8738878326",
  email: "emamulkhanmgs@gmail.com",
  linkedin:"https://www.linkedin.com/in/emamul-khan-872278235/"
};
