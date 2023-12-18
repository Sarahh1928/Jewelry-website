import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import News from "../Components/News";
import Products from "../Components/Products";

const Container = {
  // Add your container styles here
};

const Title = {
  margin: '20px',
};

const FContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

const Filter = {
  margin: '20px',
};

const FilterText = {
  fontSize: '20px',
  fontWeight: '600',
  marginRight: '20px',
};

const Sel = {
  padding: '10px',
  marginRight: '20px',
};

const Option = {
  // Add your option styles here
};

const BraceletsList = () => {
  return (
    <div style={Container}>
      <Announcement />
      <Nav />
      <Brand />
      <h1 style={Title}>Bracelets</h1>
      <div style={FContainer}>
        <div style={Filter}>
          <span style={FilterText}>Filter Product:</span>
          <select style={Sel}>
            <option disabled selected>
              Color
            </option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Diamond</option>
          </select>
          <select style={Sel}>
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
        <div style={Filter}>
          <span style={FilterText}>Sort Product:</span>
          <select style={Sel}>
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

export default BraceletsList;
