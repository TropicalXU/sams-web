'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { TitleText } from './ui/CustomTexts';
import styles from '@/styles';
import Image from 'next/image';
import sam from '../public/sam.jpg';
import { BsArrowRight } from 'react-icons/bs';

const HomeAbout: React.FC = () => {
  const StaggerContainer = staggerContainer(0.3, 0.5);

  return (
    <section className={`${styles.xPaddings} bg-white rounded-lg py-10 mx-5 my-8`}>
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={StaggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col lg:flex-row gap-8 justify-center items-center"
        >
          {/* Left Section: Image and Introduction */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <TitleText
              title="Samuel Gasilan"
              textStyles="font-bold text-[#2F5D62] text-[32px] lg:text-[40px] mt-4"
            />
            <p className="text-[#2F5D62] text-[20px] lg:text-[24px] font-medium mt-2">
              | B.A., MACP
            </p>

            {/* Profile Image */}
            <motion.div
              variants={fadeIn('left', 'tween', 0.25, 1)}
              className="mt-6 mx-auto lg:mx-0"
            >
              <Image
                alt="Samuel Gasilan"
                className="rounded-lg shadow-sm"
                height={280}
                width={280}
                src={sam}
              />
            </motion.div>

            <div className="mt-6">
              <h2 className="font-medium text-[20px] lg:text-[22px] text-[#2F5D62]">
                Registered Psychotherapist (Qualifying)
              </h2>
              <p className="text-[18px] lg:text-[20px] text-[#2F5D62] mt-3">
                Certified Trauma-Informed Therapist
              </p>
            </div>
          </div>

          {/* Right Section: About the Therapist */}
          <div className="lg:w-2/3 bg-gray-50 rounded-lg p-6">
            <motion.div
              variants={fadeIn('up', 'tween', 0.25, 1)}
              className="text-[#2F5D62]"
            >
              <div className="flex items-center font-semibold mb-6">
                <h1 className="text-xl">About The Therapist</h1>
                <BsArrowRight className="ml-2 text-[20px]" />
              </div>

              {/* Biography Section */}
              <p className="mb-5 leading-relaxed text-gray-700">
                Samuel Gasilan is a Registered Psychotherapist (Qualifying) with
                the College of Registered Psychotherapists of Ontario. He
                received his Bachelor of Arts in Psychology at York University
                and a Master of Arts in Counselling Psychology at Yorkville
                University. Samuel is trained in Somatic Experiencing Therapy
                and Dialectical Behaviour Therapy, specializing in Trauma,
                Anxiety, Depression, and LGBTQAI+ matters.
              </p>

              <p className="mb-5 leading-relaxed text-gray-700">
                His experience includes providing Applied Behavioural Analysis
                Therapy to individuals with neurodevelopmental disorders and
                acquired brain injuries. Samuel’s eclectic approach meets
                clients where they are, offering tailored strategies to enhance
                mental health.
              </p>

              <p className="leading-relaxed text-gray-700">
                Book a free 30-minute consultation via email at{' '}
                <a
                  href="mailto:samgasilan.psychotherapy@gmail.com"
                  className="text-[#2F5D62] underline"
                >
                  samgasilan.psychotherapy@gmail.com
                </a>
                .
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;


