import React from 'react';
import Person from '../assets/person.svg';
import Notification from '../assets/icons/notification.svg';
import LanguageSelect from './LanguageSelect';
import Search from './Search';

const TopBar = ({ language, toggleLanguage }) => {
  return (
    <div className='bg-white py-4 pl-6 sm:pl-0 px-6'>
      <div className='relative block sm:flex justify-between'>
        <Search type='TopBar' placeholder='Search or type' />

        <div className='flex items-center justify-center sm:justify-end'>
          {/* switch language */}
          <LanguageSelect language={language} toggleLanguage={toggleLanguage} />

          <img
            src={Notification}
            alt='notification'
            className='hidden sm:block m-3 cursor-pointer'
          />
          <img
            src={Person}
            alt='person'
            className='hidden sm:block rounded-full cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
