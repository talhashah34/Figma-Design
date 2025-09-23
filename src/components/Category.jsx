import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const Category = () => {
  return (
    <>
    <div className='max-w-full h-[1px] bg-[#EDEDED]'></div>
        <div className='max-w-full h-[69px] bg-white mx-[130px] px-[20px]
        flex flex-cols items-center justify-center font-sans text-white text-[14px] gap-[38px]' >
            <button className='w-[113px] h-[36px] rounded-[18px] bg-[#008ECC] items-center '>
                Groceries
                <FiChevronDown
                size={20}
                className='inline-block ml-1.5'/>
            </button>
            <button className='w-[148px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Premium Fruits
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[153px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Home & Kitchen
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[101px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Fashion
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[121px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Electronics
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[96px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Beauty
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[176px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Home Improvement
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            <button className='w-[195px] h-[36px] text-[#222222] bg-[#F3F9FB] rounded-[18px] items-center'>
                Sports, Toys & Luggage          
                <FiChevronDown
                size={20}
                className='text-[#008ECC] inline-block ml-1.5'/>
            </button>
            
        </div>
    <div className='max-w-full h-[1px] bg-[#EDEDED]'></div>
    </>
  )
}

export default Category
