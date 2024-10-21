import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import ShopperStore from "./pages/ShopperStore";
import SingleProduct from "./pages/SingleProduct";
import { Link, Router } from "react-router-dom";

const App = () => {
  return <div className="App">
    <Router to="/" component={Home} />
    <Router to="/Register" component={Register} />
    <Router to="/Login" component={Login} />
    <Router to="/ProductList" component={ProductList} />
    <Router to="/ShopperStore" component={ShopperStore} />
    <Router to="/SingleProduct" component={SingleProduct} />
    <Router to="/Cart" component={Cart} />
     
  </div >
}
export default App;