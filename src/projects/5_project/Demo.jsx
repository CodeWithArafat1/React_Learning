import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState({});

  const toggleBtn = (id) => {
    setToggle((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3000/destinations";
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl py-5">Destinations</h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          {data.map((ele) => {
            const toggleElement = toggle[ele.id];
            return (
              <div className="max-w-md" key={ele.id}>
                <figure>
                  <img className="rounded-md" src={ele.image} alt="" />
                </figure>
                <div className="py-4 space-y-4">
                  <h1 className="text-2xl font-bold">{ele.name}</h1>
                  <p>
                    {toggleElement ? (
                      <>
                        {ele.description}
                        <span
                          className="font-bold cursor-pointer"
                          onClick={() => {
                            toggleBtn(ele.id);
                          }}
                        >
                         Hide...
                        </span>
                      </>
                    ) : (
                      <>
                        {ele.description.slice(0, 100)}
                        <span
                          className="font-bold cursor-pointer"
                          onClick={() => {
                            toggleBtn(ele.id);
                          }}
                        >
                          {' '} Show More...
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Demo;
