import React, { useEffect, useState } from 'react'
import { CgWebsite } from "react-icons/cg";
import { motion } from 'framer-motion';

const Objective = ({lang}) => {
  const [resource, setResource] = useState({})
  const resources = {
    vi: {
        title: 'Mục tiêu nghề nghiệp',
        des1: 'Là một',
        highlight: 'sinh viên Kỹ thuật phần mềm',
        des2: ', tôi đặc biệt đam mê lập trình web và mong muốn phát triển sự nghiệp trong lĩnh vực này, tôi luôn nỗ lực học hỏi để xây dựng những sản phẩm sáng tạo, mang lại trải nghiệm tốt nhất cho người dùng.'
    },
    en: {
        title: "Career Objective",
        des1: `As a`,
        highlight: 'Software Engineering student',
        des2: ', I am passionate about web development and eager to pursue a career in this field. I constantly strive to learn and improve to build creative products that deliver the best user experience.'
    }
  }
  useEffect(() => {
      setResource(resources[lang])
    }, [lang])
    
  return (
    <div className='flex-grow flex flex-col'>
        <h2 className=" text-5xl text-gray-600 font-semibold">
            {resource.title}
        </h2>
        <div className="w-full flex justify-end items-center flex-grow">
          <motion.p 
            initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0, transition: {duration: 0.9}}} 
            className=' md:w-1/2  text-end text-gray-600 text-xl sm:text-2xl'>
              {resource.des1} <span className='font-bold'>{resource.highlight}</span>{resource.des2}
          </motion.p>
        </div>

    </div>
  )
}

export default Objective