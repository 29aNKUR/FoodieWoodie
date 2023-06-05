import React from "react";
import { useState, useContext } from "react";
import Logo from "../assets/img/foodiewoodie.jpg"; //default export
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/Store";
import { useUserAuth } from "../context/UserAuthContext";
import { signOut } from "firebase/auth";

// import useAuth from "../utils/useAuth";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2 ml-28" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const { user, logOut, logIn } = useUserAuth();
  const [error, setError] = useState("");

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await logIn();
    } catch (error) {
      setError(error.message);
    }
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems); to console the cart items

  // const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const statusOfLogin = useAuth();

  const online = useOnline();

  return (
    <div>
      {user?.email ? (
        <div className="flex flex-wrap border shadow-lg justify-between">
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
                <Link to="/cart">Cart</Link>
              </li>

              <li>
              <h1 className="font-bold">Welcome {(user?.displayName)?user?.displayName:user?.email}</h1>
              </li>
            </ul>
          </div>
          {/* <h1>{user.name}</h1> */}
          <h1>{online ? "✅" : "🔴"}</h1>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <div className="flex flex-wrap border shadow-lg justify-between">
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
                <Link to="/cart">Cart</Link>
              </li>

              <li>
              {/* <h1 className="font-bold">Welcome {(user?.displayName)?user?.displayName:user?.email}</h1> */}
              </li>
            </ul>
          </div>
          {/* <h1>{user.name}</h1> */}
          <h1>{online ? "✅" : "🔴"}</h1>
          <Link to="/login" className="flex align-middle"><button onClick={handleSignIn}>Login</button></Link>
        </div>
      )}
    </div>
  );
};

export default Header;
