import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Products from "./pages/SingleProduct";
import Register from "./pages/Register";
import ShopperStore from "./pages/ShopperStore";
import SingleProduct from "./pages/SingleProduct";
import { Link, Router } from "react-router-dom";

const App = () => {
  return<div className="App">
    <Home /> 
    <Register/>
    <Login/>
    <ProductList />
    <SingleProduct/>
    <Products />
    <Cart />
    <ShopperStore/>
     
  </div >
    
    
  
};

export default App;