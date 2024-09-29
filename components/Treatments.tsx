'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import hero from '../public/hero-bg.jpg'
import styles from '@/styles'
import React from 'react'
import Image from 'next/image'
import brain from '../public/brain.svg'
import cbt from '../public/CBT.jpg'
import dbt from '../public/DBT.jpg'
import adhd from '../public/adhd.jpg'
import { HeaderText } from './ui/CustomTexts'
import { FaChevronRight } from 'react-icons/fa'



const Treatments = () => {

    const words = [
        {
          text: "Treatment"
        },
        {
          text: "modalities.",
          className: "text-[#2F5D62]",
        },
      ];

  return (
    <section className={`${styles.xPaddings} relative z-10 inset-0 h-full w-full bg-white mt-[120px]`}>
        <div className={`mx-12`}>
            <div className={`${styles.xPaddings} flex justify-center relative z-10 mb-5`}>
                <div className='flex justify-center flex-col items-center text-center'>
                    <HeaderText
                        title={(<>Treatment <span className='text-[#2F5D62]'>Modalities</span></>)}
                        textStyles="text-[44px] md:text-[72px] main-font mb-4"
                    />
                    <p className="text-xl md:text-2xl text-[#2F5D62] my-4">Comprehensive Approaches Tailored to Your Healing Journey</p>
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
                        <Image
                        alt='design stage'
                        src={cbt}
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
                    <Image
                        alt='design stage'
                        src={dbt}
                        className="rounded-lg shadow-lg border-[6px] border-[#fff] object-contain"
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
                        <Image
                        alt='design stage'
                        src={hero}
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
                    <Image
                        alt='design stage'
                        src={hero}
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
                        <Image
                        alt='design stage'
                        src={adhd}
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
                    <Image
                        alt='design stage'
                        src={hero}
                        className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
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