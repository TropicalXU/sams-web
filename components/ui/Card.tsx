'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type CardProps = {
    image: StaticImageData;
    title: string;
    id: number;
    icon: string;
   
};

export const Card: React.FC<CardProps> = ({image, title, icon }) => {
    return (
      <div className='mt-[30px] mx-5 p-5'>
        <h1 className='text-[28px] pb-4'>{icon}</h1>
        <p className='uppercase font-semibold text-[#2F5D62] pb-4'>{title}</p>
        {/* <Image className='w-[150px] text-white h-[180px] pb-12' src={image} alt={title} /> */}
      </div>
    );
  };
  