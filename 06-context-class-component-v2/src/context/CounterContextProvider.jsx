import React, { createContext, Component } from "react";

export const CounterContext = createContext();

export default class CounterContextProvider extends Component {
  state = {
    counter: 0,
    counterName: "Class Counter",
  };
  incrementCounter = () => {
    // this.state.counter += 1;
    this.state.counter = this.state.counter + 1;
    console.log("clicked++", this.state.counter);
  };
  decrementCounter = () => {
    console.log("clicked--", this.state.counter);
    this.state.counter = this.state.counter - 1;
  };
  render() {
    console.log(this.props.children);
    return (
      <CounterContext.Provider
        value={{
          ...this.state,
          dec: this.decrementCounter,
          inc: this.incrementCounter,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
