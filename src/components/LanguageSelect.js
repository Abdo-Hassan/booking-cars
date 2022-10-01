import React, { useState } from 'react';
import ChevronDown from '../assets/icons/chevronDown.svg';

const LanguageSelect = ({ language, toggleLanguage }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='inline-flex bg-white border rounded-md'>
      <span className='px-4 py-2 text-sm text-gray-600 rounded-l-md'>
        {language}
      </span>

      <div className='relative'>
        <button
          onClick={() => setOpen(!open)}
          type='button'
          className='inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50'>
          <img src={ChevronDown} alt='ChevronDown' />
        </button>
        {open && (
          <div className='absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg'>
            <div className='p-2'>
              <span
                onClick={() => {
                  toggleLanguage('English');
                  setOpen(!open);
                }}
                className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                English
              </span>
              <span
                onClick={() => {
                  toggleLanguage('Arabic');
                  setOpen(!open);
                }}
                className='cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
                Arabic
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelect;
