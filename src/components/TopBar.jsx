import React from 'react'

import MegaMart from '../assets/products/MegaMart.png';

const TopBar = () => {
  return (
    <div className='flex flex-row items-center max-w-[1440px] max-h-[90px] mx-[120px] my-[42px] '>
      <div className='w-[48px] h-[48px] bg-[#F3F9FB] rounded-[10px] 
      flex flex-col justify-center items-start 
      gap-[9px] px-[11px]'>
        <span className='w-[26px] h-[2px] bg-primary rounded-sm'></span>
        <span className='w-[19px] h-[2px] bg-primary rounded-sm'></span>
        <span className='w-[13px] h-[2px] bg-primary rounded-sm'></span>
      </div>
      <img className='w-[138px] h-[28px] ' src={MegaMart} alt='MegaMart Logo' />
      
    </div>
  )
}

export default TopBar
