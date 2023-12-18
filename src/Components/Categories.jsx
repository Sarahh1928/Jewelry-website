import styled from "styled-components"
import {categories} from "../data"
import CatergoryItem from './CatergoryItem'

const containerStyle = {
  display: 'flex',
  padding: '20px',
  justifyContent: 'space-between',
};

const Categories = () => {
  return (
    <div style={containerStyle}>
      {categories.map((item) => (
        <CatergoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
