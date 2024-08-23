import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
      </div>
      <div className='m-9 flex items-center justify-center gap-9 text-2xl'>
        <a href="https://www.linkedin.com/in/emamul-khan-872278235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/emam07/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/brim/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
          <FaCode />
        </a>
      </div>

    </nav>
  )
}

export default Navbar
