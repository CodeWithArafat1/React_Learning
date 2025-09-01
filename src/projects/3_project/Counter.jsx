import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrise = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const incrise2 = () => {
    setCount2((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    console.log("Vai aida ekta  side-effect");
  }, [count]);
  useEffect(() => {
    console.log("Second side-effect");
  }, [count2]);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col text-4xl">
        {count}
        <button
          onClick={incrise}
          className="bg-green-500 text-white px-3 py-1 rounded font-bold"
        >
          Incrise
        </button>
        {count2}
        <button
          onClick={incrise2}
          className="bg-green-500 text-white px-3 py-1 rounded font-bold"
        >
          Incrise
        </button>
      </div>
    </>
  );
};

export default Counter;
