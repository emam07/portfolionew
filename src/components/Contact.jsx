import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      className='border-b border-neutral-900 pb-20'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Get In
        <span className='text-neutral-500'> Touch</span>
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }} className='my-4 text-center'>{CONTACT.address}</motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }} className='my-4 text-center'>{CONTACT.phoneNo}</motion.p>
        <div className='my-4'><a href='emamulkhanmgs@gmail.com' className='my-4 border-b'>{CONTACT.email}</a></div>
        <a href='https://www.linkedin.com/in/emamul-khan-872278235/' className='my-4 border-b'>{CONTACT.linkedin}</a>
      </div>

    </motion.div>
  )
}

export default Contact
