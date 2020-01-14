import React from "react";
import { getToken, getPVPLeaderBoard, doCharRequest } from "./ApiHandler";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAuthToken = async () => {
    return await getToken();
  };

  async buildLeaderboard(data) {
    let entries = data.data.entries.slice(0, 10);
    console.log(entries);

    let promises = [];

    for (let i = 0; i < entries.length; i++) {
      let region = "eu";
      let realm = entries[i].character.realm.slug;
      let name = entries[i].character.name;
      if (!realm || !name) continue;
      let char = await doCharRequest(region, realm, name, this.state.token);
      promises.push(char);
    }

    let d = await Promise.all(promises);
    console.log("promis data", d);
    this.setState({
      leaderboard3: d
    });
  }

  componentDidMount = () => {
    if (!this.state.token)
      this.getAuthToken().then(results => {
        this.setState({ token: results.data });

        if (!this.state.token) return;
        let leaderboard = getPVPLeaderBoard(this.state.token).then(res => {
          console.log("leaderboard: ", res);
          this.buildLeaderboard(res);
        });
        //   console.log("auth token ", results);
      });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
