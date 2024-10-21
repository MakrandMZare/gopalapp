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
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/ProductList" component={ProductList} />
      <Route path="/ShopperStore" component={ShopperStore} />
      <Route path="/SingleProduct" component={SingleProduct} />
      <Route path="/Cart" component={Cart} />
    </div >
  );
}
export default App;