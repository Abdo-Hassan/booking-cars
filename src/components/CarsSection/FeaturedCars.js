import React from 'react';
import CarIcon1 from '../../assets/icons/carIcon1.svg';
import CarIcon2 from '../../assets/icons/carIcon2.svg';
import CarIcon3 from '../../assets/icons/carIcon3.svg';
import CarIcon4 from '../../assets/icons/carIcon4.svg';
import Car1 from '../../assets/cards/cars/car1.svg';
import Car2 from '../../assets/cards/cars/car2.svg';
import Car3 from '../../assets/cards/cars/car3.svg';

const FeaturedCars = ({ percentage, name, number, price, retweets, color }) => {
  return (
    <div className={`rounded-2xl p-6 ${color} flex flex-col`}>
      {/* car recommend */}
      <div className='flex items-center mb-4'>
        <img src={CarIcon1} alt='CarIcon1' className='ltr:mr-3 rtl:ml-3' />
        <span className='text-lg font-bold'>{percentage}% Recommend</span>
      </div>

      <img
        className='h-36'
        src={number === 1 ? Car1 : number === 2 ? Car2 : Car3}
        alt='Car1'
      />

      {/* car details */}
      <div className='mb-3 mt-3'>
        <span className='text-xl font-bold '>{name}</span>
      </div>
      <div className='flex items-center '>
        <img src={CarIcon2} alt='CarIcon2' className='ltr:mr-3 rtl:ml-3' />
        <span className='text-sm text-slate-500 ltr:mr-3 rtl:ml-3'>
          {retweets}
        </span>
        <img src={CarIcon3} alt='CarIcon3' className='ltr:mr-3 rtl:ml-3' />
        <img src={CarIcon4} alt='CarIcon4' className='ltr:mr-3 rtl:ml-3' />
        <span className='text-sm ltr:ml-auto rtl:mr-auto text-slate-500'>
          ${price}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCars;
