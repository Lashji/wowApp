import React, { Component } from "react";
import "./App.css";

import MainContainer from "./main-container/main-container.component";

class App extends Component {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  constructor() {
    super();
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;
