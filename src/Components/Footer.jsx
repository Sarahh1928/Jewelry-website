import { Facebook, Instagram, Room, Twitter } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  marginTop: '10px',
  height: '40vh',
  width: '100%',
};

const Left = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

const Logo = {
  marginBottom: '20px',
  display: 'flex',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  fontSize: '40px',
  letterSpacing: '3px',
};

const Desc = {
  margin: '20px 0px',
  fontWeight: 'bold',
  fontSize: '30px',
};

const SocialC = {
  display: 'flex',
};

const SocialIcon = {
  width: '40px',
  height: '40px',
  borderRadius: '25%',
  color: 'white',
  backgroundColor: 'gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '20px',
  cursor: 'pointer',
};

const Center = {
  flex: '1',
  padding: '20px',
};

const Title = {
  marginBottom: '30px',
  fontSize: '30px',
};

const List = {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  fontWeight: 'bold',
  fontSize: '20px',
};

const ListItem = {
  width: '50%',
  cursor: 'pointer',
  marginBottom: '10px',
};

const Right = {
  flex: '1',
  padding: '20px',
};

const ContactItem = {
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px',
  display: 'flex',
  alignItems: 'center',
};

const Payment = {
  width: '50%',
  cursor: 'pointer',
};

const Footer = () => {
  return (
    <div style={Container}>
      <div style={Left}>
        <h1 style={Logo}>High Jewelry</h1>
        <p style={Desc}>
          Joyful, feminine and refined, the Divas’ Dream invites to enjoy moments of unexpected wonder and unrivalled beauty.
        </p>
        <div style={SocialC}>
          <Link to="#">
            <div style={SocialIcon}><Facebook /></div>
          </Link>
          <Link to="#">
            <div style={SocialIcon}><Instagram /></div>
          </Link>
          <Link to="#">
            <div style={SocialIcon}><Twitter /></div>
          </Link>
        </div>
      </div>
      <div style={Center}>
        <h2 style={Title}>Explore</h2>
        <ul style={List}>
          <li style={ListItem}><Link to="/Home" style={{ textDecoration: "none" }}>Home </Link></li>
          <li style={ListItem}><Link to="/Cart" style={{ textDecoration: "none" }}>Cart</Link></li>
          <li style={ListItem}><Link to="/RingsList" style={{ textDecoration: "none" }}>Rings</Link></li>
          <li style={ListItem}><Link to="/EarringsList" style={{ textDecoration: "none" }}>Earrings</Link></li>
          <li style={ListItem}><Link to="/NecklacesList" style={{ textDecoration: "none" }}>Necklaces</Link></li>
          <li style={ListItem}><Link to="/BraceletsList" style={{ textDecoration: "none" }}>Bracelets</Link></li>
          <li style={ListItem}><Link to="#">My Account</Link></li>
          <li style={ListItem}><Link to="#">Wishlist</Link></li>
          <li style={ListItem}><Link to="#">Terms of service</Link></li>
        </ul>
      </div>
      <div style={Right}>
        <h2 style={Title}>Contact</h2>
        <div style={ContactItem}><Room /></div>
        <div style={ContactItem}>+201234567810</div>
        <div style={ContactItem}>contact@HJewelry.dev</div>
        <Link to="#">
          <img style={Payment} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
