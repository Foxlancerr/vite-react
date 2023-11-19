import React, { createContext, Component } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  state = {
    username: "ahmad",
  };
  changeDetail = function () {

    this.state.username = "kamran";
    console.log(this.state.username);
  };

  render() {
    console.log(this.props.children);
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          changeDetail: this.changeDetail,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
