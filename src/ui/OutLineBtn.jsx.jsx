import React from "react";

const OutlineBtn = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        bg-transparent 
        text-[#FF3F3A] 
        border border-[#FF3F3A] 
        rounded-[4px] 
        font-semibold
        flex items-center justify-center
        transition-all duration-300
        hover:bg-[linear-gradient(55.95deg,#FF3F3A_0%,#F75E05_100%)]
        hover:text-white
        hover:border-transparent
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineBtn;
