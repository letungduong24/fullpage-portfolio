import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import theshop from '../assets/theshop.png'
import gpa from '../assets/gpa.png'
import { FaGithub } from "react-icons/fa";

const Project = ({lang}) => {
  const [resource, setResource] = useState({projects: []})
  const resources = {
    vi: {
        title: 'Dự án cá nhân',
        source: 'Mã nguồn',
        projects: [
            {
                name: 'The Shop - Dự án E-commerce Fullstack',
                image: theshop,
                url: 'https://fullstack-ecommerce-front.vercel.app/',
                description: 'The Shop – Một cửa hàng thương mại điện tử full-stack về thời trang, được xây dựng bằng React.js, Tailwind CSS, Redux, MongoDB và Express. Thiết kế giao diện thân thiện với người dùng, responsive, đảm bảo trải nghiệm mua sắm mượt mà trên mọi thiết bị. Các tính năng bao gồm duyệt sản phẩm, quản lý giỏ hàng, xác thực người dùng và thanh toán an toàn.',
                git: 'https://github.com/letungduong24/fullstack_ecommerce'
            },
            {
                name: 'Ứng dụng tính GPA cho sinh viên Trường ĐH Thủy Lợi',
                image: gpa,
                url: 'https://gpa.studywme.site/',
                description: 'Ứng dụng tính GPA dành cho sinh viên Đại học Thủy Lợi, sử dụng API từ sinhvien.tlu.edu.vn. Được xây dựng bằng React.js để mang lại trải nghiệm người dùng linh hoạt và responsive, ứng dụng lấy dữ liệu sinh viên và tính toán GPA, giúp người dùng theo dõi kết quả học tập một cách hiệu quả.',
                git: 'https://github.com/letungduong24/TLUGPACalculator'
            }
        ]
         
    },
    en: {
        title: 'Projects',
        source: 'Source code',
        projects: [
            {
                name: 'The Shop - Fullstack E-commerce Project',
                image: theshop,
                url: 'https://fullstack-ecommerce-front.vercel.app/',
                description: 'The Shop – A full-stack e-commerce clothing store built with React.js, Tailwind CSS, Redux, MongoDB, and Express. Designed with a user-friendly and responsive interface to ensure a seamless shopping experience across all devices. Features include product browsing, cart management, authentication, and secure checkout.',
                git: 'https://github.com/letungduong24/fullstack_ecommerce'

            },
            {
                name: 'TLU GPA Calculator',
                image: gpa,
                url: 'https://gpa.studywme.site/',
                description: 'A GPA calculation application for Thuy Loi University students, utilizing the API from sinhvien.tlu.edu.vn. Built with React.js for a dynamic and responsive user experience, the app fetches student data and calculates GPA, helping users track their academic performance efficiently.',
                git: 'https://github.com/letungduong24/TLUGPACalculator'
            }
        ]
    },
    
    }
  
  useEffect(() => {
    setResource(resources[lang])
  }, [lang])
  return (
    <div className='flex flex-col flex-grow'>
        <h2 className=" text-5xl text-gray-600 font-semibold w-[80%]">
            {resource.title}
        </h2>
        <div className="flex-grow flex items-center m-5 text-gray-600">
            <div className="grid lg:grid-cols-2 gap-10">
                {resource.projects.map((project) => (
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}} className="rounded-2xl border p-4 brightness-100 filter transition-all duration-300 hover:brightness-125">
                    <a target='_blank' href={project.url} >
                        <img className='rounded-lg filter transition-all duration-300' src={project.image} alt="" />
                    </a>
                    <div className="mt-3">
                        <a target='_blank' href={project.url} className='block hover:text-gray-400 transition-all duration-300 font-bold text-2xl'>{project.name}</a>
                        <a target='_blank' href={project.git} className='flex items-center gap-2 hover:text-gray-400 transition-all duration-300 font-bold'>{resource.source}: <FaGithub /></a>
                        <p>{project.description}</p>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Project