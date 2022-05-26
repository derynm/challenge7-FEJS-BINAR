import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarCard } from "../../Assets/Components/Card/CarCard";
import { NavBar } from "../../Assets/Components/NavBar/NavBar";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import { SideBar2 } from "../../Assets/Components/SideBar/SideBar2";
import right from "../../Assets/Img/Vector.png";
import plus from "../../Assets/Img/fi_plus.png";
import "./dashboard.css";
import { Button } from "react-bootstrap";

export const Dashboard = () => {
  let navigate = useNavigate();
  const [DataMobil, setDataMobil] = useState([]);
  const [AddDataStat, setAddDataStat] = useState("not")
  var axios = require("axios");

  useEffect(() => {
    const Token = sessionStorage.getItem("Token");
    if (!Token) {
      navigate(`/`);
    }

    fetchDataMobil();
  }, []);

  const fetchDataMobil = () => {
    var config = {
      method: "get",
      url: "https://rent-car-appx.herokuapp.com/admin/car",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setDataMobil(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleMobil = (data) => {
    let dataValue = data;
    return dataValue.map((value, index) => {
      return (
        <CarCard image={value.image} carName={value.name} price={value.price} />
      );
    });
  };

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
            <div id="card-db">
              <div className="dir">
                <p className="main">Cars </p>
                <img src={right} />
                <p>List car</p>
              </div>
              <div className="title-button">
                <h4 className="main">List Car</h4>
                <Button variant="primary" onClick={()=>{}}>
                  <img src={plus} />
                  Add New Car
                </Button>
              </div>
              <div className="btn-grp">
                <Button variant="outline-primary">All</Button>
                <Button variant="outline-primary">Small</Button>
                <Button variant="outline-primary">Medium</Button>
                <Button variant="outline-primary">Large</Button>
              </div>
              <div id="card-holder">{handleMobil(DataMobil)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
