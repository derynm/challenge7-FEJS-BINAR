import React from "react";
import "./NavBar.css";
import logo_nav from "../../../Assets/Img/logo.png";
import menu_icon from "../../../Assets/Img/fi_menu.png";
import account_icon from "../../../Assets/Img/Group 15.png";
import drop_icon from "../../../Assets/Img/down.png";

export const NavBar = () => {
  return (
    <div>
      <div id="navbar-main">
        <div className="container-navbar-main">
          <div className="container-navbar-left">
            <img src={logo_nav} alt="logo navbar" />
            <img src={menu_icon} alt="menu navbar" />
          </div>
          <div className="container-navbar-right">
            <div className="search-navbar">
              <input type="text" />
              <button>Search</button>
            </div>
            <div className="account-navbar">
              <img src={account_icon} alt="account icon" />
              <p> Unis Badri</p>
              <img src={drop_icon} alt="drop icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
