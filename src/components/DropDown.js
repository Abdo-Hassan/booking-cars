import React, { useState } from 'react';
import ChevronDown from '../assets/icons/chevronDown.svg';

const DropDown = ({ defaultOption, brands, handleFilters }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id='dropdownDefault'
        onClick={() => setOpen(!open)}
        data-dropdown-toggle='dropdown'
        className='mb-4 sm:mb-0 relative text-slate-500 bg-white hover:bg-slate-50 focus:outline-none font-medium rounded-3xl text-sm ltr:mr-3 rtl:ml-6 px-7 py-1.5 text-center inline-flex items-center'
        type='button'>
        <span className='ltr:mr-6 rtl:ml-4 text-lg'>{defaultOption}</span>
        <img src={ChevronDown} alt='ChevronDown' />
      </button>

      {open && (
        <div className='absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg'>
          <div className='p-2'>
            {brands &&
              brands?.length > 0 &&
              brands?.map((brand, i) => (
                <span
                  onClick={() => {
                    setOpen(false);
                    handleFilters(brand);
                  }}
                  key={i}
                  className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                  {brand}
                </span>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DropDown;
