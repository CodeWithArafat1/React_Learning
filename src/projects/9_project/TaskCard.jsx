import React from "react";

const TaskCard = ({ task, handelDelete, id, handelEdit }) => {
  return (
    <>
      <div class="bg-white border border-gray-200 p-3 rounded-md flex justify-between items-center shadow-sm">
        <p class="text-gray-700">{task}</p>
        <div class="flex space-x-2">
          <button
            class="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-200"
            onClick={() => handelEdit(task, id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
              />
            </svg>
          </button>
          <button
            class="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
            onClick={() => handelDelete(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
