import { useEffect, useState } from "react";
import axios from "axios";
const Destinations = () => {
  const [data, setData] = useState([]);
  const [toggleEffect, setToggleEffect] = useState({});

  const toggle = (id) => {
    setToggleEffect((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  try {
    useEffect(() => {
      const fetchData = async () => {
        const url = "http://localhost:3000/destinations";
        const res = await axios.get(url);
        setData(res.data);
      };
      fetchData();
    }, []);
  } catch (err) {
    console.log(err);
  }
  return (
    <>
      <div className="">
        <h1 className="text-center font-bold text-5xl py-10">Destinations</h1>
        {/* <ToogleExample/> */}
        <div className="flex justify-center flex-col items-center space-y-4">
          {data.map((ele) => {
            const isToggle = toggleEffect[ele.id];
            return (
              <div key={ele.id} className="space-y-3 max-w-sm">
                <figure>
                  <img src={ele.image} alt="" className="" />
                </figure>
                <h1 className="font-bold text-xl">{ele.name}</h1>
                <p className="">
                  {isToggle
                    ? ele.description
                    : ele.description.slice(0, 100) + "..."}
                </p>
                <p className="">{isToggle && ele.location}</p>
                <button
                  onClick={() => {
                    toggle(ele.id);
                  }}
                  className="bg-blue-600 px-5 py-1 rounded cursor-pointer text-white"
                >
                  {isToggle ? "Show Less" : "Show more"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destinations;
