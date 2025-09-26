import React from "react";
import SelectedCard from "./SelectedCard";
const Selected = ({ pursesedPlayers, setPursesedPlayers ,setPlayearsPrice}) => {
  
  return (
    <>
      {pursesedPlayers.map((player) => (
        <SelectedCard
          key={player.id}
          player={player}
          pursesedPlayers={pursesedPlayers}
          setPursesedPlayers={setPursesedPlayers}
          setPlayearsPrice={setPlayearsPrice}
        />
      ))}
    </>
  );
};

export default Selected;
