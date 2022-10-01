import Dashboard from './pages/Dashboard';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';

function App() {
  return (
    <div className='bg-primary-grey flex'>
      <Sidebar />
      <div className='w-full'>
        <Search />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='cars' element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
