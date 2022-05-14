import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import car_image from "../../Assets/Img/img_car.png";
import service_image from "../../Assets/Img/img_service.png"
import checklist_icon from "../../Assets/Img/Group 53.png"

export const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const Token = sessionStorage.getItem("Token-customer");
    if (!Token) {
      navigate(`/`);
    }
  }, []);

  return (
    <div>
      <div id="section-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-xl navbar-padding-top">
            <p className="navbar-brand">LOGO</p>
            <div className="nav-custom">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse nav-custom"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#section-2">
                      Our Service
                    </a>
                  </li>
                  <div className="nav-item">
                    <a className="nav-link" href="#section-3">
                      Why Us
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link" href="#section-4">
                      Testimoni
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link" href="#section-6">
                      FAQ
                    </a>
                  </div>
                  <div className="nav-item">
                    <button type="button" className="btn btn-success">
                      Register
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-xl">
          <div className="hero">
            <div className="row">
              <div className="col col-lg-6 col-sm-12 col-12 hero-content1">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
                <button type="button" className="btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </div>
              <div className="col col-lg-6 col-sm-12 col-12 hero-content2">
                <img src={car_image} className="img-fluid img-hero" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
      <div id="section-2">
            <div className="service">
                <div className="row">
                    <div className="col col-lg-6 col-sm-12 col-12 pt-3 service-content1">
                        <div className="d-flex justify-content-evenly">
                            <img src={service_image} className="img-fluid" alt=""/>
                        </div>
                        
                    </div>
                    <div className="col col-lg-6 col-sm-12 col-12 pt-3 service-content2">
                        <div className="service-content2-container">
                            <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <div className="service-content2-list">
                                <div className="d-flex justify-content-start">
                                    <img src={checklist_icon} alt=""/>
                                    <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <img src={checklist_icon} alt=""/>
                                    <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <img src={checklist_icon} alt=""/>
                                    <p>Sewa Mobil Jangka Panjang Bulanan</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <img src={checklist_icon} alt=""/>
                                    <p>Gratis Antar - Jemput Mobil di Bandara</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <img src={checklist_icon} alt=""/>
                                    <p>Layanan Airport Transfer / Drop In Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
