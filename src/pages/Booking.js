import React, { useState } from 'react';
import CarCard from '../components/CarsSection/CarCard';
import DropDown from '../components/DropDown';
import axios from 'axios';
import DashboardIcon from '../assets/icons/sidebar-dashboard.svg';
import FilterShowIcon from '../assets/icons/filterShow.svg';
import FilterHiddenIcon from '../assets/icons/filterHidden.svg';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/Loading';
import Search from '../components/Search';

let brands = ['mercedes', 'audi', 'toyota', 'renault'];
let transmission = ['auto', 'manual'];

const Booking = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showFilters, setShowFilters] = useState(true);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const fetchCars = async () => {
    try {
      return await (
        await axios.get('https://testapi.io/api/abdohassan/cars')
      ).data;
    } catch (error) {
      console.log('~ error', error);
    }
  };

  const { data: cars, isLoading: carsLoading } = useQuery(
    ['fetchCars'],
    fetchCars,
    {
      refetchOnWindowFocus: false,
    }
  );

  let filteredCars =
    cars &&
    cars?.length > 0 &&
    cars?.filter((car) => {
      return (
        car?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        car?.brand?.toLowerCase().includes(searchValue.toLowerCase()) ||
        car?.type?.toLowerCase().includes(searchValue.toLowerCase()) ||
        car?.rent?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  return (
    <div className='p-8'>
      <h6 className='text-3xl mb-4 sm:mb-6'>Booking</h6>

      {carsLoading ? (
        <Loading />
      ) : (
        <>
          {/* filter card */}
          <div className='block sm:flex items-center'>
            {/* filters */}
            {showFilters && (
              <div className='relative mb-4 sm:mb-0'>
                <DropDown
                  type='carsTransmission'
                  defaultOption='Manual'
                  data={transmission}
                />
                <DropDown type='carsBrand' defaultOption='Audi' data={brands} />
              </div>
            )}

            {/* search */}
            {showFilters && (
              <div className='relative mb-4 sm:mb-0'>
                <Search
                  type='cars'
                  placeholder='Search for a car'
                  handleSearch={handleSearch}
                  searchValue={searchValue}
                />
              </div>
            )}

            <div className='flex items-center ltr:ml-auto rtl:mr-auto'>
              <img
                className='bg-white cursor-pointer p-3 rounded-full ltr:mr-3 rtl:ml-3'
                src={DashboardIcon}
                alt='DashboardIcon'
              />
              {showFilters ? (
                <img
                  onClick={() => setShowFilters(!showFilters)}
                  className='cursor-pointer'
                  src={FilterShowIcon}
                  alt='FilterIcon'
                />
              ) : (
                <img
                  onClick={() => setShowFilters(!showFilters)}
                  className='cursor-pointer bg-white p-2.5 rounded-full'
                  src={FilterHiddenIcon}
                  alt='FilterIcon'
                />
              )}
            </div>
          </div>

          {/* list of cars */}

          <div className='container py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredCars && filteredCars?.length > 0 ? (
                filteredCars?.map((car, i) => (
                  <CarCard
                    key={i}
                    name={car?.name}
                    type={car?.type}
                    users={car?.users}
                    rent={car?.rent}
                    image={car?.image}
                    transmission={car?.transmission}
                  />
                ))
              ) : (
                <h6 className='text-xl mt-6 absolute left-1/2'>
                  No cars to display
                </h6>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
