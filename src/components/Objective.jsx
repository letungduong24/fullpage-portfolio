import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { motion } from 'framer-motion';

const Objective = () => {
  return (
    <div className='flex-grow flex flex-col'>
        <h2 className=" text-5xl text-gray-600 font-semibold">
            Career Objective
        </h2>
        <div className="w-full flex justify-end items-center flex-grow">
          <motion.p 
            initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0, transition: {duration: 0.9}}} 
            className=' md:w-1/2  text-end text-gray-600 text-xl sm:text-2xl'>
          I'm an aspiring <span className='font-bold'>Web Developer Intern</span> seeking an opportunity to apply and enhance my skills in front-end and back-end development. Passionate about building user-friendly, responsive websites and eager to learn modern web technologies in a professional environment. Looking forward to contributing to a dynamic team while gaining practical experience in real-world projects.
          </motion.p>
        </div>

    </div>
  )
}

export default Objective