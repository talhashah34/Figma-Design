import React from 'react'
import { Location, Discount } from 'react-iconly'
import { DeliveryTruck } from 'iconoir-react'

const NavBar = () => {
  return (
    <div className="max-w-full bg-[#F5F5F5] font-sans text-secondary text-[14px]">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row 
        justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2
        py-3 gap-2 md:gap-0"
      >
        {/* LEFT message */}
        <h1 className="text-[#666666] text-center md:text-left text-sm sm:text-[14px]">
          Welcome to worldwide Megamart!
        </h1>

        {/* RIGHT links */}
        <div className="text-[#666666] flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-4">
          {/* Location */}
          <span className="flex items-center gap-2">
            <Location set="two-tone" size={16} className="text-primary" />
            Deliver to <span className="font-bold">423651</span>
          </span>

          <div className="hidden sm:block w-[1px] h-[18px] bg-[#D9D9D9]" />

          {/* Track order */}
          <span className="flex items-center gap-2">
            <DeliveryTruck set="two-tone" size={16} className="text-primary" />
            Track your order
          </span>

          <div className="hidden sm:block w-[1px] h-[18px] bg-[#D9D9D9]" />

          {/* Offers */}
          <span className="flex items-center gap-2">
            <Discount set="two-tone" size={16} className="text-primary" />
            All Offers
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
