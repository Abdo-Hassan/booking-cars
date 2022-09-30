import React from 'react';
import Chart1 from '../assets/cards/chart1.png';
import Chart2 from '../assets/cards/chart2.png';
import Chart3 from '../assets/cards/chart3.png';
import Chart4 from '../assets/cards/chart4.png';
import iconChart1 from '../assets/iconChart1.png';
import iconChart2 from '../assets/iconChart2.png';
import iconChart3 from '../assets/iconChart3.png';
import iconChart4 from '../assets/iconChart4.png';

const Dashboard = () => {
  return (
    <div className='container py-6 px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='flex justify-center flex-col bg-primary-main rounded-2xl py-5'>
          <img
            className='bg-lighten-one w-8 self-center mt-4 rounded-full'
            src={iconChart1}
            alt='iconChart1'
          />
          <h5 className='my-4 text-center font-bold text-2xl text-white'>
            Energy
          </h5>
          <img className='m-auto' src={Chart1} alt='Chart1' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-2xl py-5'>
          <img
            className='bg-lighten-two w-8 self-center mt-4 rounded-full'
            src={iconChart2}
            alt='iconChart2'
          />
          <h5 className='my-4 text-center font-bold text-2xl'>Range </h5>
          <img className='m-auto' src={Chart2} alt='Chart2' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-2xl py-5'>
          <img
            className='bg-lighten-three w-8 self-center mt-4 rounded-full'
            src={iconChart3}
            alt='iconChart3'
          />
          <h5 className='my-4 text-center font-bold text-2xl'>Break fluid</h5>
          <img className='m-auto' src={Chart3} alt='Chart3' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-2xl py-5'>
          <img
            className='bg-lighten-four w-8 self-center mt-4 rounded-full'
            src={iconChart4}
            alt='iconChart4'
          />
          <h5 className='my-4 text-center font-bold text-2xl'>Tire Wear</h5>
          <img className='m-auto' src={Chart4} alt='Chart4' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
