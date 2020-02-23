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
      {({ leaderboard, specIcons }) => {
        console.log("leaderboard: ", leaderboard);
        if (!leaderboard || !specIcons) return <div>LOADING LEADERBOARD</div>;
        console.log("specicons in lb", specIcons);
        const lb = leaderboard
          .filter(c => c.general !== undefined)
          .map(c => <LeaderboardItem key={c.general.id} player={c} />);

        return <Container>{lb}</Container>;
      }}
    </AppContext.Consumer>
  );
};
