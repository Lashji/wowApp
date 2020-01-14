import React, { Component } from "react";
import "./main-container.scss";
import SideBar from "../side-bar/side-bar.component";
import DataContainer from "../data-container/data-container.component";
import { AppContext } from "../api/AppProvider";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <SideBar></SideBar>
        <DataContainer></DataContainer>
      </div>
    );
  }
}

export default MainContainer;
