import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-sm absolute left-0 right-0'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Yousuf Mohiuddin</a>
        <a className='text-sm md:text-md hover:text-indigo-500' href="mailto:yousufmohiuddin0529@gmail.com">yousufmohiuddin0529@gmail.com</a>

        <div className='flex flex-row justify-center py-1'>
      <p className='flex flex-col text-3xl items-center'>
        <a href='https://github.com/YousufMo27'><FaGithub/></a>
      </p>
      <p className='flex flex-col text-3xl items-center ml-4'>
        <a href='https://www.linkedin.com/in/yousuf-mohiuddin/'><FaLinkedin/></a>
      </p>
    </div>

        <p className='text-xs mt-2 text-gray-500'>
            &copy; Yousuf Mohiuddin {new Date().getFullYear()}.
        </p>
    </div>
  )
}

export default Footer;