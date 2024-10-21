import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/ProductList";
import Register from "./pages/Register";
import ShopperStore from "./pages/ShopperStore";
import SingleProduct from "./pages/SingleProduct";
import { Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
      <Route path="/shopperstore" component={ShopperStore} />
      <Route path="/singleproduct" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
    </div >
  );
}
export default App;