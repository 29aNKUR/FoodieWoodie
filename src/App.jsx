import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
// import ProfileClass from "./components/ProfileClassBased";
// import AboutClass from "./components/AboutClassBased";
import Profile from "./components/Profile";
import {lazy,Suspense,useContext,useState} from "react";
import Shimmer from "./Shimmer";
// import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import store from "./utils/Store";
import { Provider } from "react-redux";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import OrderSummary from "./components/OrderSummary";
import Razorpay from "./components/Razorpay";





//Chunking
//Code splitting
//Dynamic Loading
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));

const App = () => {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <Outlet/>
      </UserAuthContextProvider>
    </Provider>
  )
}

const AppLayout= () => {

  return (
 
    <><Header /><Outlet /><Footer /></>
 
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children : [{
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"about",
          element:<About/>,
          children:[{
            path:"profile",
            element:<Profile/>
          }]
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantDetails/>
        },
        {
          path:"/instamart",
          element:
          <Suspense fallback={<Shimmer/>}>
               <Instamart/>
           </Suspense>
       
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/cart/ordersummary",
          element:<OrderSummary/>
        },
        {
          path:"/razorpay",
          element:<Razorpay/>
        }
      ]
    }]
   ,
  },
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(<About/>);
