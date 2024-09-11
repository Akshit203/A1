import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import No from "./pages/No";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/" element = {<Products />} />
          <Route path = "Products" element = {<Products/>} />
          <Route path = "Cart" element = {<Cart/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
