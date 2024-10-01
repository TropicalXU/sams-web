'use client';

import React from 'react';
import styles from '@/styles';
import { HeaderText } from './ui/CustomTexts';
import { FaChevronRight } from 'react-icons/fa';

const HomePlan: React.FC = () => {
  return (
    <section className="bg-[#2F5D62] rounded-2xl mx-5 py-12">
      <div className={`${styles.paddings} relative z-10 flex flex-col md:flex-row gap-8`}>
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 px-6">
          <div className="flex items-center justify-center md:justify-start text-center md:text-left">
            <HeaderText
              title="Therapy Process"
              textStyles="text-white text-[42px] lg:text-[52px] font-bold"
            />
            <FaChevronRight className="text-white text-[40px] ml-4" />
          </div>

          <div className="mt-10 space-y-6">
            {/* Step 1 */}
            <div className="bg-transparent text-white p-6 rounded-lg shadow-md">
              <h1 className="text-[22px] font-bold">01. Initial Consultation</h1>
              <p className="mt-2 text-[16px] leading-relaxed">
                Discuss your needs and set clear goals for your therapy journey in a virtual meeting.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-[#255054] to-[#2F5D62] text-white p-6 rounded-lg shadow-md">
              <h1 className="text-[22px] font-bold">02. Personalized Online Therapy</h1>
              <p className="mt-2 text-[16px] leading-relaxed">
                Choose a therapy approach that suits you, with flexible virtual sessions from the comfort of your home.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-transparent text-white p-6 rounded-lg shadow-md">
              <h1 className="text-[22px] font-bold">03. Ongoing Support</h1>
              <p className="mt-2 text-[16px] leading-relaxed">
                Regular online check-ins to adjust your plan, access to digital resources, and strategies for long-term wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center md:justify-end">
          <img alt="Therapy Session" src='/therapy.jpg' className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HomePlan;
