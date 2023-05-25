import { Outlet } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';
import { useState } from 'react';

const Wrapper = () => {
  const [showSide, setShowSide] = useState(true)
  return (
    <div className='flex'>
      { showSide && <div className='flex-none w-[280px] sticky left-0 top-0 overflow-y-auto bg-[#FFFBF7]'>
        <Sidebar showSide={ showSide } setShowSide={ setShowSide } />
      </div> }
      <div className='flex-1 bg-white relative'>
        <div>
          <Navbar showSide={ showSide } setShowSide={ setShowSide } />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;
