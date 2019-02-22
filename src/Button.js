import React, { Component } from 'react';
import './App.css';
import { store } from './store';
import { changeColor } from './actions';

class Button extends Component {
  dispatchColor = (color) => {
    store.dispatch(changeColor(color));
  };
  logState = () => {
    console.log(store.getState());
  };
  render() {
    return (
      <div>
      <h1 style={{color:store.getState().color}}>{store.getState().color}</h1>
      <button onClick={() => this.dispatchColor("black")}>Click Here to Change Color to Black</button>
      <button onClick={() => this.dispatchColor("red")}>Click Here to Change Color to Red</button>
      <button onClick={() => this.dispatchColor("blue")}>Click Here to Change Color to Blue</button>
      <button onClick={() => this.dispatchColor("green")}>Click Here to Change Color to Green</button>
      </div>
    )
  }
};

export default Button;
