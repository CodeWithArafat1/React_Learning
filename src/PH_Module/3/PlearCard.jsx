import { toast } from "react-toastify";

const PlearCard = ({
  playear,
  setPlayearsPrice,
  playearsPrice,
  setPursesedPlayers,
  pursesedPlayers,
}) => {
  const isSelected = pursesedPlayers.some(
    (purchasedPlayer) => purchasedPlayer.id === playear.id
  );
  const handelPrice = () => {
    if (playearsPrice < playear.priceUSD) {
      toast("Balance is low");
      return;
    }
    if (pursesedPlayers.length === 6) {
      toast("You Alrady Selected 6 players");
      return;
    }
    setPursesedPlayers((prev) => [...prev, playear]);
    setPlayearsPrice((prev) => prev - playear.priceUSD);
  };
  return (
    <>
      <div className="card bg-base-100  shadow-sm" key={playear.id}>
        <figure>
          <img src={playear.image} alt="Shoes" className="" />
        </figure>
        <div className="py-5 space-y-5 px-2">
          <h2 className="card-title">{playear.name}</h2>
          <div className="flex justify-between w-full">
            <p>{playear.country}</p>
            <p>{playear.role}</p>
          </div>

          <h2 className="card-title">Rating</h2>

          <div className="">
            <div className="flex justify-between">
              <p>{playear.battingStyle}</p>
              <p>{playear.bowlingStyle}</p>
            </div>

            <div className="flex justify-between py-5">
              <p>Price: ${playear.priceUSD}</p>
              <button
                disabled={isSelected}
                className="btn"
                onClick={handelPrice}
              >
                {isSelected ? "Selected" : "Choose Playear"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlearCard;
