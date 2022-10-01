import React from 'react';

const CarCard = ({ title }) => {
  return (
    <div className='bg-white rounded-lg p4'>
      <h6 className='text-2xl'>{title}</h6>
    </div>
  );
};

export default CarCard;
