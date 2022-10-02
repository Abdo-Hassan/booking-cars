import React from 'react';
import Desk from '../../assets/cards/desk.svg';
import TrophyCard from './TrophyCard';

const Trophies = () => {
  return (
    <div className='grid grid-cols-4 sm:grid-cols-4 gap-4 px-6 py-6'>
      <div className='col-span-4 py-6 sm:py-0 sm:col-span-2 bg-lighten-eight px-6 flex items-center justify-between rounded-lg'>
        <div>
          <h4 className='font-bold text-xl sm:text-3xl mb-2'>
            Apply for a car loan !
          </h4>
          <h6 className='text-md font-normal mb-6'>
            This is a sample of a generated text
          </h6>
          <button className='bg-lighten-nine py-3 px-3 text-sm sm:px-6 text-white rounded-md'>
            Discover More
          </button>
        </div>

        <div>
          <img className='w-64' src={Desk} alt='desk' />
        </div>
      </div>
      <div className='col-span-4 sm:col-span-1'>
        <TrophyCard
          title='Badges'
          text='Hooray! Way to go Mohammed!'
          points={20}
          color='bg-lighten-nine'
          colorText='text-lighten-twelve'
        />
      </div>
      <div className='col-span-4 sm:col-span-1'>
        <TrophyCard
          title='Points'
          text='Redeem and claim your rewards!'
          points={1500}
          color='bg-lighten-ten'
          colorText='text-lighten-eleven'
        />
      </div>
    </div>
  );
};

export default Trophies;
