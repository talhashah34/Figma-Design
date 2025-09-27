import React from 'react'
import product6 from '../assets/products/product6.png'
import circle from '../assets/products/circle.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="container mx-auto px-4 my-8"> 
      <div className="relative bg-[#212844] rounded-2xl overflow-visible xl:mx-[120px]"> 
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between
                        py-8 px-6 lg:px-12 xl:items-start">
          
          {/* LEFT TEXT */}
          <div className="max-w-lg text-center lg:text-left text-white ">
            <h3 className="text-base sm:text-lg lg:text-2xl font-sans mb-2">
              Best Deal Online on smart watches
            </h3>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2 xl:whitespace-nowrap">
              SMART WEARABLE.
            </h1>

            <h3 className="text-base sm:text-lg lg:text-xl mb-6">
              UP to 80% OFF
            </h3>

            {/* dots - positioned absolutely */}
            <div
              className="
                flex items-center gap-2 mt-4 justify-center
                lg:justify-start
                absolute bottom-[30px] left-1/2 -translate-x-1/2
                lg:left-[80px] lg:translate-x-0
              "
            >
              <span className="bg-white w-6 h-2 rounded-full"></span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
              </div> 
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full flex items-center justify-center">
              {/* circle stays behind, scales responsively */}
              <img
                src={circle}
                alt="decor"
                className="w-[70%] max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain opacity-90"
              />

              {/* product stays in front, centered */}
              <img
                src={product6}
                alt="product"
                className="absolute w-[40%] max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] object-contain xl:max-w-[270px] xl:h-[268px]"
              />
            </div>
          </div>
        </div>

        {/* chevrons */}
        <button
          aria-label="prev"
          className="absolute -left-[28px] top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F3F9FB] 
                     xl:w-[86px] xl:h-[86px] xl:absolute -left-[35px] flex items-center justify-center shadow-lg"
        >
          <FiChevronLeft size={24} className="text-primary" />
        </button>

        <button
          aria-label="next"
          className="absolute -right-[28px] top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F3F9FB] xl:w-[86px] 
                     xl:h-[86px] xl:absolute -right-[35px] flex items-center justify-center shadow-lg"
        >
          <FiChevronRight size={24} className="text-primary" />
        </button>
      </div>
    </div>
  )
}

export default Hero
