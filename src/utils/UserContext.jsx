import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "ankur",
    email: "semleankur@gmail.com",
  },
});

UserContext.displayName="UserContext";

export default UserContext;
