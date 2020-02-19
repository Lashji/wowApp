import React from "react";
import { getData } from "./ApiHandler";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getData = async () => {
  //   return await getData("3v3");
  // };

  async buildLeaderboard(response) {
    console.log("building leaderboard", response);
    this.setState({
      leaderboard: response.data
    });
  }

  componentDidMount = () => {
    getData("3v3").then(res => this.buildLeaderboard(res));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
