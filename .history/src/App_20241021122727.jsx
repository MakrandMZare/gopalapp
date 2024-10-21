import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import ShopperStore from "./pages/ShopperStore";
import SingleProduct from "./pages/SingleProduct";
import { Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact to="/" component={Home} />
      <Route to="/Register" component={Register} />
      <Route to="/Login" component={Login} />
      <Route to="/ProductList" component={ProductList} />
      <Route to="/ShopperStore" component={ShopperStore} />
      <Route to="/SingleProduct" component={SingleProduct} />
      <Route to="/Cart" component={Cart} />
    </div >
  );
}
export default App;