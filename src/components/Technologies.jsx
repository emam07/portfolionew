import React from "react"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { DiPython } from "react-icons/di"
import { SiSolidity } from "react-icons/si"
import { animate, motion } from "framer-motion";
const iconvariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [15, -15],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }

    }
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
             className="my-20 text-center text-4xl"> Technol
                <span className=" text-neutral-500">ogies</span>
            </motion.h1>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconvariant(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconvariant(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <TbBrandNextjs className="text-7xl text-neutral-50" />
                </motion.div>
                <motion.div variants={iconvariant(3)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconvariant(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <DiRedis className="text-7xl text-red-500" />
                </motion.div>
                <motion.div variants={iconvariant(4)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaNodeJs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div variants={iconvariant(4.5)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <DiPython className="text-7xl  text-blue-500" />
                </motion.div>
                <motion.div variants={iconvariant(5)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiSolidity className="text-7xl text-neutral-500" />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies
