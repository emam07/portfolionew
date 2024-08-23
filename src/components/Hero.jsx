import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile1.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay }, }
});

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row">
                <div className="border-b border-neutral-900 pb-4 lg:pb-0 lg:mb-35 lg:w-1/2 flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="ml-9 pb-15 text-5xl font-thin tracking-tight lg:mt-12 lg:text-8xl">Emamul Khan</motion.h1>
                    <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="ml-9 mt-12 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="ml-9 mt-6 text-justify font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 bg-transparent">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img variants
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}} 
                            src={profilePic} alt="image" className="rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero
