import React from 'react';
import Logo from '../assets/logo.png';
import CarIcon from '../assets/icons/sidebar-car.png';
import DashboardIcon from '../assets/icons/sidebar-dashboard.png';
import SettingsIcon from '../assets/icons/settings.png';
import Logout from '../assets/icons/logout.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-72 h-screen bg-white px-4 mr-0.5'>
      <div className='flex items-center px-3'>
        <img src={Logo} alt='logo' className='mr-3' />
        <h6 className='font-bold text-2xl py-4'>Motiv.</h6>
      </div>

      <ul className='relative flex flex-col h-5/6'>
        <div>
          <li className='relative'>
            <Link
              to='/'
              className='flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
              href='#!'
              data-mdb-ripple='true'
              data-mdb-ripple-color='dark'>
              <img src={DashboardIcon} alt='Dashboard' className='mr-3' />
              Dashboard
            </Link>
          </li>

          <li className='relative'>
            <Link
              to='/cars'
              className='flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
              href='#!'
              data-mdb-ripple='true'
              data-mdb-ripple-color='dark'>
              <img src={CarIcon} alt='CarIcon' className='mr-3' />
              Cars
            </Link>
          </li>
        </div>

        <div className='mt-auto'>
          <li className='relative'>
            <a
              className='flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
              href='#!'
              data-mdb-ripple='true'
              data-mdb-ripple-color='dark'>
              <img src={SettingsIcon} alt='SettingsIcon' className='mr-3' />
              Settings
            </a>
          </li>
          <li className='relative'>
            <a
              className='flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
              href='#!'
              data-mdb-ripple='true'
              data-mdb-ripple-color='dark'>
              <img src={Logout} alt='Logout' className='mr-3' />
              Log out
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
