import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../Assets/Components/NavBar/NavBar";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import { SideBar2 } from "../../Assets/Components/SideBar/SideBar2";
import "./dashboard.css";

export const Dashboard = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const Token = sessionStorage.getItem("Token");
    if (!Token) {
      navigate(`/`);
    }
  }, []);

  return (
    <div>
      <div className="container-dashboard-main">
        <SideBar />
        <div className="dashboard-right">
          <NavBar />
          <div className="content-right">
            <div className="sidebar-right">
              <SideBar2 />
            </div>
            <h1>Selamat datang di Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
