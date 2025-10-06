import React, { useReducer } from "react";
import ItemData from "./data";

import { reducer, RESET, DELETE_ALL, DELETE_ITEM } from "./reduser";

const initialeState = {
  tasks: ItemData,
};

const ReduserExample = () => {
  const [state, dispatch] = useReducer(reducer, initialeState);

  const handelDelete = (id) => {
    dispatch({ type: DELETE_ITEM, payload: { id } });
  };

  const handelDeleteAll = () => {
    dispatch({ type: DELETE_ALL });
  };
  const handelRestoreItem = () => {
    dispatch({ type: RESET });
  };
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Reduser Example</h1>
        <ul className="space-y-2">
          {state.tasks.map((item) => (
            <li key={item.id} className="w-sm flex justify-between">
              <span>{item.task}</span>
              <button className="btn" onClick={() => handelDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {state.tasks.length > 0 ? (
          <button
            className="btn btn-error text-white"
            onClick={handelDeleteAll}
          >
            Delete All
          </button>
        ) : (
          <button
            className="btn btn-primary text-white"
            onClick={handelRestoreItem}
          >
            Restore Item
          </button>
        )}
      </div>
    </>
  );
};

export default ReduserExample;
