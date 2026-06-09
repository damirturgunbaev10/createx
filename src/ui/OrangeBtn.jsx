import React from "react";
import { Link } from "react-router-dom";

const OrangeBtn = ({ children, className = "", link, ...props }) => {
  const baseClasses = `
    bg-[linear-gradient(55.95deg,#FF3F3A_0%,#F75E05_100%)] 
    text-white 
    px-4 
    py-2 
    rounded-[4px]
    font-semibold
    inline-flex items-center justify-center
    transition-all 
    duration-300 
    ease-in-out
    hover:brightness-150 
    hover:shadow-md
    active:scale-[0.95]
    select-none
    ${className}
  `;

  if (link) {
    return (
      <Link to={link} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default OrangeBtn;
