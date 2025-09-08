import React, { useEffect, useState } from "react";
// import users from "./dumydata";
import axios from "axios";

const User = () => {
  const [loadUser, setLoadUser] = useState(false);
  const [users, setUserData] = useState([]);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadBtn = () => {
    setLoadUser(true);
    setError(null);
    // fetchData()
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const URL = "https://api.github.com/userss";
      const res = await axios.get(URL);
      const data = res.data.map((user) => {
        return {
          name: user.login,
          id: user.id,
          image: user.avatar_url,
          email: user.html_url,
        };
      });
      setUserData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loadUser) {
      fetchData();
    }
  }, [loadUser]);
  if (err) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen text-2xl">
        <h1 className="text-red-600 text-3xl font-bold">{err.message}</h1>
        <p>"Something went wrong!"</p>

        <button
          onClick={() => {
            setError(null);
            fetchData();
          }}
          className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
        >
          Try Again Letter
        </button>
      </div>
    );
  }
  return (
    <div className={`flex  items-center  justify-center flex-col`}>
      <h1 className="text-5xl text-red-600 font-bold">User List</h1>
      {loadUser ? (
        <div className="flex gap-5 flex-col min-w-96 mt-10">
          {users.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-between items-center w-full gap-5 border-2 rounded border-gray-200 px-4 py-1"
              >
                <img src={data.image} alt="" className="w-12" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-blue-700">
                    {data.name}
                  </h1>
                  <p>{data.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <button
          onClick={loadBtn}
          className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
        >
          Load Users
        </button>
      )}

      {loading && (
        <div className="flex justify-center items-center mt-10">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default User;
