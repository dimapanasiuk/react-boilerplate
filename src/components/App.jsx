import React, { Component } from 'react';
import './App.css';
import './appPerproc.scss'
import Logo from './img/1.jpg';


class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <img src={Logo} />
      </div>
    );
  }
}

export default App;
