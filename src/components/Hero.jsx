import React from 'react'
import product6  from '../assets/products/product6.png'
import circle from '../assets/products/circle.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <>
      <div className='max-w-full h-[19.75rem] mx-[9.375rem] my-[1.25rem] bg-[#212844] 
      rounded-[1rem] flex items-center'>
        <div className='flex flex-row justify-between w-full px-[5.625rem]'>
          <div className='w-[35.875rem] h-[9.75rem] my-[2.5rem] space-y-[-0.25rem]'>
            <h3 className='text-[1.875rem] text-white font-sans'>Best Deal Online on smart watches</h3>
            <h1 className='text-[3.9375rem] font-bold text-white'>SMART WEARABLE.</h1>
            <h3 className='text-[1.875rem] text-white'>UP to 80% OFF</h3>
            <div className='w-[7.125rem] h-[0.5rem] flex items-center py-[4rem] space-x-[0.375rem]'>
              <span className='bg-white w-[1.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
              <span className='bg-white w-[0.5rem] h-[0.5rem] rounded-[0.4375rem]'></span>
            </div>
          </div>
          <div className="w-[31.8125rem] h-[19.75rem] flex items-center justify-end">
            <img src={circle} alt='circle' className='absolute mx-[-5.625rem] rounded-[1rem] object-contain' />
            <img
              className='w-[16.75rem] h-[16.875rem] relative z-10 right-[1.875rem]'
              src={product6}
              alt="Product"
            />
          </div>
          <button className='absolute right-[6.5625rem] translate-y-[6.5625rem] 
            rounded-full bg-[#F3F9FB] w-[5.375rem] h-[5.375rem] flex items-center justify-center shadow-lg'>
              <FiChevronRight size={24} className='text-primary' />
          </button>
          <button className='absolute left-[6.5625rem] translate-y-[6.5625rem] 
            rounded-full bg-[#F3F9FB] w-[5.375rem] h-[5.375rem] flex items-center justify-center shadow-lg'>
              <FiChevronLeft size={24} className='text-primary' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
