import React from 'react'
import { Location, Discount } from 'react-iconly'
import { DeliveryTruck } from 'iconoir-react'


const NavBar = () => {
  return (
    <div className='max-w-[1440px] max-h-[42px] mx-auto bg-[#F5F5F5]
     flex flex-col md:flex-row 
     justify-between items-center font-sans 
     text-secondary text-[14px] px-[120px] py-[14px] md:px-8 m-3 gap-2 md:gap-0'>
       <h1 className=' text-[#666666] w-[214px]'>Welcome to worldwide Megamart!</h1> 
       <div className=' text-[#666666] flex space-x-6'>
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
