import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";


const Skill = ({lang}) => {
  const [resource, setResource] = useState({skills: []})
  const resources = {
    vi: {
      title: 'Kỹ năng',
      skills: ['ReactJS', 'HTML & CSS', 'TailwindCSS', 'ExpressJS', 'ASP.NET Web API', 'SQL Server', 'MongoDB (Mongoose ODM)', 'Git & GitHub cơ bản (commit, branch, pull request)', 'Triển khai ứng dụng cơ bản với Vercel', 'Triển khai ứng dụng cơ bản với Docker Compose']
    },
    en: {
      title: 'My Technical Skills',
      skills: [
        'ReactJS', 'HTML & CSS', 'TailwindCSS', 'ExpressJS', 'Laravel', 'RESTful API', 'SQL Server', 'MongoDB (Mongoose ODM)', 'Basic Git & GitHub (commit, branch, pull request)', 'Basic deployment on Vercel', 'Basic deployment with Docker Compose'
      ]
    }
  }
  useEffect(() => {
        setResource(resources[lang])
      }, [lang])
  return (
    <div className='flex flex-col flex-grow'>
        <h2 className=" text-5xl text-gray-600 font-semibold w-[80%]">
            {resource.title}
        </h2>
        <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1, transition: {duration: 0.6}}}  className="lg:mx-30 mt-5 flex-grow flex flex-col">
            <div className="flex flex-wrap items-center flex-grow gap-3 text-gray-600 my-5">
                <div className="flex gap-5 flex-wrap border p-4 rounded-2xl shadow-">
                {resource.skills.map((skill) => <button className='hover:text-gray-400 hover:scale-105 duration-300 transition-all  border w-fit h-fit px-4 py-2 rounded-xl'>{skill}</button>)}
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Skill