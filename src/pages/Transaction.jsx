import React, { useState } from 'react';
import Pagination from '../components/Pagination/pagination';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';
import Button from '../components/Button';
import Input from '../components/Input';

const Transaction = () => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1,
  ];
  const list = [
    {
      id: 'GB124QWERTY12346',
      source: 'GTB',
      customerName: 'Mike Owen',
      account: '0223337281',
      amount: '$230.00',
      date: '24.08.2021',
      status: 'Pending',
    },

    {
      id: 'GB124QWERTY12346',
      source: 'GTB',
      customerName: 'Mike Owen',
      account: '0223337281',
      amount: '$230.00',
      date: '24.08.2021',
      status: 'Pending',
    },

    {
      id: 'GB124QWERTY12346',
      source: 'GTB',
      customerName: 'Mike Owen',
      account: '0223337281',
      amount: '$230.00',
      date: '24.08.2021',
      status: 'Pending',
    },

    {
      id: 'GB124QWERTY12346',
      source: 'GTB',
      customerName: 'Mike Owen',
      account: '0223337281',
      amount: '$230.00',
      date: '24.08.2021',
      status: 'Pending',
    },

    {
      id: 'GB124QWERTY12346',
      source: 'GTB',
      customerName: 'Mike Owen',
      account: '0223337281',
      amount: '$230.00',
      date: '24.08.2021',
      status: 'Pending',
    },
  ];

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (
    <div className='px-8'>
      <div className='rounded-lg border mt-[123px]'>
        <p className='font-[Instrument-Sans] font-medium text-[#0A0A0A] text-lg p-4 pb-6'>
          Transaction history
        </p>
        <div className='border-t px-5'>
          <div className='flex justify-between py-1 mt-1'>
            <div className='flex border-2 rounded-md  outline-none relative items-center'>
              <Input
                className='placeholder:text-sm placeholder:text-slate-400 block bg-white w-full py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Search'
                type='text'
                name='search'
              />
              <AiOutlineSearch className='mr-1 text-xl' />
            </div>
            <div className='flex gap-2'>
              <Button className='border-2 rounded-lg border-black py-1 px-3 flex items-center font-semibold text-xs '>
                <span>Filter</span> <BiFilter className='text-lg' />
              </Button>
              <Button className='border-2 rounded-lg border-black py-1 px-3 flex items-center font-semibold text-xs '>
                Export
              </Button>
            </div>
          </div>
          <table className=' w-full text-left px-8 border-spacing-2'>
            <thead>
              <tr className='text-base font-semibold font-[Instrument-Sans] text-[#5F5F5F]'>
                <th className='py-6'>Transaction ID</th>
                <th>Source</th>
                <th>Customer name</th>
                <th>Customer email</th>
                <th>Amount</th>
                <th>Request date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className='text-sm font text-[#484848]'>
              {list.map((item, index) => (
                <tr key={`${index}-${Math.random()}`}>
                  <td className='py-6'>{item.id}</td>
                  <td>{item.source}</td>
                  <td>{item.customerName}</td>
                  <td>{item.account}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
