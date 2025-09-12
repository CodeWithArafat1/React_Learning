import React, { useState } from "react";
import Todo from "./Todo";

const UserList = () => {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState([]);

  const formHandeler = (e) => {
    e.preventDefault();
    const newUser = input.trim();

    if (newUser) {
      setUserList((prev) => {
        return [
            ...prev,
            {
            id: Date.now(),
            name: newUser,
          },
        ];
      });
    }

    setInput("");
  };
  const deleteUser = (id) => {
    const newUsers = userList.filter((user) => user.id !== id);
    setUserList(newUsers);
  };
  return (
    <>
      <div className="flex items-center flex-col max-w-5/12 mx-auto">
        <h1 className="text-5xl font-bold text-orange-600 mt-2 mb-20">
          Todo App
        </h1>

        <form
          action=""
          className="w-full space-y-5"
          onSubmit={(e) => {
            formHandeler(e);
          }}
        >
          <div className="flex gap-5">
            <input
              type="text"
              className="outline-0 border-2 rounded w-full border-orange-600 px-2"
              placeholder="write your task"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  formHandeler;
                }
              }}
            />
            <button
              type="submit"
              className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {userList.map((ele) => {
        return <Todo key={ele.id} item={ele} onDelete={deleteUser} />;
      })}
    </>
  );
};

export default UserList;
