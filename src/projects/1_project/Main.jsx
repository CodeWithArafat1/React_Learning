import React, { useState } from "react";
const Main = () => {
  const [count, setState] = useState(0);

  const incriment = () => {
    setState((previous) => {
      return previous + 1;
    });
  };
  const dicriment = () => {
    setState((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const reset = () => {
    setState((prev) => (prev > 0 ? 0 : prev));
  };

  const dubble = () => {
    setTimeout(() => {
      setState((prev) => {
        return prev * 2;
      });
    }, 3000);
  };
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-5xl text-red-600">{count}</h1>
        <div className="flex gap-5">
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
            onClick={incriment}
          >
            Incrise
          </button>
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
            onClick={dicriment}
          >
            Dicremine
          </button>
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
            onClick={reset}
          >
            reset
          </button>
          <button
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
            onClick={dubble}
          >
            Dubble
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
