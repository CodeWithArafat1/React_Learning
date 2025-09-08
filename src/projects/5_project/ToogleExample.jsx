import React, { useState } from "react";

const ToogleExample = () => {
  const [on, seOn] = useState(false);
  const toggle = () => {
    seOn(!on)
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      {
        on ? (<h1>On</h1>) : (<h1>off</h1>)
      }
    </div>
  );
};

export default ToogleExample;
