import React from "react";
import logo from "../../assets/logo.png";

const Navbar = ({playearsPrice}) => {
  return (
    <div className="navbar flex justify-between">
      <div className="">
        <a className="" href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <div className=" space-x-5">
          <a href="#">Home</a>
          <a href="#">Fixture</a>
          <a href="#">Teams</a>
          <a href="#">Schedule</a>
          <button className="btn">{playearsPrice} Coin</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
