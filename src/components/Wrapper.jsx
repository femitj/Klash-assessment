import { Outlet } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';

const Wrapper = () => {
  return (
    <div className='flex'>
      <div className='flex-none w-[280px] sticky left-0 top-0 overflow-y-auto bg-[#FFFBF7]'>
        <Sidebar />
      </div>
      <div className='flex-1 bg-white'>
        <div>
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;
