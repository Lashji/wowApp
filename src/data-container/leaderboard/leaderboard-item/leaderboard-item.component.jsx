import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ImgContainer = styled.div`
  height: 50px;
  display: inline-block;
`;

const LeaderboardItem = ({ player }) => {
  const { name, rank } = player.general;
  const c = player.general.class.name.toLowerCase();
  console.log("Player", player);
  let path = `http://localhost:3000/images/classIcons/${c}.jpg`;
  return (
    <Container>
      <p>
        {rank} - {name}{" "}
        <ImgContainer>
          <img src={path} />
        </ImgContainer>
      </p>
    </Container>
  );
};

export default LeaderboardItem;
