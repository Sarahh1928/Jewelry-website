import { ArrowLeftOutlined,ArrowRightOutlined } from "@mui/icons-material"
import React,{ useState } from "react"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import {sliderItems} from "../data"

const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  backgroundColor: '#731704',
  position: 'relative',
  overflow: 'hidden',
};

const arrowStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: "50%",
  bottom: 0,
  cursor: 'pointer',
  opacity: 0.5,
  zIndex: 2,
};

const wrapperStyle = {
  height: '100%',
  display: 'flex',
  transition: 'all 2s ease',
};

const slideStyle = (bg) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: `#${bg}`,
});

const imgContainerStyle = {
  flex: 1,
  height: '100%',
};

const imgStyle = {
  height: '100%',
};

const infoContainerStyle = {
  flex: '1px',
  padding: '50px',
};

const titleStyle = {
  fontSize: '70px',
  fontFamily: 'cursive',
  color: '#FFD175',
};

const desStyle = {
  margin: '70px 0px',
  fontSize: '30px',
  fontWeight: 500,
  letterSpacing: '3px',
  color: '#FFD175',
  fontFamily: 'cursive',
};

const buttonStyle = {
  padding: '10px',
  borderColor: '#FFD175',
  fontSize: '20px',
  backgroundColor: '#FFD175',
  color: '#731704',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...arrowStyle, left: '10px' }} onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </div>
      <div style={{ ...wrapperStyle, transform: `translateX(${slideIndex * -100}vw)` }}>
        {sliderItems.map((item) => (
          <div style={slideStyle(item.bg)} key={item.id}>
            <div style={imgContainerStyle}>
              <img style={imgStyle} src={item.img} alt={`slide-${item.id}`} />
            </div>
            <div style={infoContainerStyle}>
              <h1 style={titleStyle}>{item.title}</h1>
              <p style={desStyle}>{item.des}</p>
              <button style={buttonStyle}>
                <Link to="/ProductList" style={{ textDecoration: 'none', color: '#731704' }}>
                  Shop now
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...arrowStyle, right: '10px' }} onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
