import React, { useEffect, useState } from "react";
// import users from "./dumydata";
import axios from "axios";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [usersData, setUserData] = useState([]);
  const [err, setError] = useState(null);
  const loadUsers = () => {
    setLoading(true);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const URL = "https://api.github.com/users";
        const res = await axios.get(URL);
        const data = res.data.map((ele) => {
          return {
            id: ele.id,
            name: ele.login,
            email: ele.html_url,
            image: ele.avatar_url,
          };
        });

        setUserData(data);
      } catch (err) {
        setError({ status: `Network Error ${err.status}`, data: err.message });
        console.log(err.message);
      }
    };
    if (loading) {
      getUsers();
    }
  }, [loading]);

  if (err) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen text-2xl">
        <h1 className="text-red-600 text-3xl font-bold">{err.status}</h1>
        <p> {err.data || "Something went wrong!"}</p>
      </div>
    );
  }

  return (
    <div
      className={
        `flex  items-center  justify-center flex-col` +
        (loading === true ? " h-full" : " h-screen")
      }
    >
      <h1 className="text-5xl text-red-600 font-bold">User List</h1>
      {loading === true ? (
        <div className="flex gap-5 flex-col min-w-96 mt-10">
          {usersData.map((user) => {
            return (
              <div
                key={user.id}
                className="flex justify-between items-center w-full gap-5 border-2 rounded border-gray-200 px-4 py-1"
              >
                <img src={user.image} alt="" className="w-12" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-blue-700">
                    {user.name}
                  </h1>
                  {user.email}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <button
          onClick={loadUsers}
          className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
        >
          Load Users
        </button>
      )}
    </div>
  );
};

export default User;
