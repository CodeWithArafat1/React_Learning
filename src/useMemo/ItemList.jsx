import React, { memo } from "react";

const ItemList = ({ users,handelDelete }) => {
  return (
    <div className=" space-y-5">
      {users.map((user, index) => {
        return (
          <p key={index}>
            {user} <button className="btn btn-error ml-20" onClick={()=> handelDelete(index)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default memo(ItemList);
