import React, { use } from "react";

const FirndsPromise = ({promiseMessage}) => {
  const firends = use(promiseMessage)
  console.log(firends);
  return <>
    <div className="">
      <h1>Firends: {firends.length}</h1>
    </div>
  </>;
};

export default FirndsPromise;
