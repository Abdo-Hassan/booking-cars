import React from 'react';
import Chart1 from '../assets/chart1.png';
import Chart2 from '../assets/chart2.png';
import Chart3 from '../assets/chart3.png';
import Chart4 from '../assets/chart4.png';

const Dashboard = () => {
  return (
    <div className='container m-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='flex justify-center flex-col bg-primary-main rounded-xl'>
          <h5 className='my-6 text-center font-bold text-white'>Energy</h5>
          <img className='m-auto' src={Chart1} alt='Chart1' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-xl'>
          <h5 className='my-6 text-center font-bold'>Range </h5>
          <img className='m-auto' src={Chart2} alt='Chart2' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-xl'>
          <h5 className='my-6 text-center font-bold'>Break fluid</h5>
          <img className='m-auto' src={Chart3} alt='Chart3' />
        </div>

        <div className='flex justify-center flex-col bg-white rounded-xl'>
          <h5 className='my-6 text-center font-bold'>Tire Wear</h5>
          <img className='m-auto' src={Chart4} alt='Chart4' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
