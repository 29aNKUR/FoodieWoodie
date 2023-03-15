import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = ()=>{
const {user} = useContext(UserContext);
  return(
    <h1 className="p-2 m-2 bg-blue-100">This site is developed by - {user.email}</h1>
  )
}

export default Footer;