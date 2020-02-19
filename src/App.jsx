import React, { Component } from "react";
import "./App.css";
import MainContainer from "./main-container/main-container.component";
import { AppProvider } from "./api/AppProvider";

class App extends Component {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AppProvider>
          <MainContainer></MainContainer>
        </AppProvider>
      </div>
    );
  }
}

export default App;
