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
import {lazy,Suspense,useContext,useState} from "react";
import Shimmer from "./Shimmer";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import store from "./utils/Store";
import { Provider } from "react-redux";



//Chunking
//Code splitting
//Dynamic Loading
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout= () => {
  const [user,setUser] = useState({
    name:"Ankur Semle one",
    email:"semle@gmail.com"
  });
  return (
    <Provider store={store}>
        <UserContext.Provider 
    value={{
      user:user,
      setUser:setUser
   
   }}>
    <Header />
    <Outlet />
    <Footer />
    </UserContext.Provider>

    </Provider>
 
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
     
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(<About/>);
