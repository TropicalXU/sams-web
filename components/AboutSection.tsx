'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData, aboutInfo } from '@/constants';
import { staggerContainer } from '@/utils/motion';
import { HeaderText } from './ui/CustomTexts';
import ImageZoomModal from './ImageZoomModal';
import Link from 'next/link';
import { FaCertificate } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const StaggerContainer = staggerContainer(0.3, 0.5);

  return (
    <>
      {/* Hero Section */}
      <section className='overflow-hidden rounded-xl bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC] text-white px-6 py-8 md:py-10 mx-5 mt-[120px]'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          
          {/* Left Side */}
          <motion.div 
            className='text-center md:text-left space-y-6'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
              Meet <span className='text-[#57A773]'>{aboutInfo.name}</span>
            </h1>
            <p className='text-lg md:text-xl font-medium'>
              {aboutInfo.introduction}
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src='/handshake.png'
              alt='Therapist Photo'
              width={420}
              height={420}
              className=''
            />
          </motion.div>
        </div>
      </section>

      {/* About Details Section */}
      <section className='py-20 bg-gradient-to-r from-[#f0f4f8] to-white rounded-2xl mx-5 my-8'>
        <div className='max-w-[1200px] mx-auto text-center p-12'>
          {/* Section Heading */}
          <h2 className='text-[#2F5D62] font-bold text-[40px] md:text-[52px] tracking-tight leading-tight'>
            About {aboutInfo.name}
          </h2>
          <p className='mt-4 text-lg md:text-2xl text-[#2F5D62]'>
            Registered Psychotherapist (Qualifying) specializing in trauma, mood disorders, and neurodevelopmental challenges.
          </p>
          {/* Image & Bio Section */}
          <div className='mt-12 flex flex-col'>
            {/* Profile Image */}
            <div className='flex-1 md:mb-0'>
              <div className='relative overflow-hidden w-full h-full mx-auto'>
              <div className="flex flex-row justify-center text-center mb-4">
              <ImageZoomModal 
                  src='/cert.jpg'
                  alt="About Image" 
                  width={320} 
                  height={320} 
                  className-
                />
            </div>
              </div>
            </div>
          </div>
          <div className='mt-6 flex flex-col'>
            {/* Bio Text */}
            <div className='flex-1 mt-8'>
              <p className="text-[#2F5D62] text-md md:text-lg leading-relaxed mb-6">
                Samuel Gasilan is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario. He received his Bachelor of Arts in Psychology at York University and a Master of Arts in Counselling Psychology at Yorkville University. Samuel received extensive training and certifications in Somatic Experiencing Therapy and Dialectical Behaviour Therapy and is a Certified Trauma-Informed Therapist. Throughout his professional development, he has attended conferences on applications of different treatment modalities such as behavioural therapy, Applied Behavioural Analysis Therapy, Acceptance-Committed Therapy, Internal Family System, Play Therapy and Solution-Focused Therapy to address various clients' concerns, and more specifically, heavily focused on psychological and mental health issues as a result of Post-traumatic Stress Disorder, Complex and Chronic Traumas.
              </p>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <p className="text-[#2F5D62] text-md md:text-lg leading-relaxed mb-6">
              Samuel specializes in working with Post-Traumatic Stress Disorder, Complex and Chronic Trauma, Mood disorders such as Anxiety and Depression, Life Transitions and stressors, Neurodevelopmental Disorders and LGBTQAI+ matters. Prior to completing his Master's degree in Counselling Psychology, Samuel extensively worked in the neurodevelopmental field as a Behaviour Therapist and provides Applied Behaviour Analysis Therapy to individuals living with learning disabilities, neurodevelopmental disorders and acquired brain injury deficits between the ages of 4 to 30 years old to teach adaptive coping skills and address concerns related to self-injurious behaviours, aggression to others, property destructions, functional social, living, and self-help skills. Samuel's vast experiences and credentials allow him to provide Psychotherapy, psychoeducation, and Skills Training to individuals from 4 years of age +.
            </p>
            <p className="text-[#2F5D62] text-md md:text-lg leading-relaxed mb-6">
              Samuel's approach to therapy is eclectic - a style where he meets where the client is. He provides a safe, warm, and unconditional positive regard to clients new to therapy or recently encountered life matters that require guided or co-collaborative exploration to examine how it impacts their lives. With other clients, he opts for a more directive approach that challenges and encourages clients to engage in deeper self-reflection on changing maladaptive patterns in their lives that perpetuate their mental health concerns to improve their overall well-being. Samuel believes it is not only about the number of training and certifications that makes therapy effective - it truly lies in the most fundamental need of every human being - the meaning-making and human connection process that facilitates the client's change to good psychological health.
            </p>
            <p className="text-[#2F5D62] text-md md:text-lg leading-relaxed mb-6">
              If you would like to gauge fit, see how you feel about working with me and see if my services will assist you in meeting your needs, book a free 30-minute consultation with me. You can reach me through my email at samgasilan.psychotherapy@gmail.com
            </p>
          </div>

          {/* CTA Button */}
          <div className='mt-12'>
            <Link href='/contact' className='inline-block bg-[#57A773] text-white md:px-10 md:py-4 px-6 py-3 md:text-lg text-sm font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105'>
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section className='text-white bg-gradient-to-b from-[#A7C4BC] to-[#2F5D62] shadow-xl py-16'>
        <div className='max-w-[1400px] mx-auto px-8'>
          <motion.div
            variants={StaggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-wrap justify-center gap-8 pb-12 mb-12'
          >
            <header className="text-center mb-10">
            <HeaderText
              title="Certifications"
              textStyles="text-[36px] lg:text-[52px] font-bold"
            />
      </header>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full px-5">
        {certificationsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
          >
                        <FaCertificate className='text-[#2F5D62] text-[20px] mb-4' />
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-2xl font-semibold text-[#2F5D62]">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.issuer}</p>
            <p className="text-gray-600">{item.year}</p>
          </motion.div>
        ))}
      </section>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
