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
        // return <Container></Container>;
        console.log("leaderboard: ", leaderboard);
        if (!leaderboard) return <div>LOADING LEADERBOARD</div>;
        let slicedData = leaderboard[0].players;
        console.log("slicedData", slicedData);

        return slicedData.map(c => (
          <LeaderboardItem key={c.general.id} player={c} />
        ));
      }}
    </AppContext.Consumer>
  );
};
