import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class List extends Component {
  // default method to used the context
  static contextType = ThemeContext;
  render() {
    //we destructre it and then used it
    const { light, changeTheme, darkTheme, lightTheme } = this.context;
    const theme = light ? darkTheme : lightTheme;
    console.log(theme);
    return (
      <div className="w-full h-full">
        <ul
          className="flex gap-5 justify-center"
          style={{ backgroundColor: theme.bg, color: theme.txt }}
        >
          <li className="text-3xl ">Home</li>
          <li className="text-3xl ">About</li>
          <li className="text-3xl ">Contact</li>
        </ul>
        <div className="flex justify-center items-center h-[50vh]">
          <button
            className="bg-blue-800 text-white rounded-lg font-bold px-2 py-2"
            onClick={() => {
              changeTheme();
            }}
          >
            ChangeTheme
          </button>
        </div>
      </div>
    );
  }
}
