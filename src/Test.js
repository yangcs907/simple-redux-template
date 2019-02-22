import React, { Component } from 'react';
import './App.css';
import { store } from './store';

class Test extends Component {
  render() {
    return (
      <h1 style={{color:store.getState().color}}>{store.getState().message2}</h1>
    )
  }
};

export default Test;
