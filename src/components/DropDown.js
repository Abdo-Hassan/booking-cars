import React, { useState } from 'react';
import ChevronDown from '../assets/icons/chevronDown.svg';

const DropDown = ({ type, defaultOption, data, toggleLanguage }) => {
  const [openCarBrands, setOpenCarBrands] = useState(false);
  const [openCarTransmission, setOpenCarTransmission] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <>
      <button
        id='dropdownDefault'
        onClick={() =>
          type === 'carsBrand'
            ? () => setOpenCarBrands(!openCarBrands)
            : type === 'carsTransmission'
            ? () => setOpenCarTransmission(!openCarTransmission)
            : () => setOpenLanguage(!openLanguage)
        }
        data-dropdown-toggle='dropdown'
        className='mb-4 sm:mb-0 relative text-slate-500 bg-white hover:bg-slate-50 focus:outline-none font-medium rounded-3xl text-sm ltr:mr-3 rtl:ml-3 px-7 py-1.5 text-center inline-flex items-center'
        type='button'>
        <span className='ltr:mr-6 rtl:ml-4 text-lg'>{defaultOption}</span>
        <img src={ChevronDown} alt='ChevronDown' />
      </button>

      {/*  openLanguage && (
            <div className='absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg'>
              <div className='p-2'>
                <span
                  onClick={() => {
                    toggleLanguage('English');
                    setOpenLanguage(!openLanguage);
                  }}
                  className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                  English
                </span>
                <span
                  onClick={() => {
                    toggleLanguage('Arabic');
                    setOpenLanguage(!openLanguage);
                  }}
                  className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                  Arabic
                </span>
              </div>
            </div>
          ) 

      {/* <div className='absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg'>
              <div className='p-2'>
                {brands &&
                  brands?.length > 0 &&
                  brands?.map((brand) => (
                    <span
                      key={brand?.id}
                      onClick={() => {
                        setOpenCarBrands(!openCarBrands);
                      }}
                      className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                      {brand?.name}
                    </span>
                  ))}
              </div>
            </div> */}
    </>
  );
};

export default DropDown;
