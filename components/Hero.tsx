"use client";

import Button from './ui/Button';
import Image from 'next/image';
import styles from '@/styles';
import hero from '../public/hero-img.png';
import { TypewriterEffectSmooth } from './ui/Typewriter';
import Link from 'next/link';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { HeaderText } from './ui/CustomTexts';

const Hero = () => {
  const words = [
    { text: "Empowering" },
    { text: "you" },
    { text: "to" },
    { text: "thrive.", className: "text-[#2F5D62]" },
  ];

  return (
    <section className={`${styles.xPaddings} relative z-10 mt-[120px]`}>
      <div className="w-full h-full rounded-2xl bg-gradient-to-r from-[#f0f4f8] to-[#fff] flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-24 relative mb-4">
        
        {/* Left Section: Hero Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8">
          <h1 className="text-[#2F5D62] text-center md:text-start font-bold text-5xl md:text-6xl lg:text-6xl mt-12 md:mt-0">
            Samuel Gasilan 
          </h1>
          {/* <h1 className="text-[#2F5D62] text-center md:text-start font-bold text-5xl md:text-6xl lg:text-6xl mt-12 md:mt-4">Helping you on your journey to mental wellness</h1> */}
          <div className="text-2xl md:text-3xl font-medium text-gray-700 relative">
            <TypewriterEffectSmooth words={words} />
          </div>
          
          <Link href="/contact">
            <span className="inline-block bg-[#2F5D62] text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Book a Consultation
            </span>
          </Link>
        </div>

        {/* Right Section: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            alt="Hero"
            src={hero}
            width={640}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
