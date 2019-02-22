import React, { Component } from 'react';
import './App.css';
import { store } from './store';
import Test from './Test.js';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:store.getState().color}}>{store.getState().message}</h1>
        <Test />
        <Button />
      </div>
    );
  }
};

export default App;
