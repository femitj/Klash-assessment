import React from 'react';

const Index = ({ children, className, style }) => {
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export default Index;
