import React from "react";
import styled from "styled-components";
import { AppContext } from "../../api/AppProvider";
import LeaderboardItem from "./leaderboard-item/leaderboard-item.component";
const Container = styled.div`
  background-color: steelblue;
`;

export default () => {
  return (
    <AppContext.Consumer>
      {({ leaderboard }) => {
        console.log("leaderboard: ", leaderboard);
        if (!leaderboard) return <div>LOADING LEADERBOARD</div>;

        const lb = leaderboard
          .filter(c => c.general !== undefined)
          .map(c => <LeaderboardItem key={c.general.id} player={c} />);

        return <Container>{lb}</Container>;
      }}
    </AppContext.Consumer>
  );
};
