import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0); // Example cart count, you can update this as needed
  const username = "John Doe"; // Example username, you can replace it with the actual username

  const activeLinkStyle = {
    backgroundColor: "#007bff", // Example background color for the active link
    color: "#fff", // Example text color for the active link
    // Add any other styles you want for the active link
  };

  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">Reeco</div>
        <NavLink to="/store" className="nav-link" activestyle={activeLinkStyle}>
          Store
        </NavLink>
        <NavLink
          to="/orders"
          className="nav-link"
          activestyle={activeLinkStyle}
        >
          Orders
        </NavLink>
        <NavLink
          to="/analytics"
          className="nav-link"
          activestyle={activeLinkStyle}
        >
          Analytics
        </NavLink>
      </div>
      <div className="right">
        <NavLink to="/orders" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartCount}</span>
        </NavLink>
        <div className="user">{username}</div>
      </div>
    </div>
  );
};

export default Navbar;
