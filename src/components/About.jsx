import { Outlet } from "react-router-dom";
// or
// import Profile from "./Profile";

const About = () => {
  return (
    <>
      <div>This is a new React App🥶🚀</div>
    <Outlet/>
    {/* or */}
    {/* <Profile/> */}
    </>
  
  )
}

export default About;