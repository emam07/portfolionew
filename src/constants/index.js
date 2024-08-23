import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, 
as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of experience,
 I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. 
 My journey in web development began with a deep curiosity for how websites are made, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
 I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
 Outside of coding, I enjoy playing Football, exploring new technologies, contributing to open-source projects and travelling as much as I can and see the world through my eyes.`;

export const EXPERIENCES = [
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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce(Clothing Brand) website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"#",
  },
  {
    title: "Shelter INN",
    image: project2,
    description:
      "An application for stray animals to have a shelter for medication, treatment and adoption.",
    technologies: ["HTML", "CSS", "Angular", "Javascript","React"],
    link:"#",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"#",
  },
  {
    title: "Real Time Facial Animation",
    image: project4,
    description:
      "A Deep learnig project for real time implementing the expression on a still image using the python library(Pytorch,GAN,Computer Vision)",
    technologies: ["python","Pandas","GAN"],
    link:"#",
  },
  {
    title: "Voting Dapp ",
    image: project5,
    description:
      "A Smart contract application made in solidity to replicate the casting of vote in the country.",
    technologies: ["React","Express","Solidity","HardHat"],
    link:"#",
  },
];

export const CONTACT = {
  address: "Johri Farm Noor Nagar New Delhi",
  phoneNo: "8738878326",
  email: "emamulkhanmgs@gmail.com",
  linkedin:"https://www.linkedin.com/in/emamul-khan-872278235/"
};
