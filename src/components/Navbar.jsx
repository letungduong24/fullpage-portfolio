import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";

const Navbar = ({lang, setLang}) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleLang, setIsToggleLang] = useState(false);
  const [pendingNav, setPendingNav] = useState(null);
  const [resource, setResource] = useState([])

  const handleChangeLang = () => {
    if(lang === 'vi'){
      setLang('en')
    }
    if(lang === 'en'){
      setLang('vi')
    }
    setIsToggle(false);

  }

  // Xử lý chuyển trang với fullpage.js
  const handleNavigation = (sectionIndex) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(sectionIndex);
    }
  };

  useEffect(() => {
    if (!isToggle && pendingNav !== null) {
      handleNavigation(pendingNav);
      setPendingNav(null);
    }
  }, [isToggle, pendingNav]);

  const handleNavigate = (number) => {
    setPendingNav(number);
    setIsToggle(false);
  };

  const resources = {
    vi: ['thông tin', 'mục tiêu', 'kĩ năng', 'dự án cá nhân'],
    en: ['information', 'objective', 'skills', 'projects'],}

  useEffect(() => {
    setResource(resources[lang])
  }, [lang])

  return (
    <>
      {/* Navbar Desktop */}
      <div className='hidden lg:flex items-center gap-3 justify-center px-4 fixed right-0 top-0 p-5 z-30 text-gray-600 bg-gray-50 mr-5 rounded-2xl'>
        <button className='text-gray-600 text-xl font-bold'>
          duong.
        </button>
        {resource.map((item, index) => (
          <button key={index} className={`font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300`} onClick={() => handleNavigate(index+1)}>
          {item}
          </button>
        ))}
        <button className={`flex items-center gap-2 border rounded-3xl px-2 py-1 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300`} onClick={handleChangeLang}>
          <FaExchangeAlt />
          {lang && lang === 'vi' ? 'English' : 'Tiếng Việt'}
        </button>
      </div>

      {/* Navbar Mobile */}
      <div className="flex flex-col items-end z-50 lg:hidden gap-3 px-4 fixed right-0 top-0 p-5  ">
        <button onClick={() => setIsToggle(!isToggle)} className='bg-gray-50 cursor-pointer flex items-center text-gray-600 border border-gray-600 rounded-lg'>
          <BiMenuAltRight className='text-4xl font-bold' />
        </button>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isToggle && (
            <motion.div
             className={`flex flex-col gap-2 items-end p-4 bg-white shadow-lg rounded-lg `}
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }} 
             exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
            >
              {resource.map((item, index) => (
                <button key={index} className='text-gray-600 font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300' onClick={() => handleNavigate(index+1)}>
                  {item}
                </button>
              ))}
              
              <button className={`flex items-center gap-2 border rounded-3xl px-2 py-1 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300`} onClick={handleChangeLang}>
                <FaExchangeAlt />
                {lang && lang === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
