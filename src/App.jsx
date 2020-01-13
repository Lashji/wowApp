import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { getToken } from "./api/apiHandler";
import MainContainer from "./main-container/main-container.component";

class App extends Component {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const url = "";
    getToken().then(res => {
      console.log("res =>  ", res);
      this.setState({ token: res });
    });
  }

  render() {
    return (
      <div className="App">
        <MainContainer></MainContainer>
      </div>
    );
  }
}
2;

export default App;
