import React, { useState } from 'react';
import Person from '../../assets/icons/person.svg';
import Favorite from '../../assets/icons/favorite.svg';
import FavoriteDone from '../../assets/icons/favorite-done.svg';
import CarIcon2 from '../../assets/icons/carIcon2.svg';

const CarCard = ({ name, country, users, transmission, rent, image }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className='bg-white rounded-2xl px-6 py-8'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg font-bold'>{name}</h5>
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

      <img className='mx-auto my-7' src={image} alt='carBrand' />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={Person} alt='users' className='ltr:mr-1 rtl:ml-1' />
          <span className='text-slate-500 text-lg font-normal ltr:mr-4 rtl:ml-4'>
            {users}
          </span>
          <img
            src={CarIcon2}
            alt='transmission'
            className='ltr:mr-2 rtl:ml-2'
          />
          <span className='text-md text-slate-500 font-normal ltr:mr-2 rtl:ml-2'>
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
