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
import { ModalSucces } from "../../Assets/Components/Modal/ModalSucces";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

export const Dashboard = () => {
  let navigate = useNavigate();
  const [DataMobil, setDataMobil] = useState([]);
  const [AddDataStat, setAddDataStat] = useState("not");
  const [SuccessAddStat, setSuccessAddStat] = useState(false);
  const [CekStat, setCekStat] = useState(false)

  const [TipeInput, setTipeInput] = useState(null);
  const [NamaInput, setNamaInput] = useState(null);
  const [HargaInput, setHargaInput] = useState(null);
  const [FotoInput, setFotoInput] = useState(null);

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status ==="done") {
      setCekStat(true)
  }
  };
  const handleSubmit = (files, allFiles) => {
    console.log(files[0].file)
    setFotoInput(files[0].file)
    console.log(FotoInput)
  };

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

  const handleStateInput = (e) => {
    if (e.target.id === "tipe-input") {
      setTipeInput(e.target.value);
    } else if (e.target.id === "nama-input") {
      setNamaInput(e.target.value);
    } else if (e.target.id === "harga-input") {
      setHargaInput(e.target.value);
    } else if (e.target.id === "foto-input") {
      setFotoInput(e.target.files[0]);
    }
  };

  const handleMobil = (data) => {
    let dataValue = data;
    return dataValue.map((value, index) => {
      return (
        <CarCard image={value.image} carName={value.name} price={value.price} />
      );
    });
  };

  const postToApi = () => {
    const NamaHandle = NamaInput;
    const HargaHandle = HargaInput;
    const TipeHandle = TipeInput;
    const FotoHandle = FotoInput;
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", NamaHandle);
    data.append("category", TipeHandle);
    data.append("price", HargaHandle);
    data.append("status", "true");
    data.append("image", FotoHandle);

    var config = {
      method: "post",
      url: "https://rent-car-appx.herokuapp.com/admin/car",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setAddDataStat("not");
        setSuccessAddStat(true);
        fetchDataMobil();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {/* {console.log(TipeInput,NamaInput,FotoInput,HargaInput)} */}
      <div className="container-dashboard-main">
        <SideBar />
        <div className="dashboard-right">
          <NavBar />
          <div className="content-right">
            <div className="sidebar-right">
              <SideBar2 />
            </div>

            {AddDataStat === "not" ? (
              <div id="card-db">
                <div className="dir">
                  <p className="main">Cars </p>
                  <img src={right} alt="" />
                  <p>List car</p>
                </div>
                <div className="title-button">
                  <h4 className="main">List Car</h4>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setAddDataStat("show");
                    }}
                  >
                    <img src={plus} alt="" />
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
            ) : (
              <div id="edit-frm">
                <div className="dir">
                  <p className="main">Cars </p>
                  <img src={right} alt="" />
                  <p className="main">List car</p>
                  <img src={right} alt="" />
                  <p>Add New Car</p>
                </div>
                <h4 className="main">Add New Car</h4>
                <div id="frm-btn">
                  <div id="edit-frm-main">
                    <div className="input-add">
                      <label>Nama*</label>
                      <input
                        type="text"
                        id="nama-input"
                        onChange={(e) => {
                          handleStateInput(e);
                        }}
                        required
                      />
                    </div>
                    <div className="input-add">
                      <label>Harga*</label>
                      <input
                        type="number"
                        id="harga-input"
                        onChange={(e) => {
                          handleStateInput(e);
                        }}
                        required
                      />
                    </div>
                    <div className="input-add">
                      <label>Tipe*</label>
                      <select
                        id="tipe-input"
                        onChange={(e) => {
                          handleStateInput(e);
                        }}
                        required
                      >
                        <option>Pilih tipe</option>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                      </select>
                    </div>
                    <div className="input-add input-file">
                      <label>Foto*</label>
                      {/* <input
                        type="file"
                        id="foto-input"
                        onChange={(e) => {
                          handleStateInput(e);
                        }}
                        required
                      /> */}
                      <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="image/*"
                      />
                    </div>

                  </div>

                  <div className="btn-grp-edit">
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setAddDataStat("not");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        postToApi();
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {SuccessAddStat ? (
        <ModalSucces
          visibility={() => {
            setSuccessAddStat(false);
          }}
        />
      ) : null}
    </div>
  );
};
