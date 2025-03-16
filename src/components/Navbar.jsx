import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [pendingNav, setPendingNav] = useState(null);

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

  

  return (
    <>
      {/* Navbar Desktop */}
      <div className='hidden lg:flex gap-3 justify-center px-4 fixed right-0 top-0 p-5 z-30 bg-gray-50 mr-5 rounded-2xl'>
        <button className='text-gray-600 text-xl font-bold'>
          duong.
        </button>
        <button className={`font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300`} onClick={() => handleNavigate(1)}>
          information
        </button>
        <button className={` font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300`} onClick={() => handleNavigate(2)}>
          objective
        </button>
        <button className={`font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300`} onClick={() => handleNavigate(3)}>
          skill
        </button>
        <button className={`font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300`} onClick={() => handleNavigate(4)}>
          project
        </button>
      </div>

      {/* Navbar Mobile */}
      <div className="flex flex-col items-end z-50 lg:hidden gap-3 px-4 fixed right-0 top-0 p-5 bg-gray-50 ">
        <button onClick={() => setIsToggle(!isToggle)} className='cursor-pointer flex items-center text-gray-600 border border-gray-600 rounded-lg'>
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
              <button className='text-gray-600 font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300' onClick={() => handleNavigate(1)}>
                information
              </button>
              <button className='text-gray-600 font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300' onClick={() => handleNavigate(2)}>
                objective
              </button>
              <button className='text-gray-600 font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300' onClick={() => handleNavigate(3)}>
                skill
              </button>
              <button className='text-gray-600 font-semibold cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300' onClick={() => handleNavigate(4)}>
                project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
