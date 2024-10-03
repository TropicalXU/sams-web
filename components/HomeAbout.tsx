'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { TitleText } from './ui/CustomTexts';
import styles from '@/styles';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const HomeAbout: React.FC = () => {
  const StaggerContainer = staggerContainer(0.3, 0.5);

  return (
    <section className={`${styles.xPaddings} bg-gradient-to-r from-[#f0f4f8] to-white rounded-2xl shadow-[#a6a6a630] shadow-xl py-14 mx-6 md:mx-6 my-4`}>
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={StaggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col lg:flex-row gap-10 justify-center items-center"
        >
          {/* Left Section: Image and Introduction */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <TitleText
              title="Samuel Gasilan"
              textStyles="font-extrabold text-[#2F5D62] text-[36px] lg:text-[44px] mt-4 leading-tight"
            />
            <p className="text-[#2F5D62] text-[22px] lg:text-[26px] font-medium mt-3">
              | B.A., MACP
            </p>

            {/* Profile Image */}
            <motion.div
              variants={fadeIn('left', 'tween', 0.25, 1)}
              className="mt-8 mx-auto flex justify-center md:justify-start"
            >
              <img
                alt="Samuel Gasilan"
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                height={280}
                width={280}
                src='/sam.jpg'
              />
            </motion.div>

            <div className="mt-6">
              <h2 className="font-semibold text-[22px] lg:text-[24px] text-[#2F5D62]">
                Registered Psychotherapist (Qualifying)
              </h2>
              <p className="text-[18px] lg:text-[20px] text-[#2F5D62] mt-4">
                Certified Trauma-Informed Therapist
              </p>
            </div>
          </div>

          {/* Right Section: About the Therapist */}
          <div className="lg:w-2/3 w-full rounded-3xl">
            <motion.div
              variants={fadeIn('up', 'tween', 0.25, 1)}
              className="text-[#2F5D62]"
            >
              <div className="flex items-center font-bold text-lg lg:text-xl mb-6">
                <Link href='/about'>
                  <h1 className="text-[#2F5D62]">About The Therapist</h1>
                </Link>
                <BsArrowRight className="ml-2 text-[22px]" />
              </div>

              {/* Biography Section */}
              <p className="leading-relaxed text-gray-700 mb-5 text-lg lg:text-xl">
                Samuel Gasilan is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario. He specializes in Somatic Experiencing and Dialectical Behaviour Therapy, helping clients navigate Trauma, Anxiety, and Depression.
              </p>
              <p className="leading-relaxed text-gray-700 text-lg lg:text-xl">
                Book a free 30-minute consultation via email at{' '}
                <a
                  href="mailto:samgasilan.psychotherapy@gmail.com"
                  className="text-[#2F5D62] text-[10px] md:text-[22px] underline"
                >
                  samgasilan.psychotherapy@gmail.com
                </a>
                .
              </p>
              <div className='mt-10'>
                <Link href='/about' className='inline-block bg-[#2F5D62] text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#204D52] transition-transform transform hover:scale-105'>
                  Find out more
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
