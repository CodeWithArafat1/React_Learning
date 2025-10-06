import { createContext, useMemo } from "react";
import User from "./User";
import useNavBar from "./Hooks/useNavBar";

export const NavContext = createContext({});


const Nav = () => {
    const [user, handelLogOut] = useNavBar()
    
    return (
    <NavContext.Provider value={{user, handelLogOut}}>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <h1 className="btn">Hello world </h1>
        </div>
        <User />
      </div>
    </NavContext.Provider>
  );
};

export default Nav;
