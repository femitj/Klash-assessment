import React from 'react';

const GraphCard = () => {
  return (
    <div className='mt-[104px] px-8'>
      <p className='font-[Instrument-Sans] text-xl mb-6 '>Sales overview</p>
      <div className='flex gap-6 flex-1'>
        <div className='border rounded-lg p-6 border-black w-full h-60'>
          <p className='text-sm'>Today's sales</p>
          <p className='text-xl mt-1 font-[Instrument-Sans] font-medium'>
            ₦1,652.50
          </p>
        </div>
        <GraphCard
          backgroundColor='black'
          color='white'
          title="'24 Aug - 01 Sep 21"
          description='This week'
          amount='₦1,652.50'
        />
        <div className='border rounded-lg p-6 border-black w-full h-60'></div>
        <div className='border rounded-lg p-6 border-black w-full h-60'></div>
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
        <div style={{ width: '68%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 25,
              marginBottom: 10,
            }}
          >
            <div style={styles.filterBtns}>Sales</div>
            <div style={styles.filter7Btns}>7 days</div>
            <div style={styles.filterBtns}>30 days</div>
            <div style={styles.filterBtns}>USD</div>
            <div style={styles.filterBtns}>Download Report</div>
          </div>
          <div style={{ border: '1px solid #0A0A0A', height: 250 }}></div>
        </div>

        <div style={{ width: '30%', flexDirection: 'column' }}>
          <div style={{ height: 20, marginBottom: 10 }}></div>
          <div style={{ backgroundColor: '#EF2C5A', height: 250 }}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  filterBtns: {
    padding: 3,
    marginRight: 10,
  },
  filter7Btns: {
    padding: 3,
    marginRight: 10,
    color: '#EF2C5A',
  },
};

export default GraphCard;
