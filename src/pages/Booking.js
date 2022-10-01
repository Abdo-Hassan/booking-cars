import React, { useState } from 'react';
import CarCard from '../components/CarsSection/CarCard';
import DropDown from '../components/DropDown';
import axios from 'axios';
import DashboardIcon from '../assets/icons/sidebar-dashboard.svg';
import FilterIcon from '../assets/icons/filter.svg';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/Loading';
import Search from '../components/Search';

const Booking = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const fetchCars = async () => {
    try {
      return await (
        await axios.get(
          'https://run.mocky.io/v3/559748e8-6167-4447-8736-122b0744cc01'
        )
      ).data;
    } catch (error) {
      console.log('~ error', error);
    }
  };

  const { data: cars, isLoading } = useQuery(['fetchCars'], fetchCars, {
    refetchOnWindowFocus: false,
  });

  let filteredCars =
    cars &&
    cars?.length > 0 &&
    cars?.filter((car) => {
      return (
        car?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        car?.brand?.toLowerCase().includes(searchValue.toLowerCase()) ||
        car?.country?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  return (
    <div className='p-8'>
      <h6 className='text-3xl mb-10'>Booking</h6>

      {/* filter card */}
      <div className='flex items-center'>
        <div>
          <DropDown title='New' />
          <DropDown title='Toyota' />
        </div>
        <div className='relative'>
          <Search
            type='cars'
            placeholder='Search for a car'
            handleSearch={handleSearch}
            searchValue={searchValue}
          />
        </div>

        <div className='flex items-center ltr:ml-auto rtl:mr-auto'>
          <img
            className='bg-white cursor-pointer p-3 rounded-full ltr:mr-3 rtl:ml-3'
            src={DashboardIcon}
            alt='DashboardIcon'
          />
          <img className='cursor-pointer' src={FilterIcon} alt='FilterIcon' />
        </div>
      </div>

      {/* list of cars */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className='container py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCars && filteredCars?.length > 0 ? (
              filteredCars?.map((car, i) => (
                <CarCard
                  key={i}
                  name={car?.name}
                  country={car?.country}
                  users={car?.users}
                  rent={car?.rent}
                  image={car?.image}
                  transmission={car?.transmission}
                />
              ))
            ) : (
              <div className='bg-white'>
                <span>No cars to display</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
