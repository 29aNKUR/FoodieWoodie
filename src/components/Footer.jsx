import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer className="flex items-center justify-center bg-blue-100 ">
      <h1 className="p-2 m-2">{`This site is developed by - ${user.email}`}</h1>
    </footer>
  );
};

export default Footer;
