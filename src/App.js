import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';

function App() {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div
      className='bg-primary-grey flex'
      dir={language === 'English' ? 'ltr' : 'rtl'}>
      <Sidebar />

      <div className='w-full'>
        <TopBar language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='cars' element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
