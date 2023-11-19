import React, { Component } from "react";
import { CounterContext } from "../context/CounterContextProvider.jsx";
import { UserContext } from "../context/UserContextProvider.jsx";

export default class Message extends Component {
  static contextType = CounterContext;
  // static contextType = UserContext;
  render() {
    // const {username,address} = this.context;
    const { counter, counterName } = this.context;
    return (
      <UserContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <div className="w-full">
              <h1 className="text-white text-2xl bg-black py-3 text-center">
                Username: {context.username}
              </h1>
              <button
                className="bg-red-700 px-4 py-2 text-2xl rounded-full"
                onClick={() => {
                  context.changeDetail();
                }}
              >
                Change
              </button>

              <h1 className="text-5xl text-center mt-10">
                {counterName} : {counter}
              </h1>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
