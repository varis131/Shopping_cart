import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="navbar">
      
      <NavLink to="/" className="navbar-logo">
        <img src="/logo.png" alt="Ecomzy" />
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/cart" className="nav-cart">
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

