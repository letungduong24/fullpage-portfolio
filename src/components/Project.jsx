import React from 'react'
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import theshop from '../assets/theshop.png'
import gpa from '../assets/gpa.png'

const Project = () => {
  const projects = [
    {
        name: 'The Shop - Fullstack E-commerce Project',
        image: theshop,
        url: 'https://fullstack-ecommerce-front.vercel.app/',
        description: 'The Shop – A full-stack e-commerce clothing store built with React.js, Tailwind CSS, Redux, MongoDB, and Express. Designed with a user-friendly and responsive interface to ensure a seamless shopping experience across all devices. Features include product browsing, cart management, authentication, and secure checkout.' 
    },
    {
        name: 'TLU GPA Calculator',
        image: gpa,
        url: 'https://gpa.studywme.site/',
        description: 'A GPA calculation application for Thuy Loi University students, utilizing the API from sinhvien.tlu.edu.vn. Built with React.js for a dynamic and responsive user experience, the app fetches student data and calculates GPA, helping users track their academic performance efficiently.' 
    },
    
  ]
  
  return (
    <div className='flex flex-col flex-grow'>
        <h2 className=" text-5xl text-gray-600 font-semibold w-[80%]">
            My Projects
        </h2>
        <div className="flex-grow flex items-center m-5 text-gray-600">
            <div className="grid lg:grid-cols-2 gap-10">
                {projects.map((project) => (
                <div className="rounded-2xl border p-4 brightness-100 filter transition-all duration-300 hover:brightness-125">
                    <a target='_blank' href={project.url} >
                        <img className='rounded-lg filter transition-all duration-300' src={project.image} alt="" />
                    </a>
                    <div className="mt-3">
                        <a target='_blank' href={project.url} className='hover:text-gray-400 transition-all duration-300 font-bold text-2xl'>{project.name}</a>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Project