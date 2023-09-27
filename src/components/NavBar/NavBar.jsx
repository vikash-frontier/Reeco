import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const username = "Vikash";

  const activeLinkStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
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
        <div className="user">
          {`Hello ${username}`}
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
