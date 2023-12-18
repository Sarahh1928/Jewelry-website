
import { Link } from "react-router-dom"
import styled from "styled-components"
const containerStyle = {
    flex: '1',
    margin: '3px',
    height: '55vh',
    position: 'relative',
  };
  
  const imgStyle = {
    width: '100%',
    objectFit: 'cover',
    height: '100%',
  };
  
  const infoStyle = {
    position: 'absolute',
    flexDirection: 'column',
    top: '0',
    left: '0',
    width: '100%',
    height: '175%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const titleStyle = {
    color: '#731704',
    fontFamily: 'cursive',
    marginBottom: '20px',
  };
  
  const buttonStyle = {
    border: 'none',
    padding: '10px',
    backgroundColor: 'white',
    color: '#731704',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    fontWeight: '600',
  };
  
  const CatergoryItem = ({ item }) => {
    return (
      <div style={containerStyle}>
        <img src={item.img} style={imgStyle} alt={item.title} />
        <div style={infoStyle}>
          <h1 style={titleStyle}>{item.title}</h1>
          <button style={buttonStyle}>
            <Link to={item.name}>SHOP NOW!</Link>
          </button>
        </div>
      </div>
    );
  };
  
  export default CatergoryItem;
  