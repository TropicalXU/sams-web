"use client";

import styles from '@/styles';
import Link from 'next/link';

const Hero = () => {

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
            <h1 className='text-3xl md:text-5xl text-center md:text-start font-extrabold leading-tight'>
              Helping you on your journey to  <span className='text-[#57A773]'>mental wellness.</span>
            </h1>
          </div>
          
          <Link href="/contact">
            <span className="inline-block bg-[#2F5D62] text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Book a Consultation
            </span>
          </Link>
        </div>

        {/* Right Section: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            alt="Hero Image"
            src='/hero-img.png'
            width={640}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
