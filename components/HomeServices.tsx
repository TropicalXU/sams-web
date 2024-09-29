'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import styles from '@/styles';
import { HeaderText } from './ui/CustomTexts';
import { cardData, cardData2 } from '@/constants';
import Image from 'next/image';
import chairs from '../public/chairs.png';

const HomeServices: React.FC = () => {
  const StaggerContainer = staggerContainer(0.3, 0.5);

  return (
    <>
      {/* First Section */}
      <section className="bg-[#2F5D62] rounded-2xl py-12 mx-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            {cardData2.map((data, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center flex flex-col items-center text-white shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="text-5xl text-[#FFD166] mb-4">{data.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
                <p className="text-lg">{data.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-gradient-to-r from-[#fff] to-[#f0f4f8] rounded-3xl py-16 mx-5 mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[#2F5D62] font-extrabold text-[36px] md:text-[42px]">
              Your Path To Mental Wellness
            </h1>
            <p className="text-lg md:text-2xl text-[#5B6D73] mt-4">
              Types of services I offer
            </p>
          </div>

          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
          >
            {/* Image */}
            <div className="w-full lg:w-1/3 relative">
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="rounded-xl overflow-hidden"
              >
                <Image
                  alt="Therapy chairs"
                  src={chairs}
                  className="rounded-xl"
                />
              </motion.div>
            </div>

            {/* Service Cards */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cardData.map((data, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                  className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-500 hover:shadow-lg"
                >
                  <div className="relative z-10 p-6 text-center flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-[#E8F6F8] rounded-full shadow-lg mb-6 transform group-hover:scale-110 transition duration-500">
                      <div className="text-3xl text-[#2F5D62]">{data.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#2F5D62] mb-3">
                      {data.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-md text-gray-500">
                      {data.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default HomeServices;
