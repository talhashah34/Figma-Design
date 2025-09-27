import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const Button = ({ label, active = false, size = "md" }) => {
  // map size prop to Tailwind classes
  const sizeClasses = {
    sm: "h-8 text-xs px-3",        // small screens
    md: "h-9 text-sm px-4",        // default
    lg: "h-10 text-base px-6",     // large screens
  };

  return (
    <button
      className={`
        rounded-full flex items-center justify-center whitespace-nowrap
        ${sizeClasses[size]}
        ${active ? "bg-[#008ECC] text-white" : "bg-[#F3F9FB] text-[#222222]"}
      `}
    >
      {label}
      <FiChevronDown
        size={18}
        className={`ml-1.5 ${active ? "text-white" : "text-[#008ECC]"}`}
      />
    </button>
  );
};

export default Button;
