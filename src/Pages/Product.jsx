import React, { useState } from 'react';
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import News from "../Components/News";

const Product = (props) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  const decrease = () => {
    setCounter((counter) => (counter > 0 ? counter - 1 : 0));
  };

  const add = () => {
    // Assuming cartItems is a state variable that you can modify.
    // setcartItems((prevCount) => prevCount + counter); // Uncomment this line if cartItems is a state variable.
    setCounter(0);
  };

  return (
    <div>
      <Announcement />
      <Nav />
      <Brand />
      <div style={{ padding: '50px', display: 'flex', height: '70vh' }}>
        <div style={{ flex: 1 }}>
          <img src="https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe6166cfd/images/images/494970.png" style={{ backgroundColor: '#F6F5F3', height: '100%', marginLeft: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} alt="product" />
        </div>
        <div style={{ flex: 1, padding: '0px 50px' }}>
          <h1 style={{ fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{props.match.params.name}</h1>
          <p style={{ margin: '60px 0px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontSize: '30px' }}>{props.match.params.price}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ margin: '20px' }}>
              <span style={{ fontSize: '20px', fontWeight: '600', marginRight: '20px' }}>Filter Product:</span>
              <select style={{ padding: '10px', marginRight: '20px' }}>
                <option disabled selected>Color</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Diamond</option>
              </select>
              <select style={{ padding: '10px', marginRight: '20px' }}>
                <option disabled selected>Size</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
              </select>
            </div>
            <div style={{ margin: '20px' }}>
              <span style={{ fontSize: '20px', fontWeight: '600', marginRight: '20px' }}>Sort Product:</span>
              <select>
                <option selected>Newest</option>
                <option>Price (asc)</option>
                <option>Price (desc)</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}>
            <Remove onClick={decrease} />
            <span style={{ width: '30px', height: '30px', borderRadius: '10px', border: '1px solid #731704', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0px 5px' }}>{counter}</span>
            <Add onClick={increase} />
            <button onClick={add} style={{ padding: '15px', border: '2px solid #731704', backgroundColor: '#ffd98d', color: '#731704', fontWeight: 'bold', transition: 'all 0.5s', cursor: 'pointer', ':hover': { backgroundColor: '#731704', color: '#ffd98d' } }}>Add To Cart</button>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Product;
