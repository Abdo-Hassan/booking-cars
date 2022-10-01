import React, { useState } from 'react';
import Car1 from '../../assets/cards/car1.png';
import Person from '../../assets/icons/person.svg';
import Favorite from '../../assets/icons/favorite.svg';
import FavoriteDone from '../../assets/icons/favorite-done.svg';
import CarIcon2 from '../../assets/icons/carIcon2.svg';

const CarCard = ({ title, country, users, transmission, rent }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className='bg-white rounded-2xl px-6 py-8'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg font-bold'>{title}</h5>
        {favorite ? (
          <img
            className='cursor-pointer'
            src={FavoriteDone}
            alt='FavoriteDone'
            onClick={() => setFavorite(false)}
          />
        ) : (
          <img
            className='cursor-pointer'
            src={Favorite}
            alt='Favorite'
            onClick={() => setFavorite(true)}
          />
        )}
      </div>
      <h6 className='text-md text-slate-500 font-normal'>{country}</h6>

      <img className='mx-auto my-7' src={Car1} alt='carBrand' />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={Person} alt='users' className='mr-1' />
          <span className='text-slate-500 text-lg font-normal mr-4'>
            {users}
          </span>
          <img src={CarIcon2} alt='transmission' className='mr-2' />
          <span className='text-md text-slate-500 font-normal mr-2'>
            {transmission}
          </span>
        </div>

        <div>
          <span className='text-lg'>${rent}</span>
          <span className='text-lg text-slate-500'>/d</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
