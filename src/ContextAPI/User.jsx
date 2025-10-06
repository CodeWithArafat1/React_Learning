import React, { useContext } from "react";
import LogOut from "./LogOut";
import { NavContext } from "./Nav";


const User = () => {
    const [user] = useContext(NavContext)
  return (
    <div className="navbar-end space-x-4">
      <h1 className="font-bold ">Arafat</h1>
     <LogOut/>
    </div>
  );
};

export default User;
