import React from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const infoStyle = {
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.8s ease',
};

const containerStyle = {
  flex: 1,
  margin: '5px',
  minWidth: '400px',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F6F5F3',
  position: 'relative',
  '&:hover $info': {
    opacity: 1,
  },
};

const imageStyle = {
  height: '90%',
  zIndex: 2,
};

const iconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'scale(1.1)',
  },
};

const Product = ({ item }) => {
  return (
    <div style={containerStyle}>
      <img src={item.img} alt={item.name} style={imageStyle} />
      <div style={infoStyle}>
        <div style={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div style={iconStyle}>
          <Link
            to={`/product/${item.id}/${item.name}/${item.des}/${item.price}`}
            style={{ textDecoration: 'none' }}
          >
            <SearchOutlined />
          </Link>
        </div>
        <div style={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
