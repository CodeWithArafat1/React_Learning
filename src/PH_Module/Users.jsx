import React, { Suspense } from "react";
import FirndsPromise from "./FirndsPromise";

const FetchFirends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Users = () => {
    const friendsPromise  = FetchFirends()
  return (
    <>
      <div className="">
        <h1 className="text-4xl font-bold text-center">User Lists</h1>

        <div className="">
          <Suspense fallback={"loading..."}>
            <FirndsPromise promiseMessage={friendsPromise}/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Users;
