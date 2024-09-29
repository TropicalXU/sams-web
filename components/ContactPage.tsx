'use client';

import React from 'react';
import styles from '@/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { links, cardData2 } from '@/constants';
import connect from '../public/connect.png';
import { staggerContainer, fadeIn } from '@/utils/motion';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  const StaggerContainer = staggerContainer(0.3, 0.5);

  return (
    <>
      {/* Hero Section */}
      <section className='overflow-hidden rounded-xl bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC] text-white px-10 py-16 md:py-24 mt-[120px] mx-5'>
        <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between'>
          {/* Left Side */}
          <motion.div 
            className='flex-1 mb-8 md:mb-0 text-center md:text-left'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-6xl font-extrabold leading-tight'>
              Let's <span className='text-[#57A773]'>Connect</span> Today!
            </h1>
            <p className='text-lg md:text-xl mt-4 mb-6 font-medium'>
              Reach out via email, phone, or the form below to schedule your free 15-minute consultation.
            </p>
            <div className='flex justify-center md:justify-start'>
              <a href='#contact-form' className='inline-block bg-white text-[#2F5D62] px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform'>
                Book a Consultation
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            className='flex-1 flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src={connect}
              alt='Connect with Samuel'
              width={360}
              height={360}
              className='rounded-lg'
            />
          </motion.div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section id='contact-form' className='py-16 bg-gradient-to-r from-[#f0f4f8] to-[#fff] rounded-2xl mx-5 my-4'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <motion.div 
            className='p-4'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='text-center mb-8'>
              <h1 className='text-[#2F5D62] font-extrabold text-[36px] md:text-[48px] tracking-tight'>
                Get In Touch
              </h1>
              <p className='text-lg md:text-2xl text-[#2F5D62] mt-4'>
                Fill out the form below, and I’ll get back to you shortly.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className='py-16 bg-gradient-to-t from-[#2F5D62] to-[#A7C4BC] text-white'>
        <div className='max-w-[1400px] mx-auto px-8'>
          <motion.div
            variants={StaggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-wrap justify-center gap-8'
          >
            {cardData2.map((data, index) => (
              <motion.div 
                key={data.title}
                variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
                className='flex flex-col bg-[#2F5D62] p-8 w-[280px] text-center rounded-lg shadow-xl hover:scale-105 transition-transform'
              >
                <i className={`text-4xl text-[#FFD166] mb-4`}>{data.icon}</i>
                <p className='font-bold text-xl'>{data.title}</p>
                <p className='text-gray-200 mt-2'>{data.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
