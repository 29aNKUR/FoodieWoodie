import React from "react";
import { useState, useContext } from "react";
import Logo from "../assets/img/foodiewoodie.jpg"; //default export
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/Store";


// import useAuth from "../utils/useAuth";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems); to console the cart items

  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const statusOfLogin = useAuth();

  const online = useOnline();

  return (
    <div className="flex flex-wrap border shadow-lg bg-blue-100 justify-between">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
     
          <li className="px-2">
            <Link to="/cart">Cart-{cartItems.length} item</Link>
          </li>

        </ul>
      </div>
      <h1>{user.name}</h1>
      <h1>{online ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      {/* {
        statusOfLogin?<button>Logout</button> : <button>LogIn</button>
      } */}
    </div>
  );
};

export default Header;
