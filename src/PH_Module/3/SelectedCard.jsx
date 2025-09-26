const SelectedCard = ({
  player,
  pursesedPlayers,
  setPursesedPlayers,
  setPlayearsPrice,
}) => {
  const handelDelete = () => {
    setPlayearsPrice((prev) => prev + player.priceUSD);
    const newPlayers = pursesedPlayers.filter((p) => {
      return p.id !== player.id;
    });
    setPursesedPlayers(newPlayers);
  };
  return (
    <div className="flex justify-between items-center border border-orange-500 p-3">
      <div className="flex gap-5 items-center">
        <figure>
          <img src={player.image} alt="" className="w-24" />
        </figure>

        <div className="">
          <h1>{player.name}</h1>
          <p>{player.battingStyle}</p>
        </div>
      </div>
      <div className="">
        <button
          className="btn btn-secondary"
         
          onClick={handelDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
