import { use } from "react";
import PlearCard from "./PlearCard";

const Playears = ({ fetchData, setPlayearsPrice,playearsPrice,setPursesedPlayers ,pursesedPlayers}) => {
  const rowData = use(fetchData);
 const PlayearsData = rowData.players

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {PlayearsData.map((playear) => (
          <PlearCard
            key={playear.id}
            playear={playear}
            setPursesedPlayers={setPursesedPlayers}
            setPlayearsPrice={setPlayearsPrice}
            playearsPrice={playearsPrice}
            pursesedPlayers={pursesedPlayers}
          />
        ))}
      </div>
    </>
  );
};

export default Playears;
