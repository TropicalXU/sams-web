'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import close from '../public/close.svg';
import menu from '../public/menu.svg';
import Link from 'next/link';
import Image from 'next/image';
import brand from '../app/favicon.ico';

const variants = {
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } },
  closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className='w-full flex items-center justify-between py-6 bg-gradient-to-r from-white to-[#f0f4f89a] fixed top-0 z-30 px-6 md:px-12 transition duration-500'
      >
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image alt='Samuel Gasilan' src={brand} className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]' />
          <span className='ml-4 text-2xl font-bold text-gray-800 tracking-wide'>Samuel Gasilan</span>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex list-none items-center space-x-10'>
          <li className={`cursor-pointer hover:scale-105 transition-transform ${isActive('/') ? 'text-[#2F5D62] font-bold' : 'text-gray-600 font-semibold'} hover:text-[#2F5D62] transition-all duration-300`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`cursor-pointer hover:scale-105 transition-transform ${isActive('/services') ? 'text-[#2F5D62] font-bold' : 'text-gray-600 font-semibold'} hover:text-[#2F5D62] transition-all duration-300`}>
            <Link href='/about'>About</Link>
          </li>
          <li className={`cursor-pointer hover:scale-105 transition-transform ${isActive('/services') ? 'text-[#2F5D62] font-bold' : 'text-gray-600 font-semibold'} hover:text-[#2F5D62] transition-all duration-300`}>
            <Link href='/services'>Services</Link>
          </li>
          <li className={`cursor-pointer hover:scale-105 transition-transform ${isActive('/faq') ? 'text-[#2F5D62] font-bold' : 'text-gray-600 font-semibold'} hover:text-[#2F5D62] transition-all duration-300`}>
            <Link href='/faq'>FAQ</Link>
          </li>
          <li>
            <Link href='/contact'>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className='inline-block bg-[#2F5D62] text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform'
              >
                Get in touch
              </motion.span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center'>
          <Image
            src={menu}
            alt='menu'
            className='w-[28px] h-[28px] cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        variants={variants}
        initial='closed'
        animate={toggle ? 'open' : 'closed'}
        className={`fixed inset-0 bg-[rgba(0,0,0,0.75)] z-40 transition-all duration-300`}
        onClick={() => setToggle(false)}
      >
        <motion.div
          className={`fixed top-0 right-0 h-full w-full md:w-3/4 bg-opacity-75 shadow-lg z-50 p-8 flex flex-col space-y-8`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='md:hidden flex items-center'>
            <Image
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] cursor-pointer'
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <ul className='list-none flex flex-col items-center space-y-8 bg-gradient-to-r from-[#f0f4f8] to-[#dfe6e9] opacity-80 shadow-[#0e1d1fee] shadow-xl rounded-2xl p-5'>
            <li className={`cursor-pointer text-xl hover:scale-105 transition-transform ${isActive('/') ? 'text-[#2F5D62] font-semibold' : 'text-gray-600'} hover:text-[#2F5D62] transition-all duration-300`}>
              <Link href='/'>Home</Link>
            </li>
            <li className={`cursor-pointer text-xl hover:scale-105 transition-transform ${isActive('/services') ? 'text-[#2F5D62] font-semibold' : 'text-gray-600'} hover:text-[#2F5D62] transition-all duration-300`}>
              <Link href='/services'>Services</Link>
            </li>
            <li className={`cursor-pointer text-xl hover:scale-105 transition-transform ${isActive('/faq') ? 'text-[#2F5D62] font-semibold' : 'text-gray-600'} hover:text-[#2F5D62] transition-all duration-300`}>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/contact'>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className='inline-block bg-[#2F5D62] text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform'
                >
                  Get in touch
                </motion.span>
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;

