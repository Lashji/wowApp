import React from "react";

const LeaderboardItem = ({ player }) => {
  const { name, rank } = player.general;

  console.log("Player", player);
  return (
    <div>
      <p>
        {rank} - Name: {name}
      </p>
    </div>
  );
};

export default LeaderboardItem;
