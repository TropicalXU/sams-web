import React from "react";
import { motion } from 'framer-motion';
import { textVariant2 } from "@/utils/motion"

type TitleProps = {
    title: React.ReactNode;
    textStyles: string;

};

type HeaderProps = {
    title: React.ReactNode;
    textStyles: string;
}

export const TitleText: React.FC<TitleProps>  = ({ title, textStyles }) => (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const HeaderText: React.FC<HeaderProps> = ({ title, textStyles }) => (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[42px] 
    text-[34px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
