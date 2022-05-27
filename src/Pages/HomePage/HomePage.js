import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import car_image from "../../Assets/Img/img_car.png";
import service_image from "../../Assets/Img/img_service.png";
import checklist_icon from "../../Assets/Img/Group 53.png";
import complete from "../../Assets/Img/icon_complete.png";
import twentyfour from "../../Assets/Img/icon_24hrs.png";
import price from "../../Assets/Img/icon_price.png";
import pro from "../../Assets/Img/icon_professional.png";

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
                  <img src={service_image} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col col-lg-6 col-sm-12 col-12 pt-3 service-content2">
                <div className="service-content2-container">
                  <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                  <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                    harga lebih murah dibandingkan yang lain, kondisi mobil
                    baru, serta kualitas pelayanan terbaik untuk perjalanan
                    wisata, bisnis, wedding, meeting, dll.
                  </p>
                  <div className="service-content2-list">
                    <div className="d-flex justify-content-start">
                      <img src={checklist_icon} alt="" />
                      <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <img src={checklist_icon} alt="" />
                      <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <img src={checklist_icon} alt="" />
                      <p>Sewa Mobil Jangka Panjang Bulanan</p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <img src={checklist_icon} alt="" />
                      <p>Gratis Antar - Jemput Mobil di Bandara</p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <img src={checklist_icon} alt="" />
                      <p>Layanan Airport Transfer / Drop In Out</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-3">
          <div class="why-us">
            <h4>Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div class="why-us-card">
              <div class="row">
                <div class="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div class="d-flex justify-content-center">
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <img src={complete} class="pt-2" alt="" />
                        <h5 class="card-title pt-4">Mobil Lengkap</h5>
                        <p class="card-text">
                          Tersedia banyak pilihan mobil, kondisi masih baru,
                          bersih dan terawat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div class="d-flex justify-content-center">
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <img src={price} class="pt-2" alt="" />
                        <h5 class="card-title pt-4">Mobil Lengkap</h5>
                        <p class="card-text">
                          Harga murah dan bersaing, bisa bandingkan harga kami
                          dengan rental mobil lain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div class="d-flex justify-content-center">
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <img src={twentyfour} class="pt-2" alt="" />
                        <h5 class="card-title pt-4">Mobil Lengkap</h5>
                        <p class="card-text">
                          Siap melayani kebutuhan Anda selama 24 jam nonstop.
                          Kami juga tersedia di akhir minggu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div class="d-flex justify-content-center">
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <img src={pro} class="pt-2" alt="" />
                        <h5 class="card-title pt-4">Mobil Lengkap</h5>
                        <p class="card-text">
                          Sopir yang profesional, berpengalaman, jujur, ramah
                          dan selalu tepat waktu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-4">
            <div class="testimoni">
                <div class="text-center">
                    <h4 class="pt-3">Testimonial</h4>
                    <p class="pt-3 pb-3">Berbagai review positif dari para pelanggan kami</p>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};
