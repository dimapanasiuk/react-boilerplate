import React, { Component } from "react";
import "./appPerproc.scss";
import "./app.css";

import Button from "./button/Button.jsx";

class App extends Component {
  state = {};

  render() {
console.log('test',process.env);
    return (
      <div>
        <Button label="click me please" />
        <h1>My React App3!</h1>
        {/* <img src={Logo} /> */}
      </div>
    );
  }
}

export default App;
