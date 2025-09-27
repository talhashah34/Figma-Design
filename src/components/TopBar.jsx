import React from 'react'
import { Search, Buy } from 'react-iconly'
import { FiList, FiUser } from 'react-icons/fi'
import MegaMart from '../assets/products/MegaMart.png'

const TopBar = () => {
  return (
    <div className="max-w-full bg-white border-b">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between
        px-4 sm:px-6 md:px-8 lg:px-12 py-4 xl:px-2"
      >
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger menu */}
          <div className="w-12 h-12 bg-[#F3F9FB] rounded-lg flex flex-col justify-center items-start gap-2 px-2 cursor-pointer">
            <span className="w-6 h-[2px] bg-primary rounded-sm"></span>
            <span className="w-5 h-[2px] bg-primary rounded-sm"></span>
            <span className="w-4 h-[2px] bg-primary rounded-sm"></span>
          </div>

          {/* Logo */}
          <img
            className="w-28 sm:w-32 md:w-36 h-auto xl:mr-32"
            src={MegaMart}
            alt="MegaMart Logo"
          />
        </div>

        {/* Middle: Search */}
        <div
          className="hidden md:flex flex-1 max-w-xl h-12 bg-[#F3F9FB] 
          rounded-lg items-center justify-between px-4 mx-6 text-sm"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <Search
              set="two-tone"
              size={18}
              className="text-primary"
              secondaryColor="#008ECC"
            />
            <span className="truncate">
              Search essentials, groceries and more...
            </span>
          </div>
          <FiList size={22} className="text-primary" />
        </div>

        {/* Right: User + Cart */}
        <div className="flex items-center gap-4 text-sm">
          {/* Sign In */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <FiUser size={22} className="text-primary" />
            <span className="font-bold hidden sm:inline">Sign Up/Sign In</span>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-[#D9D9D9]" />

          {/* Cart */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <Buy
              set="two-tone"
              size={22}
              className="text-primary"
              secondaryColor="#008ECC"
            />
            <span className="font-bold hidden sm:inline">Cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
