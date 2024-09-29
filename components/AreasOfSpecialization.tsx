'use client'

import React from 'react';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { FaBookOpen, FaBrain, FaPagelines } from 'react-icons/fa';
import { RiFlowerFill, RiMentalHealthFill } from 'react-icons/ri';
import { GrSpectrum } from 'react-icons/gr';
import { SiSololearn } from 'react-icons/si';
import { HeaderText } from './ui/CustomTexts';

const AreasOfSpecialization = () => {
  const specializations = [
    {
      icon: <FaBrain />,
      title: 'Post Traumatic Stress Disorder',
      description: 'PTSD is a mental health condition triggered by experiencing or witnessing a traumatic event. Symptoms include flashbacks, anxiety, and avoidance of trauma-related situations.',
    },
    {
      icon: <FaPagelines />,
      title: 'Anxiety & Depression',
      description: 'Anxiety causes excessive worry, while depression brings persistent sadness and loss of interest. Both can significantly disrupt daily life.',
    },
    {
      icon: <GrSpectrum />,
      title: 'Attention-Deficit/Hyperactive Disorder & Autism Spectrum Disorder',
      description: 'ADHD involves inattention, impulsivity and hyperactivity, while ASD affects communication and social behavior. Both require tailored approaches for treatment.',
    },
    {
      icon: <FaBrain />,
      title: 'Social & Emotion Regulation Skills Training',
      description: 'This training helps individuals manage emotions, improve communication, and navigate social situations, especially in cases of ADHD, ASD, or mood disorders.',
    },
    {
      icon: <FaBookOpen />,
      title: 'Applied Behavior Analysis Therapy',
      description: 'Behavior modification therapy uses reinforcement techniques to encourage positive behaviors, often used in ASD to improve social and communication skills.',
    },
    {
      icon: <RiFlowerFill />,
      title: 'Professional Development & Life Transitions',
      description: 'Focuses on enhancing skills for career growth and navigating significant life changes, such as career shifts or retirement.',
    },
    {
      icon: <SiSololearn />,
      title: 'Psychoeducational Support',
      description: 'Psychoeducation provides information about psychological conditions, empowering individuals to manage their symptoms and make informed decisions.',
    },
    {
      icon: <RiMentalHealthFill />,
      title: 'Borderline Personality Disorder',
      description: 'BPD is characterized by intense emotions, impulsive behavior, and difficulties in maintaining relationships, often leading to unstable moods.',
    },
  ];

  return (
    <main className={`${styles.xPaddings} flex flex-col items-center justify-center w-full h-full py-10 my-6 md:mx-0 mx-auto`}>
      <header className="text-center mb-10">
      <HeaderText
              title="Areas of Specialization"
              textStyles="text-[36px] lg:text-[52px] font-bold"
            />
        {/* <h1 className="text-4xl font-bold text-[#2F5D62] mb-2">Areas of <span className="text-[#57A773]">Specialization</span></h1> */}
        <p className="md:text-2xl text-lg text-gray-500 mt-2">Explore the key areas we specialize in to support your mental health journey.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full px-5">
        {specializations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-[#2F5D62] text-4xl">{item.icon}</div>
              <h2 className="text-2xl font-semibold text-[#2F5D62]">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default AreasOfSpecialization;
