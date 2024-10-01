import React from 'react'

const Button = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
} : {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-transform"
        onClick={handleClick}
      >
  
        {/* remove px-3 py-1, add px-5 gap-2 */}
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-[#2F5D62] px-7 text-lg font-bold text-white backdrop-blur-3xl gap-2 `}
        >
        
          {title}
    
        </span>
      </button>
    )
}

export default Button