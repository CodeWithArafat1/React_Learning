import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
const showMessage = {
  error: "bg-red-500 text-white",
  success: "bg-green-500 text-white",
};

const TaskKeeper = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("task");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [aleart, setAleart] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [isEditing, setIsEditiong] = useState(false);
  const [editingID, setEditingID] = useState(null);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const input = inputValue.trim();

    if (input === "") {
      setAleart({
        show: true,
        message: `Input con't be empty`,
        type: "error",
      });
      return;
    }

    const newTask = {
      id: Date.now(),
      task: inputValue,
    };

    setTasks([...tasks, newTask]);
    setAleart({ show: true, message: "Task Added", type: "success" });

    if (isEditing) {
      const updatedTask = tasks.map((task) => {
        if (task.id === editingID) {
          setAleart({ show: true, message: "Task Updated", type: "success" });
          return { ...task, task: input };
        } else {
          return task;
        }
      });
      setIsEditiong(false);

      setTasks(updatedTask);
    }

    setInputValue("");
  };

  // Delete All
  const handelClearAll = () => {
    setTasks([]);
  };
  // Delete Task
  const handelDelete = (id) => {
    const deletedTask = tasks.filter((t) => t.id !== id);
    setTasks(deletedTask);
    setAleart({ show: true, message: "Remove Successfuly", type: "success" });
  };

  // Edit Task
  const handelEdit = (task, id) => {
    setInputValue(task);
    setEditingID(id);
    setIsEditiong(true);
  };

  useEffect(() => {
    let timeId;
    if (aleart.show) {
      timeId = setTimeout(() => {
        setAleart({
          show: false,
          message: "",
          type: "",
        });
      }, 2000);
    }

    return () => clearTimeout(timeId);
  }, [aleart.show]);

  return (
    <>
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className=" h-12">
            {aleart.show && (
              <div
                className={`text-black h-12 ${
                  showMessage[aleart.type]
                } text-center flex items-center justify-center rounded-lg`}
              >
                {aleart.message}
              </div>
            )}
          </div>
          <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
            TASK KEEPER
          </h1>

          <form
            class="flex flex-col mb-4"
            onSubmit={handelSubmit}
            onChange={(e) => setInputValue(e.target.value)}
          >
            <input
              type="text"
              placeholder="Enter task name"
              class="border border-gray-300 p-3 rounded-md text-black  mb-3"
              value={inputValue}
            />
            <button
              class="bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-700 transition duration-200"
              type="submit"
            >
              {isEditing ? "UPDATE TASK" : "ADD TASK"}
            </button>
          </form>

          {tasks.length === 0 ? (
            <div className="h-96 flex justify-center items-center">
              <h1 className="text-gray-400">No Task Added</h1>
            </div>
          ) : (
            <div class="space-y-3 h-96 overflow-y-auto">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  {...task}
                  id={task.id}
                  handelDelete={handelDelete}
                  handelEdit={handelEdit}
                />
              ))}
            </div>
          )}
          {tasks.length >= 2 && (
            <div class="mt-6">
              <button
                class="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition duration-200"
                onClick={handelClearAll}
              >
                CLEAR ALL TASKS
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskKeeper;
