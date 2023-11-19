import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default class Title extends Component {
  static contextType = ThemeContext;
  render() {
    const {light} = this.context;
    return (
      <div className='p-5 bg-red-500 text-3xl flex justify-center font-semibold text-white'>
        <h1>{light ? "Dark" : "Light"}</h1>
      </div>
    );
  }
}
