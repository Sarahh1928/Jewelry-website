import React from "react";
import Announcement from "../Components/Announcement";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import News from "../Components/News";

const Register = () => {
  return (
    <div style={{ backgroundColor: "#731704" }}>
      <Announcement />
      <Nav />
      <Brand />
      <div style={{ width: "80%", height: "30vw", margin: "50px 10%", backgroundColor: "#ffd98d", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ flex: 1, marginBottom: "150px", height: "70%" }}>
          <img src="https://hk.pandora.net/dw/image/v2/AAWM_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwceec588a/images/Gift_Sets/R800579.png?sw=379&sh=379&sm=fit&sfrm=png&bgcolor=00000000" style={{ height: "140%", marginLeft: "100px" }} alt="Product" />
        </div>
        <form style={{ flex: 1, flexDirection: "column" }}>
          <h1 style={{ fontFamily: "fantasy", letterSpacing: "3px", marginLeft: "30px", marginBottom: "50px", color: "#731704" }}>CREATE AN ACCOUNT</h1>
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="First Name" />
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="Last Name" />
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="Username" />
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="Email" />
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="Password" />
          <input style={{ flex: 1, width: "350px", height: "30px", display: "flex", flexWrap: "wrap", fontWeight: "bold", justifyContent: "space-between", margin: "20px 10px" }} placeholder="Confirm Password" />
          <span style={{ color: "#731704", margin: "7px", fontWeight: "bold" }}>By creating this account.
            <span style={{ display: "flex", color: "#731704", margin: "7px", fontWeight: "bold" }}>you agree to the Terms of Service and Privacy Policy.
            </span>
          </span>
          <button style={{ width: "30%", padding: "10px 0", marginLeft: "78px", fontWeight: "bold", color: "#731704" }}>Create</button>
        </form>
      </div>
      <News />
      <Footer />
    </div>
  );
}

export default Register;
