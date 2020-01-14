import React, { Component } from "react";
import styled from "styled-components";
import "./data-area.css";
import { AppContext } from "../../api/AppProvider";
import Leaderboard from "../leaderboard/leaderboard.component";
class DataArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ token }) => {
          if (!token) return <div>LOADING</div>;
          {
            console.log(token);
          }
          return (
            <div className="dataArea">
              <Leaderboard />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default DataArea;
