import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';

const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const PopularProds = () => {
  return (
    <div style={containerStyle}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default PopularProds;
