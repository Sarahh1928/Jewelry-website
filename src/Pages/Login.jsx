import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import News from "../Components/News";

const Container = {
  backgroundColor: '#731704',
};

const Wrapper = {
  width: '80%',
  height: '30vw',
  margin: '50px 10%',
  backgroundColor: '#ffd98d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const ImgC = {
  flex: 1,
  marginBottom: '150px',
  height: '70%',
};

const Image = {
  height: '140%',
  marginLeft: '100px',
};

const RestC = {
  flex: 1,
  flexDirection: 'column',
};

const Form = {
  flex: 1,
  textAlign: 'left',
  width: '350px',
};

const Title = {
  fontFamily: 'fantasy',
  letterSpacing: '3px',
  marginLeft: '30px',
  marginBottom: '50px',
  color: '#731704',
};

const Input = {
  width: '350px',
  height: '30px',
  display: 'flex',
  fontWeight: 'bold',
  margin: '20px 10px',
};

const Agreement = {
  display: 'flex',
  color: '#731704',
  margin: '7px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const Ad = {
  display: 'flex',
  color: '#731704',
  margin: '7px',
  textDecoration: 'underline',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const Button = {
  width: '70%',
  padding: '10px 0',
  marginBottom: '20px',
  marginLeft: '78px',
  fontWeight: 'bold',
  color: '#731704',
  cursor: 'pointer',
};

const Login = () => {
  return (
    <div style={Container}>
      <Announcement />
      <Nav />
      <Brand />
      <div style={Wrapper}>
        <div style={ImgC}>
          <img src="https://hk.pandora.net/dw/image/v2/AAWM_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwceec588a/images/Gift_Sets/R800579.png?sw=379&sh=379&sm=fit&sfrm=png&bgcolor=00000000" alt="Product" style={Image} />
        </div>
        <div style={RestC}>
          <h1 style={Title}>LOGIN TO YOUR ACCOUNT</h1>
          <form style={Form}>
            <input type="text" placeholder="Email" style={Input} />
            <input type="password" placeholder="Password" style={Input} />
            <button style={Button}>Create</button>
            <span style={Agreement}>DO NOT REMEMBER THE PASSWORD</span>
            <span style={Ad}>CREATE NEW ACCOUNT?</span>
          </form>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Login;
