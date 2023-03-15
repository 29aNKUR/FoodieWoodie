
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

// or
// import Profile from "./Profile";



const About = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      <div>This is a new React App🥶🚀</div>
      <h1 className="font-bold">{user.name}</h1>
      <h2 className="font-bold">{user.email}</h2>
    <Outlet/>
    {/* or */}
    {/* <Profile/> */}
    </>
  
  )
}

export default About;