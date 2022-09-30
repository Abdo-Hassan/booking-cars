/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Dashboard from './Dashboard';

const Sidebar = () => {
  return (
    <div className='w-60  h-screen shadow-md bg-white px-1'>
      <ul className='relative'>
        <li className='relative'>
          <a
            className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
            href='#!'
            data-mdb-ripple='true'
            data-mdb-ripple-color='dark'>
            Sidenav link 1
          </a>
        </li>
        <li className='relative'>
          <a
            className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
            href='#!'
            data-mdb-ripple='true'
            data-mdb-ripple-color='dark'>
            Sidenav link 2
          </a>
        </li>
        <li className='relative'>
          <a
            className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
            href='#!'
            data-mdb-ripple='true'
            data-mdb-ripple-color='dark'>
            Sidenav link 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
