import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import { FaGithub } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaUniversitySolid } from "react-icons/lia";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { AnimatePresence, motion } from 'framer-motion';
import { IoShareSocial } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import Loading from './Loading';

const Information = () => {
  const [isToggle, setIsToggle] = useState(false)
  const [data, setData] = useState([])
  const [tab, setTab] = useState('')
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [text] = useTypewriter({
    words: ['LETUNGDUONG'],
    typeSpeed: 100,
    deleteSpeed: 200,
    loop: 0
  })
  const info = {
    personal: 
        [
            'Le Tung Duong',
            '16/06/2004',
            'Studying Software Engineering at Thuyloi University',
        ],
    contact:
        [
            '0865641682',
            'letungduong1624@gmail.com',
        ]
  }

  const handleToggle = (data) => {
    setIsToggle(true)
    setData(info[data])
    setTab(data)
  }
  const handleClose = () => {
    setIsToggle(false)
    setData([])
    setTab('')
  }

useEffect(() => {
  const img = new Image();
  img.src = avatar;
  img.onload = () => setIsImageLoaded(true);
}, []); 

  if(!isImageLoaded){
    return <Loading />
  }
  
  return (
    <div>
        <div className="">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-semibold">
                Hello, I'm Le Tung Duong
            </h2>
            <p className="text-gray-600 md:text-2xl">Web Developer Intern</p>
        </div>
        <motion.h2 initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 0.1, scale: 1, transition: {duration: 0.7}}} 
            className='hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl  overflow-hidden'>
            {text}
            <Cursor cursorColor='red'
        />
        </motion.h2>
        <div className="w-[70%] sm:w-[55%] md:w-1/2 lg:w-1/3 xl:w-1/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.h2 initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 0.2, scale: 1, transition: {duration: 0.7}}} 
                className='tracking-widest text-2xl lg:hidden flex justify-center mb-2'>
                {text}
                <Cursor cursorColor='red'
            />
            </motion.h2>
            <motion.img 
                initial={{opacity: 0, scale: 0.8}} 
                whileInView={{opacity: 1, scale: 1, transition: {duration: 0.7}}} 
                className='rounded-3xl' src={avatar} alt="" 
                onLoad={() => setIsImageLoaded(true)}
            />
            <div className="hidden lg:block">
                <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1, transition: {duration: 0.7}}} className="absolute -bottom-20 -left-20 xl:-bottom-10 xl:-left-40 bg-white p-4 rounded-2xl shadow-2xl text-gray-600">
                    <p className='font-bold text-lg flex items-center gap-2'>
                        <CgProfile className=''/>
                        Le Tung Duong
                    </p>
                    <p className='font-semibold flex items-center gap-2'>
                        <LiaBirthdayCakeSolid />
                        16/06/2004
                    </p>
                    <p className='font-semibold flex items-center gap-2'>
                        <LiaUniversitySolid />
                        Software Engineering, Thuyloi University.
                    </p>
                </motion.div>
                <motion.div initial={{opacity: 0, x:100}} whileInView={{opacity: 1, x:0, transition: {duration: 0.7}}} className="absolute -right-60 top-10 xl:-right-100 bg-white p-4 rounded-2xl shadow-2xl text-gray-600">
                    <p className='font-bold text-lg flex items-center gap-2'>
                        <PiPhoneCallBold />
                        0865641682
                    </p>
                    <p className='font-semibold flex items-center gap-2'>
                        <IoIosMail />
                        letungduong1624@gmail.com
                    </p>
                    <a target='_blank' href='https://www.facebook.com/letungduongg/' className='hover:text-gray-400 hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2'>
                        <FaFacebook />
                        fb.com/letungduongg
                    </a>
                </motion.div>
                <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x:0, transition: {duration: 0.7}}} className="absolute top-5 xl:top-10 -left-60 xl:-left-100 bg-white p-4 rounded-2xl shadow-2xl text-gray-600">
                    <a target='_blank' href='https://github.com/letungduong24' className='hover:text-gray-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-bold text-lg'>
                        <FaGithub />
                        github.com/letungduong24
                    </a>
                </motion.div>
            </div>
            <div className="lg:hidden mt-3">
                <div className="flex gap-3 justify-center">
                    {tab && tab === 'personal' 
                    ? (
                        <button onClick={handleClose} className='font-bold text-3xl text-gray-600'>
                            <IoIosCloseCircle  className=''/>
                        </button>
                    ) 
                    : (
                        <button onClick={() => handleToggle('personal')} className='font-bold text-3xl text-gray-600'>
                            <IoIosInformationCircle className=''/>
                        </button>
                    )}
                    {tab && tab === 'contact' 
                    ? (
                        <button onClick={handleClose} className='font-bold text-3xl text-gray-600'>
                            <IoIosCloseCircle  className=''/>
                        </button>
                    ) 
                    : (
                        <button onClick={() => handleToggle('contact')} className='font-bold text-3xl text-gray-600'>
                            <MdContacts className=''/>
                        </button>
                    )}
                    
                    <a target='_blank' href='https://www.facebook.com/letungduongg/' className='font-bold text-3xl text-gray-600'>
                        <FaFacebook  className=''/>
                    </a>
                    <a target='_blank' href='https://github.com/letungduong24' className='font-bold text-3xl text-gray-600'>
                        <FaGithub  className=''/>
                    </a>
                </div>
                <AnimatePresence>
                    {isToggle && (
                        <motion.div 
                            key={tab}
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }} 
                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
                            className="absolute z-100 p-4 shadow-lg rounded-2xl text-gray-600 font-semibold"
                        >
                            {data && data.map((info, index) => <p key={index}>{info}</p>)}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    </div>
  )
}

export default Information