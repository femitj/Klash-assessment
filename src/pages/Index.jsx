import React from 'react';
import SparkLine from '../components/Sparkline';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BsArrowDownShort } from 'react-icons/bs';

const Index = () => {
  return (
    <div className='mt-[104px] px-8'>
      <p className='font-[Instrument-Sans] text-xl mb-6 '>Sales overview</p>
      <div className='flex gap-6 flex-1'>
        <div className='border rounded-lg p-6 border-black w-full h-60'>
          <p className='text-sm'>Today's sales</p>
          <p className='text-xl mt-1 font-[Instrument-Sans]'>₦1,652.50</p>
        </div>
        <div className='border rounded-lg p-6 border-black w-full h-60 bg-black text-white'>
          <p className='text-sm'>24 Aug - 01 Sep 21</p>
          <SparkLine />
          <p className='text-sm'>This week</p>
          <p className='text-xl mt-1 font-[Instrument-Sans]'>₦1,652.50</p>
        </div>
        <div className='border rounded-lg p-6 border-black w-full h-60'>
          <p className='text-sm'>24 Aug - 01 Sep 21</p>
          <SparkLine />
          <p className='text-sm'>This week</p>
          <p className='text-xl mt-1 font-[Instrument-Sans]'>₦1,652.50</p>
        </div>
        <div className='border rounded-lg p-6 border-black w-full h-60'>
          <p className='text-sm'>24 Aug - 01 Sep 21</p>
          <SparkLine />
          <p className='text-sm'>This week</p>
          <p className='text-xl mt-1 font-[Instrument-Sans]'>₦1,652.50</p>
        </div>
        {/* <div className="border rounded p-6 border-black w-full"></div> */}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <div className='w-4/6'>
          <div className=' flex w-full item-center justify-between mb-2'>
            <div className='text-xl pr-[10px] border-r '>
              <p>Sales</p>
            </div>
            <button className='pr-6 pl-3 text-[#EF2C5A]'>7 days</button>
            <button className='pr-6'>30 days</button>
            <p className='py-[10px] px-6 border-2 border-black rounded-md flex items-center mr-2'>
              USD{' '}
              <span>
                <HiOutlineChevronDown />
              </span>
            </p>
            <div className='flex border-2 rounded-md  outline-none relative items-center mr-2'>
              <input
                className='placeholder:text-sm placeholder:text-slate-400 block bg-white w-full py-2 px-3 shadow-sm focus:ring-1 sm:text-sm'
                placeholder='email'
                type='email'
                name='search'
              />
              <HiOutlineChevronDown className='mr-1 text-xl' />
            </div>
            <p className='py-[10px] px-6 border-2 border-black rounded-md flex items-center'>
              <BsArrowDownShort />
              <span className='font-semibold text-xs'>Download report</span>
            </p>
          </div>
          <div
            className='w-full border-2 border-black'
            style={{ height: '200px' }}
          >
            <SparkLine />
          </div>
        </div>

        <div style={{ width: '30%', flexDirection: 'column' }}>
          <div style={{ backgroundColor: '#EF2C5A', height: '250px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
