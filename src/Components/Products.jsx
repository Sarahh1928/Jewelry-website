import React from 'react';
import Product from './Product';
import {popularProducts} from "../data"

const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const Products = () => {
  return (
    <div style={containerStyle}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
