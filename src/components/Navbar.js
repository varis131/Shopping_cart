import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-gray-900">
      <NavLink to={"/"}>
        <div>
          <img className="" src="/logo.png" alt="logo" />
        </div>
      </NavLink>

      <div>
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
