import React, { useEffect, useState } from "react";

const CleanupExample = () => {
  const [toggle, setToggle] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <h1>Cleanup Example</h1>

      <div className="">
        <button className="btn btn-error text-white" onClick={handelToggle}>
          Toggle
        </button>
      </div>

      {toggle && (
        <div>
          <Hello />
        </div>
      )}
    </>
  );
};

const Hello = () => {
  useEffect(() => {
    console.log("Hello component is mounted");

    const interValId = setInterval(() => {
      console.log("Hello form Set Interval");
    }, 1000);

    return () => {
      clearInterval(interValId);
    };
  }, []);
  return <h1>Hello world</h1>;
};

export default CleanupExample;
