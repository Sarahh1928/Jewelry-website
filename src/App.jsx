import {
  BrowserRouter as Router, Routes,
  Route, Navigate
} from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import EarringsList from "./Pages/EarringsList";
import BraceletsList from "./Pages/BraceletsList";
import RingsList from "./Pages/RingsList";
import NecklacesList from "./Pages/NecklacesList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route path="/Product" element={<Product />} />

        <Route path="/ProductList" element={<ProductList />} />

        <Route path="/product/:id/:name/:des/:price" element={<Product />} />

        <Route path="/Register" element={<Register />} />

        <Route exact path="/Earrings" element={<EarringsList />} />
        <Route exact path="/Bracelets" element={<BraceletsList />} />
        <Route exact path="/Rings" element={<RingsList />} />
        <Route exact path="/Necklaces" element={<NecklacesList />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Cart" element={<Cart />} />

        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>
    </Router>
  );
};

export default App;