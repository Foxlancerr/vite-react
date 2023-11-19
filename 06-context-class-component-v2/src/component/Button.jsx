import React, { Component } from "react";
import { CounterContext } from "../context/CounterContextProvider.jsx";

export default class Button extends Component {
  // default method to used the context
  static contextType = CounterContext;
  render() {
    //we destructre it and then used it
    const { inc, dec } = this.context;
    return (
      <div className="flex justify-center mt-10">
        <button
          className="w-20 h-20 hover:bg-green-500 bg-green-800 text-3xl font-bold text-white mr-2"
          onClick={() => {
            inc()
          }}
        >
          +
        </button>
        <button
          className="w-20 h-20 bg-green-800 hover:bg-green-500 text-3xl font-bold text-white"
          onClick={() => {
            dec()
          }}
        >
          -
        </button>
      </div>
    );
  }
}
