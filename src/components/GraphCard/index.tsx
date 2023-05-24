import React from 'react';

const Index = ({ backgroundColor, color, title, description, amount }) => {
  return (
    <div
      className='border rounded-lg p-6 border-black w-full h-60 d-flex'
      style={{
        flexDirection: 'column',
        color,
        backgroundColor,
      }}
    >
      <p className='text-sm'>{title || '24 Aug - 01 Sep 21'}</p>
      <div style={{ marginTop: 'auto' }}>
        <p className='text-sm'>{description || 'This week'}</p>
        <p className='text-sm'>{amount || '₦1,652.50'}</p>
      </div>
    </div>
  );
};

export default Index;
