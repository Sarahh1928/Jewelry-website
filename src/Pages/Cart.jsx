import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { Add, Remove } from "@mui/icons-material";

const Container = {
  // Add your container styles here
};

const Wrapper = {
  padding: '20px',
};

const Title = {
  textAlign: 'center',
  fontWeight: 'bold',
};

const Top = {
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
};

const TopButton = {
  padding: '10px',
  fontWeight: '600',
  cursor: 'pointer',
  border: 'none',
  color: (props) => (props.type === "filled" ? "white" : undefined),
  backgroundColor: (props) => (props.type === "filled" ? "black" : "transparent"),
};

const TopTexts = {
  padding: '10px',
  fontWeight: '600',
  cursor: 'pointer',
};

const TopText = {
  textDecoration: 'underline',
  margin: '0px 10px',
  cursor: 'pointer',
};

const Bottom = {
  display: 'flex',
  marginTop: '20px',
  justifyContent: 'space-between',
};

const Info = {
  flex: 3,
};

const Product = {
  display: 'flex',
  justifyContent: 'space-between',
};

const ProD = {
  flex: 2,
  display: 'flex',
};

const Im = {
  width: '200px',
};

const De = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  justifyContent: 'space-around',
};

const ProAC = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const ProA = {
  fontSize: '24px',
  margin: '5px',
};

const ProPri = {
  fontSize: '30px',
  fontWeight: '400',
};

const ProName = {};

const ProId = {};

const ProductColor = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
};

const ProSize = {};

const PriD = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Hr = {
  backgroundColor: '#731704',
  border: 'none',
  height: '1px',
};

const Summ = {
  flex: 1,
  border: '0.5px solid #731704',
  borderRadius: '10px',
  padding: '20px',
  height: '50vh',
};

const ST = {
  fontWeight: 'bold',
};

const SumItem = {
  margin: '60px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  fontSize: (props) => (props.type === "total" ? "24px" : undefined),
};

const SummaryItemT = {};

const SummaryItemP = {};

const Button = {
  fontWeight: 'bold',
  width: '100%',
  padding: '10px',
  backgroundColor: '#731704',
  color: '#ffd98d',
};

const Cart = () => {
  return (
    <div style={Container}>
      <Announcement />
      <Nav />
      <Brand />
      <div style={Wrapper}>
        <h1 style={Title}>YOUR BAG</h1>
        <div style={Top}>
          <button style={TopButton}>CONTINUE SHOPPING</button>
          <div style={TopTexts}>
            <span style={TopText}>Shopping Bag</span>
            <span style={TopText}>Your Wishlist</span>
          </div>
          <button style={TopButton({ type: "filled" })}>CHECKOUT NOW</button>
        </div>
        <div style={Bottom}>
          <div style={Info}>
            <div style={Product}>
              <div style={ProD}>
                <img style={Im} src="https://www.bulgari.com/dw/image/v2/BCSG_PRD/on/demandware.static/-/Library-Sites-bulgariSharedLibrary/default/dw7d9f451f/hj/2022/pdp/268225/268225_201_640x640v2.png?sw=655" />
                <div style={De}>
                  <span style={ProName}>
                    <b>Product:</b> ARTISANAL MASTERY
                  </span>
                  <span style={ProId}>
                    <b>ID:</b> 378362757436
                  </span>
                  <div style={ProductColor({ color: "green" })} />
                  <span style={ProSize}>
                    <b>Size:</b> 16
                  </span>
                </div>
              </div>
              <div style={PriD}>
                <div style={ProAC}>
                  <Add />
                  <span style={ProA}>1</span>
                  <Remove />
                </div>
                <div style={ProPri}>$40,000.00</div>
              </div>
            </div>
            <hr style={Hr} />
            <div style={Product}>
              <div style={ProD}>
                <img style={Im} src="https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwb541c585/images/images/1338622.png" />
                <div style={De}>
                  <span style={ProName}>
                    <b>Product:</b> SERPENTI NECKLACE
                  </span>
                  <span style={ProId}>
                    <b>ID:</b> 378362764536
                  </span>
                  <div style={ProductColor({ color: "green" })} />
                  <span style={ProSize}>
                    <b>Size:</b> 20
                  </span>
                </div>
              </div>
              <div style={PriD}>
                <div style={ProAC}>
                  <Add />
                  <span style={ProA}>2</span>
                  <Remove />
                </div>
                <div style={ProPri}>$15,700.00</div>
              </div>
            </div>
          </div>
          <div style={Summ}>
            <h1 style={ST}>ORDER SUMMARY</h1>
            <div style={SumItem}>
              <span style={SummaryItemT}>Subtotal</span>
              <span style={SummaryItemP}>$55,700.00</span>
            </div>
            <div style={SumItem}>
              <span style={SummaryItemT}>Estimated Shipping</span>
              <span style={SummaryItemP}>$500.00</span>
            </div>
            <div style={SumItem}>
              <span style={SummaryItemT}>Discount</span>
              <span style={SummaryItemP}>$16,710.00</span>
            </div>
            <div style={SumItem({ type: "total" })}>
              <span style={SummaryItemT}>Total</span>
              <span style={SummaryItemP}>$39,490.00</span>
            </div>
            <button style={Button}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
