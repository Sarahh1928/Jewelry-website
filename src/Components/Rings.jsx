import React from 'react';
import Product from './Product';

const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const Rings = () => {
  return (
    <div style={containerStyle}>
      {rings.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Rings;
