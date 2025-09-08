import { useState } from "react";
const Main = () => {
  const [count, setCount] = useState(0);
  const incrise = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const dubble = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev * 2;
      });
    }, 2000);
  };
  const dicriment = () => {
    if (count > 0) {
      setCount((prev) => {
        return prev - 1;
      });
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-5xl text-red-600">{count}</h1>
        <div className="flex gap-5">
          <button
            onClick={incrise}
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
          >
            Incrise
          </button>
          <button
            onClick={dicriment}
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
          >
            Dicremine
          </button>
          <button
            onClick={reset}
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
          >
            reset
          </button>
          <button
            onClick={dubble}
            className="bg-orange-600 px-10 py-2 rounded-md text-white font-bold cursor-pointer"
          >
            Dubble
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
