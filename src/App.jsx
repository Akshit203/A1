import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import No from "./pages/No";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/SignUp";
import UserDashBoard from "./pages/User/UserDashBoard";
import Context from "./ContextAPI/Context";
import MyState from "./ContextAPI/MyState";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
      <Router>

        <Routes>

          <Route path = "/" element = {<Home />} />
          <Route path = "/" element = {<Products />} />
          <Route path = "Products" element = {<Products/>} />
          <Route path = "Cart" element = {<Cart/>} />
          <Route path = "Register" element = {<SignUp/>} />
          <Route path = "Login" element = {<Login/>} />
          <Route path = "UserDashBoard" element = {<UserDashBoard/>} />



        </Routes>

        <Toaster/>
      </Router>
  );
};

export default App;
