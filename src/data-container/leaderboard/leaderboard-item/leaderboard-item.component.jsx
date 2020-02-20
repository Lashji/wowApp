import React from "react";
import styled from "styled-components";
const LeaderboardItem = ({ player }) => {
  const { name, rank } = player.general;

  console.log("Player", player);
  return (
    <div>
      <p>
        {rank} - {name}
      </p>
    </div>
  );
};

export default LeaderboardItem;
