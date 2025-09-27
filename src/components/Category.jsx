import React from 'react';
import Button from './Button';

const Category = () => {
  return (
    <>
      {/* Top Divider */}
      <div className="w-full h-[1px] bg-[#EDEDED]"></div>

      {/* Category Buttons */}
      <div
        className="
          w-full bg-white 
          px-4 md:px-8 lg:px-[130px] 
          py-3 md:py-4 
          xl:gap-[20px]
          flex flex-wrap gap-3 md:gap-6 lg:gap-[34px] 
          items-center justify-center font-sans
        "
      >
        <Button label="Groceries" active width="auto" />
        <Button label="Premium Fruits" width="auto" />
        <Button label="Home & Kitchen" width="auto" />
        <Button label="Fashion" width="auto" />
        <Button label="Electronics" width="auto" />
        <Button label="Beauty" width="auto" />
        <Button label="Home Improvement" width="auto" />
        <Button label="Sport, Toys & Luggage" width="auto" />
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-[1px] bg-[#EDEDED]"></div>
    </>
  );
};

export default Category;
