import React from 'react';
import CarCard from '../components/CarsSection/CarCard';
import DropDown from '../components/DropDown';

const Booking = () => {
  return (
    <div className='p-8'>
      <h6 className='text-3xl mb-8'>Booking</h6>

      {/* filter card */}
      <DropDown title='New' />
      <DropDown title='Toyota' />

      {/* list of cars */}
      <div className='container py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <CarCard
            title='Porshe 718 Cayman S'
            country='Coupe'
            users={4}
            transmission='Manual'
            rent='400'
          />
          <CarCard
            title='Porshe 718 Cayman S'
            country='Coupe'
            users={4}
            transmission='Manual'
            rent='400'
          />
          <CarCard
            title='Porshe 718 Cayman S'
            country='Coupe'
            users={4}
            transmission='Manual'
            rent='400'
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
