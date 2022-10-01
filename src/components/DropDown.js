import React from 'react';
import ChevronDown from '../assets/icons/chevronDown.svg';

const DropDown = ({ title }) => {
  return (
    <>
      <button
        id='dropdownDefault'
        data-dropdown-toggle='dropdown'
        className='text-slate-500 bg-white hover:bg-slate-50 focus:outline-none font-medium rounded-2xl text-sm mr-3 px-7 py-1.5 text-center inline-flex items-center'
        type='button'>
        <span className='mr-3 text-lg'>{title}</span>
        <img src={ChevronDown} alt='ChevronDown' />
      </button>
      <div
        id='dropdown'
        className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
        style={{
          position: 'absolute',
          inset: '0px auto auto 0px',
          margin: 0,
          transform: 'translate(0px, 510px)',
        }}
        data-popper-reference-hidden=''
        data-popper-escaped=''
        data-popper-placement='bottom'>
        <ul
          className='py-1 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefault'>
          <li>
            <a
              href='#'
              className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              Settings
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              Earnings
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
