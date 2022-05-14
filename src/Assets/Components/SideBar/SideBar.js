import React from "react";
import "./sidebar.css";
import home_icon from "../../../Assets/Img/home.png";
import admin_icon from "../../../Assets/Img/admin.png";
import logo_side from "../../../Assets/Img/logo_dashboard.png";

export const SideBar = () => {
  return (
    <div>
      <div id="sidebar-main">
        <div className="container-sidebar-main">
          <img className="logo-sidebar-main" src={logo_side} alt="logo" />
          <div className="container-menu-sidebar-main">
            <img
              className="icon-sidebar-main"
              src={home_icon}
              alt="icon home"
            />
            <p>Dashboard</p>
          </div>
          <div className="container-menu-sidebar-main">
            <img
              className="icon-sidebar-main"
              src={admin_icon}
              alt="icon admin"
            />
            <p>Cars</p>
          </div>
        </div>
      </div>
    </div>
  );
};
