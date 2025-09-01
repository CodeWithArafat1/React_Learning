import { useState } from "react";
import todoData from "./todoData";

const TodoApp = () => {
  const [data, seData] = useState(todoData);
  const [inputValue, setInput] = useState("");
  const removeItem = (id) => {
    seData((prev) => prev.filter((ele) => ele.id !== id));
  };

  const addItem = () => {
    if(!inputValue.trim()) return
    const newData = {
      id: data.length + 1,
      task: inputValue.trim(),
    };
    seData((prev) => {
      return [newData, ...prev];
    });
    setInput("");
  };

  const clearAll = (item) => {
    if (item.length > 2) {
      seData([]);
    }
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
              type="text"
              className="outline-0 border-2 rounded w-full border-orange-600 px-2"
              placeholder="write your task"
              value={inputValue}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              onClick={addItem}
              className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
          {data.map((item) => {
            return (
              <p
                key={item.id}
                className="items-center border px-4 flex justify-between p-2 border-orange-600 rounded"
              >
                
                {item.task}
                <button
                  className="bg-red-600 cursor-pointer text-white px-5 py-1 rounded-lg"
                  onClick={() => removeItem(item.id)}
                >
                  delete
                </button>
              </p>
            );
          })}
          {data.length > 2 && (
            <button
              className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg"
              onClick={() => clearAll(data)}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
