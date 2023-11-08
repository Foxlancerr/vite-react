import { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState("");
  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
