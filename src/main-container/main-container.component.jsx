import React, { Component } from "react";
import "./main-container.css";
import SideBar from "../side-bar/side-bar.component";
import DataContainer from "../data-container/data-container.component";

class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mainContainer">
        {/* <h1>MainContainer</h1> */}
        <SideBar></SideBar>
        <DataContainer></DataContainer>
      </div>
    );
  }
}

export default MainContainer;
