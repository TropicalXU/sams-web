"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import close from '../public/close.svg'
import menu from '../public/menu.svg'
import Link from 'next/link';
import Image from 'next/image';


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  
  const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  
    return (
      <>
      <motion.nav
      variants={navVariants}
  
      className='w-full relative flex py-6 items-center navbar px-2' 
      >
          <Link className='flex flex-row items-center' href='/'><img src=''  className='w-[60px] h-[60px] ml-6' />
            <span className=' text-[24px] font-style ml-4'>SAM</span>
          </Link>
          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {/* <li className='text-[16px] font-normal font-style cursor-pointer mx-12'><Link href='/'>Home</Link></li> */}
              <li className='text-[16px] font-bold cursor-pointer mx-12'><Link href='/'>Home</Link></li>
              <li className='text-[16px] font-bold cursor-pointer mx-12'><Link href='/services'><span className='flex flex-row items-center'>Serivces</span></Link></li>
          </ul>
          <ul className='list-none sm:flex hidden justify-end items-center mr-4'>
              <li className='text-[16px] font-bold cursor-pointer mx-4'><Link href='/faq'><span className='flex flex-row items-center'>FAQ</span></Link></li>
              <li className='text-[16px] font-bold  cursor-pointer mx-4'><Link href='/contact'><span className='flex items-center text-white bg-peach shadow-sm border-white shadow-peach rounded-md px-4 py-2'>Book a consultation</span></Link></li>
          </ul>
          <div className='sm:hidden flex flex-1
            justify-end items-center'>
            <Image 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
      </motion.nav>
       <motion.div 
        variants={navVariants}
        initial="hidden"
        whileInView={`${toggle ? 'show' : 'hidden'}`}
        className={`${toggle ? 'flex' : 'hidden'} p-6
       top-20 right-0 mx-4 min-w-[140px] justify-center sm:hidden`}
     >
       <ul className='list-none text-center font-style cursor-pointer'>
         <li className='font-normal py-2 '>Home</li>
         <li className='font-normal py-2'><Link href='/services'><span className='flex flex-row justify-center items-center'>Services</span></Link></li>
         <li className='font-normal py-2'><Link href='/faq'><span className='flex flex-row justify-center items-center'>FAQ</span></Link></li>
              <li className='font-normal py-2'><Link href='/contact'><span className='flex items-center bg-peach text-white hover:bg-slate-200 shadow-xl shadow-[#00000063] rounded-md px-4 py-2'>Request a quote</span></Link></li>
       </ul>
     </motion.div>
     </>
    );
  }

export default Navbar