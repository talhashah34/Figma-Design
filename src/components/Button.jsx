import React from 'react'
import { FiChevronDown } from 'react-icons/fi';


const Button = ({ label, active= false, width}) => {
  return (
    <div>
      <button className={`w-[${width}] h-[36px] rounded-[18px] 
      ${active ? 'bg-[#008ECC] text-white' : 'bg-[#F3F9FB] text-[#222222]'} items-center`}>
        {label}
        <FiChevronDown
          size={20}
          className={`inline-block ml-1.5 ${active ? 'text-white' : 'text-[#008ECC]'}`}
        />
      </button>
    </div>
  )
}

export default Button
