import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({ name, role, imageSrc, children }) => {
  return (
    <div className="flex flex-col items-center text-center select-none group">
      {/* Image / Card Box */}
      <div className="relative w-full aspect-square bg-amber-400 rounded-md overflow-hidden flex items-end justify-center mb-4 shadow-sm">
        {/* Profile Picture Slot */}
        <div className="relative z-10 w-full h-full flex items-end justify-center transition-transform duration-300 group-hover:scale-102">
          {children || (
            <img
              src={imageSrc}
              alt={name}
              className="w-auto h-[92%] object-cover object-bottom"
            />
          )}
        </div>

        {/* Hover Overlay: Darkens bottom part & reveals icons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-5">
          <div className="flex items-center justify-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              <FaLinkedinIn size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Info Block */}
      <h4 className="text-gray-900 font-bold text-lg leading-snug mb-1">
        {name}
      </h4>
      <p className="text-gray-400 text-xs font-medium max-w-[200px]">{role}</p>
    </div>
  );
};

export default TeamCard;
