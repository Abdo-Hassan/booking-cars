import Dashboard from './components/Dashboard';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='bg-primary-grey flex'>
      <Sidebar />
      <div className='m-6'>
        <Search />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
