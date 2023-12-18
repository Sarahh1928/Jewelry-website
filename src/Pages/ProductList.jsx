import React from "react";
import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import News from "../Components/News";
import Products from "../Components/Products";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Nav />
      <Brand />
      <h1 style={{ margin: "20px" }}>Necklaces</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: "20px" }}>
          <span style={{ fontSize: "20px", fontWeight: "600", marginRight: "20px" }}>
            Filter Product:
          </span>
          <select style={{ padding: "10px", marginRight: "20px" }}>
            <option disabled selected>
              Color
            </option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Diamond</option>
          </select>
          <select style={{ padding: "10px", marginRight: "20px" }}>
            <option disabled selected>
              Size
            </option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
          </select>
        </div>
        <div style={{ margin: "20px" }}>
          <span style={{ fontSize: "20px", fontWeight: "600", marginRight: "20px" }}>
            Sort Product:
          </span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <News />
      <Footer />
    </div>
  );
};

export default ProductList;
