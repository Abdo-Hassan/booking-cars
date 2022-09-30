import React from 'react';

import HomeCars from './CarsSection/HomeCars';
import Charts from './Charts';

const Dashboard = () => {
  return (
    <>
      <Charts />
      <div className='container py-6 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <HomeCars
            percentage='64'
            name='Mini Cooper'
            number={1}
            price='32/h'
            retweets='132K'
            color='bg-lighten-five'
          />
          <HomeCars
            percentage='74'
            name='Porsche 911 Carrera'
            number={2}
            price='28/h'
            retweets='130K'
            color='bg-lighten-six'
          />
          <HomeCars
            percentage='74'
            name='Porsche 911 Carrera'
            number={3}
            price='28/h'
            retweets='130K'
            color='bg-lighten-seven'
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
