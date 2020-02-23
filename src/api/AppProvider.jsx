import React from "react";
import { getData, getClassIcons, getSpecIcons } from "./ApiHandler";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async buildLeaderboard(response) {
    console.log("building leaderboard", response.data[0].players);
    this.setState({
      leaderboard: response.data[0].players
    });
  }

  componentDidMount = () => {
    getData("3v3").then(res => this.buildLeaderboard(res));
    getClassIcons().then(res =>
      this.setState({ ...this.state, classIcons: res[0].data })
    );
    getSpecIcons().then(res =>
      this.setState({ ...this.state, specIcons: res[0].data })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
