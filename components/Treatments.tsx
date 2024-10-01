'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import styles from '@/styles'
import React from 'react'
import { HeaderText } from './ui/CustomTexts'
import { cardData } from '@/constants'


const Treatments = () => {

  return (
    <section className={`${styles.xPaddings} relative z-10 inset-0 h-full w-full bg-white mt-[120px]`}>
    {/* Header */}
        <div className='flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#f0f4f8] to-white rounded-xl py-12 md:py-20 px-6 md:px-16 mb-4'>
        {/* Left Side - Image */}
            <div className='flex-1 flex justify-center md:mt-0 mt-6'>
                <img alt="Services" src='/services.png' className='w-[480px] md:w-[320px] rounded-lg transition-transform duration-300 hover:scale-105' />
            </div>
            {/* Right Side - Heading */}
            <div className='flex-1 text-center md:text-left mt-8 md:mt-0'>
                <h1 className='text-[#2F5D62] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='text-[#57A773]'>Services</span>
                </h1>
                <p className='mt-4 text-lg md:text-xl text-[#2F5D62] max-w-[600px] mx-auto md:mx-0'>
                Sessions are offered in both virtual and in-person for individual and child thetapy.
                </p>
            </div>
        </div>
        <div className="bg-gradient-to-r from-white to-[#f0f4f8] rounded-xl flex flex-col justify-center items-center text-center py-8 px-6 mb-10">
            <div className="w-full flex flex-col justify-center items-center gap-8 px-5 mt-6">
                {cardData.map((data, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                    className="w-full bg-[#2F5D62] border border-[#A7C4BC] rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-500 hover:shadow-lg"
                >
                    <div className="relative z-10 p-6 text-center flex flex-col items-center">
                        {/* Icon */}
                        <div className="w-16 h-16 flex items-center justify-center bg-[#E8F6F8] rounded-full shadow-lg mb-6 transform group-hover:scale-110 transition duration-500">
                        <div className="text-3xl text-[#2F5D62]">{data.icon}</div>
                        </div>
                        <div className='bg-[#A7C4BC] p-4 rounded-xl'>
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-[#2F5D62] mb-3">
                        {data.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-md text-white">
                        {data.subtitle}
                        </p>
                        </div>
                        <p  className='text-white mt-4 p-6'>{data.description}</p>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
        <div className={`mx-12`}>
            <div className={`${styles.xPaddings} flex justify-center relative z-10 mb-5`}>
                <div className='flex justify-center flex-col items-center text-center'>
                    <HeaderText
                        title={(<>Treatment <span className='text-[#2F5D62]'>Modalities</span></>)}
                        textStyles="ext-[36px] lg:text-[52px] main-font mb-4"
                    />
                    <p className="md:text-2xl text-lg text-[#2F5D62] my-4">Comprehensive Approaches Tailored to Your Healing Journey</p>
                </div>
            </div>
            <motion.div
                variants={fadeIn('right', 'tween', 0.25, 1)}
                className='flex-[0.75] bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[40px] py-6'
                initial='hidden'
                whileInView='show'
            >
                <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full '>
                    <h1 className='text-[#2F5D62]  bg-white
                    rounded-2xl text-[22px] font-bold w-full p-5'>
                        COGNITIVE BEHAVIOUR THERAPY
                    </h1>
                    <p className='font-medium text-white py-6'>Cognitive Behaviour Therapy (CBT) is a structured, evidence-based approach that helps individuals identify and change negative thought patterns and behaviors contributing to emotional distress. By focusing on the connection between thoughts, feelings, and actions, CBT equips people with practical strategies to manage issues like anxiety, depression, and stress. It’s typically short-term, goal-oriented, and highly effective in promoting lasting mental health improvements.</p>
                </div>
                <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter}`}
                >
                    <div className='md:w-[460px] my-4'>
                        <img
                        alt='Cognitive Behaviour Therapy'
                        src='/CBT.jpg'
                        className="rounded-md shadow-lg border-[6px] border-[#fff] object-cover"
                        />
                    </div>
                </motion.div>
        </motion.div>
        <motion.div
            variants={fadeIn('left', 'tween', 0.25, 1)}
            className='flex-[0.75] flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[40px] py-6'
            initial='hidden'
            whileInView='show'
        >
            <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter} order-2 md:order-1`}
            >
                <div className='md:w-[460px] my-4'>
                    <img
                        alt='Dialectial Behaviour Therapy Image'
                        src='/dbt1.png'
                        className="rounded-lg border-[6px] border-[#fff] object-contain"
                    />
                </div>
            </motion.div>
            <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full order-1'>
                <h1 className='text-white  bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC]
                rounded-2xl text-[22px] font-bold w-full p-5'>
                    DIALECTIAL BEHAVIOUR THERAPY
                </h1>
                <p className='font-medium py-6'>Dialectical Behaviour Therapy (DBT) is a therapeutic approach designed to help individuals manage intense emotions and improve relationships through a combination of acceptance and change strategies. Originally developed to treat Borderline Personality Disorder, DBT is now widely used for various mental health issues, including self-harm, suicidal behavior, and mood disorders. The therapy focuses on teaching skills in mindfulness, emotional regulation, distress tolerance, and interpersonal effectiveness, empowering individuals to build a more balanced and fulfilling life.</p>
            </div>
        </motion.div>
        <motion.div
                variants={fadeIn('right', 'tween', 0.25, 1)}
                className='flex-[0.75] bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px] py-6'
                initial='hidden'
                whileInView='show'
            >
            <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full '>
                <h1 className='text-[#2F5D62] bg-white 
                rounded-2xl text-[22px] font-bold w-full p-5'>
                    INTERNAL FAMILY SYSTEM
                </h1>
                <p className='font-medium text-white py-6'>
                Internal Family Systems (IFS) is a therapeutic approach that views the mind as made up of different “parts,” each with its own perspective and feelings, often formed in response to life experiences. In IFS, the goal is to help individuals understand and harmonize these internal parts, fostering self-compassion and healing. By recognizing that each part, even those causing distress, has a protective role, clients can work towards unburdening and integrating these parts to achieve inner balance and well-being. This approach is particularly effective for trauma, anxiety, and relationship issues.</p>
            </div>
                <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter}`}
                >
                    <div className='md:w-[460px] my-4'>
                        <img
                        alt='Internal Family System Image'
                        src='/ifs.jpg'
                        className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                        />
                    </div>
                </motion.div>
        </motion.div>
        <motion.div
            variants={fadeIn('left', 'tween', 0.25, 1)}
            className='flex-[0.75] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px] py-6'
            initial='hidden'
            whileInView='show'
        >
            <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter} order-2 md:order-1`}
            >
                <div className='md:w-[460px] my-4'>
                    <img
                        alt='Somatic Experiencing Therapy Image'
                        src='/set.png'
                        className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                    />
                </div>
            </motion.div>
            <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full order-1'>
                <h1 className='text-white bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC]
                rounded-2xl text-[22px] font-bold w-full p-5'>
                    SOMATIC EXPERIENCING THERAPY
                </h1>
                <p className='font-medium py-6'>Somatic Experiencing Therapy is a body-focused therapeutic approach designed to help individuals heal from trauma by addressing the physical sensations associated with stress and trauma responses. Developed by Dr. Peter Levine, this therapy emphasizes the connection between the body and mind, encouraging clients to become more aware of their bodily sensations and gradually release stored tension and trauma. Through gentle, guided exercises, Somatic Experiencing helps individuals restore their nervous system's natural balance, promoting a sense of safety, resilience, and emotional well-being.</p>
            </div>
        </motion.div>
        <motion.div
                variants={fadeIn('right', 'tween', 0.25, 1)}
                className='flex-[0.75] bg-gradient-to-br from-[#2F5D62] to-[#A7C4BC] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px] py-6'
                initial='hidden'
                whileInView='show'
            >
            <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full '>
                <h1 className='text-[#2F5D62] bg-white  
                rounded-2xl text-[22px] font-bold w-full p-5'>
                    BEHAVIOUR THERAPY FOR MANAGING ADHD
                </h1>
                <p className='font-medium text-white py-6'>
                Behavior Therapy for managing ADHD focuses on modifying specific behaviors through structured techniques such as positive reinforcement, time management strategies, and organizational skills training. This approach helps individuals with ADHD develop routines, set achievable goals, and reduce impulsive actions. By reinforcing desirable behaviors and providing consistent consequences for undesirable ones, Behavior Therapy empowers individuals to better manage their symptoms, improve focus, and enhance their overall functioning in daily life. It is often used in combination with other treatments like medication or counseling for optimal results.</p>
            </div>
                <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter}`}
                >
                    <div className='md:w-[460px] my-4'>
                        <img
                        alt='Behaviour Therapy for Managing ADHD image'
                        src='/adhd2.jpg'
                        className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                        />
                    </div>
                </motion.div>
        </motion.div>
        <motion.div
            variants={fadeIn('left', 'tween', 0.25, 1)}
            className='flex-[0.75] flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px] py-6'
            initial='hidden'
            whileInView='show'
        >
            <motion.div
                variants={fadeIn('right')}
                className={`flex ${styles.flexCenter} order-2 md:order-1`}
            >
                <div className='md:w-[460px] my-4'>
                    <img
                        alt='Solution-Focused Brief Therapy Image'
                        src='/adhd.jpg'
                        className="border-[6px] border-[#fff] object-contain"
                    />
                </div>
            </motion.div>
            <div className='p-[20px] md:p-[20px] rounded-lg md:w-[440px] w-full order-1'>
                <h1 className='text-white bg-[#2F5D62]
                rounded-2xl text-[22px] font-bold w-full p-5'>
                    SOLUTION-FOCUSED BRIEF THERAPY
                </h1>
                <p className='font-medium py-6'>Solution-Focused Brief Therapy (SFBT) is a goal-oriented, short-term therapeutic approach that emphasizes finding solutions rather than focusing on problems. It encourages individuals to envision their desired future and identify the strengths and resources they already possess to achieve those goals. By concentrating on what works and building on past successes, SFBT helps clients make positive changes quickly, often within just a few sessions. This therapy is particularly effective for addressing specific issues, fostering a sense of empowerment and progress in a relatively brief timeframe.</p>
            </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Treatments