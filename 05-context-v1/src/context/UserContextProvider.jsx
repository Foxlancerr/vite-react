import userContext from "./UserContext.js";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState("");
  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
