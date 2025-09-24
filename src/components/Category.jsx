import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

import Button from './Button';

const Category = () => {
  return (
    <>
    <div className='max-w-full h-[1px] bg-[#EDEDED]'></div>
        <div className='max-w-full h-[69px] bg-white mx-[130px] px-[20px]
        flex items-center justify-center font-sans text-white text-[14px] gap-[34px]' >
            <Button width='113px' label='Groceries' active= 'true'/>
            <Button width='148px' label='Premium Fruits' />
            <Button width='153px' label='Home & Kitchen' />
            <Button width='101px' label='Fashion' />
            <Button width='121px' label='Electronics' />
            <Button width='96px' label='Beauty' />
            <Button width='176px' label='Home Improvement' />
            <Button width='195px' label='Sport, Toys & Luggage' />
        </div>
    <div className='max-w-full h-[1px] bg-[#EDEDED]'></div>
    </>
  )
}

export default Category
