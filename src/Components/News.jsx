import React from 'react';
import { Send } from '@mui/icons-material';

const containerStyle = {
  height: '50vh',
  width: '100%',
  backgroundColor: '#fcf5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
};

const titleStyle = {
  fontSize: '60px',
  fontFamily: 'cursive',
  marginBottom: '40px',
};

const descStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const inputCStyle = {
  width: '35%',
  height: '40px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid lightgray',
};

const inputStyle = {
  border: 'none',
  flex: '8',
  paddingLeft: '20px',
};

const buttonStyle = {
  flex: '1',
  border: 'none',
  backgroundColor: '#731704',
  color: '#ffd98d',
  fontSize: '30px',
  fontWeight: 'bold',
};

const News = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <div style={descStyle}>
        Be the first to know about exciting special offers and much more.
      </div>
      <div style={inputCStyle}>
        <input style={inputStyle} placeholder="Your Email" />
        <button style={buttonStyle}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default News;
