import React from "react";

const Available = ({ setIsSelected, isSelected,pursesedPlayers }) => {
   
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{isSelected? 'Available Players': `Selected Players (${pursesedPlayers.length}/6)`}</h1>

        <div className="flex gap-0">
          <button
            className={`btn ${
              isSelected ? "bg-blue-500 text-white" : ""
            } rounded-l-md rounded-r-0`}
            onClick={() => setIsSelected(true)}
          >
            Available
          </button>
          <button
            className={`btn  ${
              isSelected ? "" : "bg-blue-500 text-white"
            } rounded-r-md rounded-l-0`}
            onClick={() => setIsSelected(false)}
          >
            Selected ({pursesedPlayers.length})
          </button>
        </div>
      </div>
    </>
  );
};

export default Available;
