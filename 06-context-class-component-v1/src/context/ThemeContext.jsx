import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    light: false,
    darkTheme: { bg: "#000000", txt: "#ffffff" },
    lightTheme: { bg: "#ffffff", txt: "#000000" },
  };
  changeTheme = () => {
    this.setState({
      light: !this.state.light,
    });
  };

  render() {
    console.log(this.props.children);
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
