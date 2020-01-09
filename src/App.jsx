import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import MainContainer from "./main-container/main-container.component";

class App extends Component {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  constructor() {
    super();
  }


  getToken = () => {
    return axios.get(`https://eu.battle.net/oauth/token`, {
        auth: {
          username: process.env.REACT_APP_CLIENT_ID,
          password: process.env.REACT_APP_CLIENT_SECRET,
        },
        params: {
          grant_type: 'client_credentials',
        }
    }).then(response => console.log(response))
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
      // .then(res => console.log(res));

      const url = ""
      this.getToken()
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
