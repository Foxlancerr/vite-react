import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../context/UserContext";

const Login = () => {
    const {setUserInfo} = useContext(userContext)
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUserInfo({ username, password });
    }
  return (
    <div className="flex flex-col gap-2 mt-5 p-5 rounded-lg w-3/5 bg-blue-800 mx-auto">
      <input
        type="text"
        placeholder="username"
        className="p-2 rounded-lg "
        onChange={(e) => {
          SetUsername(e.target.value);
        }}
        value={username}
      />
      <input
        type="text"
        placeholder="password"
        className="p-2 rounded-lg mt-2 "
        onChange={(e) => {
          SetPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={handleSubmit} className="px-6 py-2 bg-black mt-3 text-blue-50 font-bold rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default Login;
