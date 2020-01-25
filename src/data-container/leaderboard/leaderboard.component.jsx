import React from "react";
import styled from "styled-components";
import { AppContext } from "../../api/AppProvider";

const Container = styled.div`
  background-color: white;
`

export default () => {
  return (
    <AppContext.Consumer>
      {({ leaderboard3 }) => {
      
      return (
        <Container></Container>
      )
      
        // if (!leaderboard3) return <div>LOADING LEADERBOARD</div>;
        // let slicedData = leaderboard3.slice(0, 10);
        // console.log(slicedData);
        // let d = slicedData.map(c => {
        //   return [c.character.name, c.rank];
        // });
        // return d.map(c => (
        //   <div key={c}>
        //     {c[1]} - {c[0]}
        //   </div>
        // ));
      }}
    </AppContext.Consumer>
  );
};
