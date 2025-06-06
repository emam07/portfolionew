import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }} className='my-20 text-center text-4xl'>Proj
                <span className='text-neutral-400'>ects</span>
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'>
                            <img src={project.image} width={250} height={200} alt={project.title} className='rounded-lg mb-6 ' ></img>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x:100 }}
                            transition={{ duration:1}}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='ml-2 border-b text-sm font-medium px-2 py-2 text-purple-600'>{tech}</span>
                            ))}
                    </motion.div>
                    </div>
                ))}
        </div>

        </div >
    )
}

export default Projects
