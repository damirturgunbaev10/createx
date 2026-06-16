import React from "react";
import { User } from "lucide-react";
import { RiUser3Line } from "react-icons/ri";

const AuthLink = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#424551] hover:text-[#FF3F3A] font-semibold transition-colors duration-300 bg-transparent border-none cursor-pointer"
    >
      <RiUser3Line size={24} />

      <span className="text-base leading-6">Log in / Register</span>
    </button>
  );
};

export default AuthLink;
