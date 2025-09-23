import React from 'react'
import { Location, Discount } from 'react-iconly'
import { DeliveryTruck } from 'iconoir-react'


const NavBar = () => {
  return (
    <div className='max-w-full max-h-[42px] mx-auto bg-[#F5F5F5]
     flex flex-row md:flex-row 
     justify-between items-center font-sans 
     text-secondary text-[14px] px-[120px] py-[14px] md:px-8 gap-2 md:gap-0'>
       <h1 className=' text-[#666666] w-[214px] mx-[120px]'>Welcome to worldwide Megamart!</h1> 
       <div className=' text-[#666666] flex gap-4 mr-[120px]'>
         <span className='items-center flex gap-2'>
           <Location 
             set='two-tone'
             size={16}
             className='text-primary '
             />
         Deliver to <span className="font-bold">423651 </ span>
         </ span>
         <div className='w-[1px] h-[18px] bg-[#D9D9D9]'></div>
         <span className='items-center flex gap-2'>
           <DeliveryTruck
             size={16}
             set='two-tone'
             className='text-primary'
             />
           Track your order </span>
         <div className='w-[1px] h-[18px] bg-[#D9D9D9]'></div>
         <span className='items-center flex gap-2'>
           <Discount 
             set='two-tone'
             size={16}
             className='text-primary'
             />
           All Offers
         </ span>
         </div>
    </div>
  )
}

export default NavBar
