import React, { Component } from "react"
import "./App.css";
import "./appPerproc.scss";
// import Logo from "./img/1.jpg";
import Button from "./button/Button.jsx";

class App extends Component {
  state = {};

  render() {
    console.log();
    return (
      <div>
        <Button label="click me please" />
        <h1>My React App!</h1>
        {/* <img src={Logo} /> */}
      </div>
    );
  }
}

export default App;
