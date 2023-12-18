import React from 'react';
import { Search, ShoppingCartTwoTone } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { cartItems } from './../data';
import { Link } from 'react-router-dom';

const containerStyle = {
  height: '50px',
  backgroundColor: '#ffd98d',
};

const wrapperStyle = {
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const leftStyle = {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

const languageStyle = {
  fontSize: '14px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const searchbarStyle = {
  border: '1px solid #ffd98d',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  padding: '5px',
};

const inputStyle = {
  border: 'none',
};

const centerStyle = {
  flex: '1',
  textAlign: 'center',
};

const logoStyle = {
  fontWeight: 'bold',
};

const rightStyle = {
  flex: '1',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'flex-end',
};

const menuStyle = {
  fontSize: '14px',
  cursor: 'pointer',
  marginRight: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const Nav = () => {
  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <div style={leftStyle}>
          <span style={languageStyle}>En</span>
          <span style={searchbarStyle}>
            <div style={inputStyle} />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </span>
        </div>
        <div style={centerStyle}>
        </div>
        <div style={rightStyle}>
          <span style={menuStyle}>
            <Link to="/Register" style={{ textDecoration: 'none' }}>
              Register
            </Link>
          </span>
          <span style={menuStyle}>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              SignIn
            </Link>
          </span>
          <span style={menuStyle}>
            <IconButton aria-label="cart">
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartTwoTone />
                </Badge>
              </Link>
            </IconButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
