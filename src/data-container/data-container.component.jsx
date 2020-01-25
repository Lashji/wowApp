import React, { Component } from "react";
import "./data-container.css";
import NavBar from "./data-navbar/data-navbar.component";
import DataArea from "./data-area/data-area.component";
import { AppContext } from "../api/AppProvider";


class DataContainer extends Component {
  constructor() {
    super();
  }

  buildSideBar() {
    console.log("buildSideBar");
  }

  componentDidMount() {
    this.buildSideBar();
  }

  render() {
    return (
      <div className="dataContainer">
        <NavBar></NavBar>
        <DataArea></DataArea>
      </div>
    );
  }
}

export default DataContainer;
