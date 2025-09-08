import { useState } from "react";
import todoData from "./todoData";

const TodoApp = () => {
  const [data, setData] = useState(todoData);
  const [inputValue, setInput] = useState("");
  const addItem = () => {
    if(!inputValue) return
    const newData = {
      id: data.length + 1,
      task: inputValue,
    };
    setData((prev) => [newData, ...prev]);
    setInput('')
  };
  const deleteItem = (id) => {
    setData((prev) => prev.filter((ele) => ele.id !== id));
  };
  return (
    <>
      <div className="flex items-center flex-col max-w-5/12 mx-auto">
        <h1 className="text-5xl font-bold text-orange-600 mt-2 mb-20">
          Todo App

        </h1>
        <div className="w-full space-y-5">
          <div className="flex gap-5">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={inputValue}
              type="text"
              className="outline-0 border-2 rounded w-full border-orange-600 px-2"
              placeholder="write your task"
            />
            <button
              onClick={addItem}
              className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          </div>

          {data.map((ele) => {
            return (
              <p
                key={ele.id}
                className="items-center border px-4 flex justify-between p-2 border-orange-600 rounded"
              >
                {ele.task}
                <button
                  onClick={() => {
                    deleteItem(ele.id);
                  }}
                  className="bg-red-600 cursor-pointer text-white px-5 py-1 rounded-lg"
                >
                  delete
                </button>
              </p>
            );
          })}

          <button className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg">
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
