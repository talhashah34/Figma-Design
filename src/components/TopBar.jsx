import React from 'react'
import { Search, Buy } from 'react-iconly';
import { FiList, FiUser } from 'react-icons/fi';

import MegaMart from '../assets/products/MegaMart.png';

const TopBar = () => {
  return (
    <div className='flex flex-row items-center max-w-full max-h-[90px] 
    mx-[130px] py-[42px] text-sans text-secondary'>
      <div className='w-[48px] h-[48px] bg-[#F3F9FB] rounded-[10px] 
      flex flex-col justify-center items-start 
      gap-[9px] px-[11px] mx-[20px]'>
        <span className='w-[26px] h-[2px] bg-primary rounded-sm'></span>
        <span className='w-[19px] h-[2px] bg-primary rounded-sm'></span>
        <span className='w-[13px] h-[2px] bg-primary rounded-sm'></span>
      </div>
      <img className='w-[138px] h-[28px] my-[73px]' src={MegaMart} alt='MegaMart Logo' />
      <div className='w-[542px] h-[48px] bg-[#F3F9FB] text-[14px] rounded-[10px] mx-auto
      flex flex-row items-center justify-between px-[18px] mr-[65px]
      '>
        <div className='flex items-center gap-2'>
        <Search
        set='two-tone'
        size={18}
        className='text-primary'
        secondaryColor='#008ECC'
        />
          <span>Search essentials, groceries and more...</span>
        </div>
          <FiList
          size={26}
          className='text-primary '
          />
      </div>
      <div className='w-[241px] h-[24px] flex flex-row justify-center items-center text-[16px] mr-[25px]
      '>
        {/* <div className='flex flex-row gap-2 justify-center items-center w-full ml-auto'> */}
        <div className='flex gap-2 w-[159px] h-[24px]'>
        <FiUser
        size={32}
        className='text-primary w-[24px] h-[24px]'
        />
        <span className='font-bold'>Sign Up/Sign In</span>
        </div>
        <div className='w-[1px] h-[24px] bg-[#D9D9D9] items-center mx-[10px]'></div>
        <div className='flex gap-2 w-[62px] h-[24px] mr-auto'>
        <Buy
        set='two-tone'
        size={32}
        className='text-primary w-[24px] h-[24px]'
        secondaryColor='#008ECC'
        />
        <span className='font-bold'>Cart</span>
        </div>
        {/* </div> */}
      </div>

    </div>
  )
}

export default TopBar
