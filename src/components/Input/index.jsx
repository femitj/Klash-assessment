import React from 'react';

const Index = ({ className, placeholder, type, name }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default Index;
