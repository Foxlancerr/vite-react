import React, { useContext } from "react";
import userContext from "../context/UserContext";

const Profile = () => {
  const { userInfo } = useContext(userContext);
  console.log(userInfo);
  return (
    <div>
      {userInfo.username && <h1 className="text-center text-2xl">Username: {userInfo.username}</h1>} 
    </div>
  );
};

export default Profile;
