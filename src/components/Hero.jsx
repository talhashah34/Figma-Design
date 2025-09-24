import React from 'react'
import product6  from '../assets/products/product6.png'
import Ellipse27 from '../assets/products/Ellipse27.svg'
import Ellipse28 from '../assets/products/Ellipse28.svg'
import Ellipse29 from '../assets/products/Ellipse29.svg'
import Ellipse30 from '../assets/products/Ellipse30.svg'



const Hero = () => {
  return (
    <>
      <div className='max-w-full h-[316px] mx-[150px] my-[20px] bg-[#212844] 
      rounded-[16px] flex items-center'>
        <div className='flex flex-row justify-between w-full px-[90px]'>
          <div>
            <h3 className='text-[30px] text-white font-sans'>Best Deal Online on smart watches</h3>
            <h1 className='text-[63px] font-bold text-white'>SMART WEARABLE.</h1>
            <h3 className='text-[30px] text-white'>UP to 80% OFF</h3>
          </div>
          <div className="w-[268px] h-[270px]">
            <img src={Ellipse27} className='my-[-22px]'/>

            <img
              className='relative top-[-50px]'
              src={product6}
              alt="Product"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero


{/* <img src={Ellipse29} />
<img src={Ellipse27} /> */}