import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import ProfileClass from "./components/ProfileClassBased";
// import AboutClass from "./components/AboutClassBased";
import Profile from "./components/Profile";
import {lazy,Suspense} from "react";
import Shimmer from "./Shimmer";

//Chunking
//Code splitting
//Dynamic Loading
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout= () => {
  return (
   <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
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
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",
        element:
        <Suspense fallback={<Shimmer/>}>
             <Instamart/>
         </Suspense>
     
      }
    ],
  },
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(<About/>);
