import React from 'react';

const Search = ({ type, placeholder, handleSearch, searchValue }) => {
  return (
    <div className='flex items-center w-full sm:w-auto'>
      <div
        className={`flex relative sm:top-1 -top-1 ltr:left-12 rtl:right-28 z-10`}>
        <svg
          aria-hidden='true'
          className='w-5 h-5 text-gray-500 dark:text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
        </svg>
      </div>
      <input
        type='search'
        id='search'
        value={type === 'cars' ? searchValue : undefined}
        onChange={
          type === 'cars' ? (e) => handleSearch(e.target.value) : undefined
        }
        className='relative ltr:left-4 rtl:left-8 top-1 focus:outline-none border-none mb-4 sm:mb-0 block p-4 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeholder}
        required=''
      />
    </div>
  );
};

export default Search;
