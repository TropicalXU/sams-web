'use client';

import React, { useState } from 'react';
import { FAQ } from '@/constants';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqAccordionProps {
  faqs: FAQ[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const StaggerContainer = staggerContainer(0.3, 0.5);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="overflow-hidden relative max-w-full mx-5 mt-[120px] md:mt-[120px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f0f4f8] to-[#fff] rounded-xl flex flex-col md:flex-row justify-center items-center text-center py-8 px-6 mb-10">
        <h1 className="text-[#2F5D62] text-5xl md:text-6xl font-extrabold leading-tight">Frequently Asked Questions</h1>
        <div className="mt-4 md:mt-0">
          <img alt="Frequently Asked Questions" src='/faq.png' width={320} height={320} />
        </div>
      </div>

      {/* Accordion */}
      <div className={`max-w-5xl mx-auto px-4 space-y-6 mb-12`}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`transition-all duration-300 border border-[#A7C4BC] rounded-2xl shadow-md ${
              activeIndex === index ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-white to-[#f7f9fa]'
            }`}
            onClick={() => toggleAccordion(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            {/* Question */}
            <div className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-xl md:text-2xl font-bold text-[#2F5D62]">{faq.question}</h3>
              <div className="text-[#2F5D62]">
                {activeIndex === index ? (
                  <FaChevronUp className="transition-transform transform rotate-180" />
                ) : (
                  <FaChevronDown className="transition-transform" />
                )}
              </div>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <motion.div
                className="p-6 text-[#2F5D62] text-md leading-relaxed border-t border-[#A7C4BC]"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;

