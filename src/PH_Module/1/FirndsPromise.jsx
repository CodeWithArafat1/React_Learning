import React, { use } from "react";

const FirndsPromise = ({promiseMessage}) => {
  const firends = use(promiseMessage)
  console.log(firends);
  return <>
    <div className="">
      <h1 className="text-2xl font-bold">Total Firends: {firends.length}</h1>

      {
        firends.map((firend)=>{
          return <div key={firend.id}>
            <div className="pb-4">
              <h1 className="text-xl font-bold">Name: <span className="font-normal">{firend.name}</span></h1>
            <h1 className="text-xl font-bold">Email: <span className="font-normal">{firend.email}</span></h1>
            </div>
          </div>
        })
      }
    </div>
  </>;
};

export default FirndsPromise;
