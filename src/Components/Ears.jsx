import styled from "styled-components"
import {earrings} from "../data"
import Product from './Product';
const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const Ears = () => {
  return (
    <div style={containerStyle}>
      {earrings.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Ears;
