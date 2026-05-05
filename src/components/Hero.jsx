import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profilepic.png";
import { motion } from "framer-motion";

const ROLES = [
  "Backend Engineer",
  "Distributed Systems",
  "Web3 Builder",
  "Infra Lead",
];

const useTypewriter = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? 40 : 90;
    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, index]);

  return text;
};

const useBinaryFlicker = () => {
  const [bits, setBits] = useState([0, 1, 0, 1]);
  useEffect(() => {
    const i = setInterval(() => {
      setBits((prev) => prev.map(() => Math.round(Math.random())));
    }, 350);
    return () => clearInterval(i);
  }, []);
  return bits;
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  const text = useTypewriter();
  const bits = useBinaryFlicker();

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="border-b border-neutral-900 pb-4 lg:pb-0 lg:mb-35 lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="ml-9 pb-15 text-5xl font-thin tracking-tight lg:mt-12 lg:text-8xl"
          >
            Emamul Khan
          </motion.h1>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="ml-9 mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-2xl tracking-tight lg:text-3xl"
          >
            <span className="text-cyan-400">{`{ ${bits.join(", ")} }`}</span>
            <span className="text-neutral-600">›</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {text}
              <span className="ml-0.5 animate-pulse text-cyan-300">|</span>
            </span>
          </motion.div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="ml-9 mt-6 text-justify font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-32 bg-transparent">
          <div className="flex justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="image"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
