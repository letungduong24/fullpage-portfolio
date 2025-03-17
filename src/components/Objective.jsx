import React, { useEffect, useState } from 'react'
import { CgWebsite } from "react-icons/cg";
import { motion } from 'framer-motion';

const Objective = ({lang}) => {
  const [resource, setResource] = useState({})
  const resources = {
    vi: {
        title: 'Mục tiêu nghề nghiệp',
        des1: 'Là một',
        highlight: 'Thực tập sinh Lập trình Web',
        des2: 'đầy nhiệt huyết, tôi mong muốn tìm kiếm cơ hội để áp dụng và nâng cao kỹ năng trong phát triển front-end và back-end. Với đam mê xây dựng các trang web thân thiện với người dùng, responsive và luôn sẵn sàng học hỏi các công nghệ web hiện đại trong môi trường chuyên nghiệp, tôi mong muốn được đóng góp cho một đội nhóm năng động và tích lũy kinh nghiệm thực tế qua các dự án thực tiễn.'
    },
    en: {
        title: "Career Objective",
        des1: `I'm an aspiring`,
        highlight: 'Web Developer Intern',
        des2: 'seeking an opportunity to apply and enhance my skills in front-end and back-end development. Passionate about building user-friendly, responsive websites and eager to learn modern web technologies in a professional environment. Looking forward to contributing to a dynamic team while gaining practical experience in real-world projects'
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
              {resource.des1} <span className='font-bold'>{resource.highlight}</span> {resource.des2}
          </motion.p>
        </div>

    </div>
  )
}

export default Objective