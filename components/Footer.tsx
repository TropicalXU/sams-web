'use client';

import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles/index';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

// Define motion variants for the footer
const footerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <section className="bg-[#2F5D62] text-white">
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.paddings} py-16 relative`}
      >
        <div className={`${styles.xPaddings} mx-auto text-center md:text-start flex flex-col md:flex-row md:justify-between items-center gap-10`}>
          {/* Brand Section */}
          <div className="flex w-full md:w/1-3 flex-col items-center md:items-start mb-8 md:mb-0">
            <img alt="Samuel Gasilan logo" src='/favicon.ico' className="w-[80px] h-[80px] mb-4" />
            <p className="text-[24px] font-bold text-white text-center md:text-left">Samuel Gasilan</p>
            <p className="text-center md:text-left text-[#ffffff90] mt-4">Helping you on your journey to mental wellness</p>
          </div>

          {/* Links Section */}
          <div className="flex w-full flex-col md:w-2/3 md:flex-wrap md:justify-end gap-20">
            <div className="flex flex-col text-white">
              <p className="text-[18px] font-semibold mb-4">Quick Links</p>
              <ul className="list-none space-y-2">
                <li><Link className='hover:text-[#ffffff80]' href="/">Home</Link></li>
                <li><Link className='hover:text-[#ffffff80]' href="/about">About</Link></li>
                <li><Link className='hover:text-[#ffffff80]' href="/services">Services</Link></li>
                <li><Link className='hover:text-[#ffffff80]' href="/faq">Faq</Link></li>
                <li><Link className='hover:text-[#ffffff80]' href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-[18px] font-semibold mb-4">Connect</p>
              <div className="flex space-x-4">
                <a href="mailto:samgasilan.psychotherapy@gmail.com" className="flex flex-col md:flex-row text-white hover:text-[#ffffff80]"><FaEnvelope size={24} className='md:mr-3 mx-auto md:mx-0' />Email: samgasilan.psychotherapy@gmail.com</a>
              </div>
              {/* <div className="flex space-x-4 mt-4">
              <a className='flex flex-col md:flex-row text-white hover:text-[#ffffff80]' href="https://www.instagram.com/layerlabs.io"><FaInstagram  className='text-[22px] mr-2'/>Instagram</a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 my-8"></div>
        <div className={`${styles.xPaddings} mx-auto text-center text-white`}>
        <p className="md:text-[14px] text-[9px] text-center font-medium my-6"><span className='text-white rounded-full p-3'>Created & Designed by <a href='https://www.layerlabs.io' className='bg-white font-semibold text-[#2F5D62] rounded-full px-3 py-1 ml-2'>Layerlabs Studio</a></span></p>
          {/* <p className="text-[14px] mb-4">samgasilan.psychotherapy@gmail.com</p> */}
          <div className="flex flex-col md:flex-row justify-between gap-6 text-[12px]">
            <p>© 2024 Samuel Gasilan. All rights reserved.</p>
            <div className="flex justify-center md:justify-none gap-4">
              <Link href="/terms-and-conditions" className="hover:text-[#ffffff80]">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-[#ffffff80]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
