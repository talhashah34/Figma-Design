import React from 'react'
import product6  from '../assets/products/product6.png'
import circle from '../assets/products/circle.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



const Hero = () => {
  return (
    <>
      <div className='max-w-full h-[316px] mx-[150px] my-[20px] bg-[#212844] 
      rounded-[16px] flex items-center'>
        <div className='flex flex-row justify-between w-full px-[90px]'>
          <div className='w-[574px] h-[156px] my-[40px] space-y-[-4px]'>
            <h3 className='text-[30px] text-white font-sans'>Best Deal Online on smart watches</h3>
            <h1 className='text-[63px] font-bold text-white'>SMART WEARABLE.</h1>
            <h3 className='text-[30px] text-white'>UP to 80% OFF</h3>
          </div>
          <div className="w-[509px] h-[316px] flex items-center justify-end">
            <img src={circle} alt='circle' className='absolute mx-[-90px] rounded-[16px] object-contain' />
            <img
              className='w-[268px] h-[270px] relative z-10 right-[30px]'
              src={product6}
              alt="Product"
            />
            </div>
          <button className='absolute right-[105px] transform translate-y-[105px] 
            rounded-full bg-[#F3F9FB] w-[86px] h-[86px] flex items-center justify-center shadow-lg'>
              <FiChevronRight
              size={24} 
              className='text-primary'
              />
          </button>
          <button className='absolute left-[105px] transform translate-y-[105px] 
            rounded-full bg-[#F3F9FB] w-[86px] h-[86px] flex items-center justify-center shadow-lg'>
              <FiChevronLeft
              size={24} 
              className='text-primary'
              />
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero


{/* <img src={Ellipse29} />
<img src={Ellipse27} /> */}