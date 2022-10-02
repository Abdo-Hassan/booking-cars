import React from 'react';
import Badge from '../../assets/cards/badge.svg';
import Points from '../../assets/cards/points.svg';

const TrophyCard = ({ title, text, points, color, colorText }) => {
  return (
    <div className={`p-7 ${color} rounded-lg`}>
      <div className='flex text-white items-start justify-between'>
        <h5 className='font-bold text-2xl leading-normal w-1/5'>
          You have earned{' '}
          <span className={`${colorText} text-3xl sm:text-5xl block`}>
            {points}
          </span>
          {title}!
        </h5>

        <img
          className='w-36'
          src={title === 'Badges' ? Badge : Points}
          alt='trophyPic'
        />
      </div>

      <h6 className={`${colorText} font-normal`}>{text}</h6>
    </div>
  );
};

export default TrophyCard;
