import sideOptions from '../../Dummy_Data/sidebarOptions';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Logo from '../../asset/logo.jpeg';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarIcons } from './icons';

const Sidebar = () => {
  const location = useLocation();
  const activeLink = 'text-[#EF2C5A]';
  const normalLink = 'text-[#0A0A0A]';
  return (
    <div className=''>
      <img src={Logo} alt='klash' className='mt-[30px] mb-9 pl-12 h-6' />
      <div>
        {sideOptions?.map((options) => (
          <div key={options.head} className='mt-4'>
            <h3 className='h3 pl-12 text-[#8D8D8D]'>{options.head}</h3>
            {options?.options.map((option) => (
              <NavLink
                key={option.title}
                to={option.link}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className='flex pt-4 pl-[52px] gap-2'>
                  {SidebarIcons(option.icon, location.pathname === option.link)}

                  <h2 className='font-normal'>{option.title}</h2>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 mb-8 ml-12'>
        <button className='block mb-2'>
          <div className='flex gap-2 items-center bg-[#EF2C5A] rounded-[39px] py-2 pl-2 text-xs text-white w-[120px]'>
            <AiOutlineQuestionCircle className='text-lg' />
            <p>Support</p>
          </div>
        </button>
        <button className='block mt-3'>
          <div className='flex gap-1 items-center outline outline-1 rounded w-[120px] py-2 pl-2 text-xs'>
            <RiArrowLeftSLine className='text-lg' />
            <p>Hide panel</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
