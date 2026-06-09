import React from "react";
import { User } from "lucide-react";

const AuthLink = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#424551] hover:text-[#FF3F3A] font-semibold transition-colors duration-300 bg-transparent border-none cursor-pointer"
    >
      <User size={20} strokeWidth={2} />

      {/* Текст ссылки */}
      <span className="text-base leading-6">Log in / Register</span>
    </button>
  );
};

export default AuthLink;
