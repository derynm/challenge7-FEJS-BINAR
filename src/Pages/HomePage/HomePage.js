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
import { PieChart } from "../../Assets/Components/Chart/PieChart";
import facebook from "../../Assets/Img/icon_facebook.png";
import instagram from "../../Assets/Img/icon_instagram.png";
import twitter from "../../Assets/Img/icon_twitter.png";
import mail from "../../Assets/Img/icon_mail.png";
import twitch from "../../Assets/Img/icon_twitch.png";

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
                  <div className="nav-item"></div>
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
                <button type="button" className="btn btn-success" onClick={()=>{navigate(`/rental`);}}>
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
          <div className="why-us">
            <h4>Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className="why-us-card">
              <div className="row">
                <div className="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <img src={complete} className="pt-2" alt="" />
                        <h5 className="card-title pt-4">Mobil Lengkap</h5>
                        <p className="card-text">
                          Tersedia banyak pilihan mobil, kondisi masih baru,
                          bersih dan terawat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <img src={price} className="pt-2" alt="" />
                        <h5 className="card-title pt-4">Mobil Lengkap</h5>
                        <p className="card-text">
                          Harga murah dan bersaing, bisa bandingkan harga kami
                          dengan rental mobil lain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <img src={twentyfour} className="pt-2" alt="" />
                        <h5 className="card-title pt-4">Mobil Lengkap</h5>
                        <p className="card-text">
                          Siap melayani kebutuhan Anda selama 24 jam nonstop.
                          Kami juga tersedia di akhir minggu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-sm-6 col-12 pt-1">
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <img src={pro} className="pt-2" alt="" />
                        <h5 className="card-title pt-4">Mobil Lengkap</h5>
                        <p className="card-text">
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
          <div className="testimoni">
            <div className="text-center">
              <h4 className="pt-3">Testimonial</h4>
              <p className="pt-3 pb-3">
                Berbagai review positif dari para pelanggan kami
              </p>
            </div>
            <div className="chart-mobil">
              <PieChart />
            </div>
          </div>
        </div>
        <div id="section-5 ">
          <div className="sewa d-flex justify-content-center">
            <div className="sewa-banner text-center">
              <div className="row pt-5 pb-5">
                <div className="col lg-12 col-sm-12 col-12 pt-3 pb-3">
                  <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                </div>
                <div className="col lg-12 col-sm-12 col-12 d-flex justify-content-center pb-5">
                  <p className="custom-banner-content1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <div className="col col lg-12 col-sm-12 col-12">
                  <button type="button" className="btn btn-success">
                    Mulai Sewa Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-6">
          <div className="faq pt-5 pb-5">
            <div className="row pt-5 pb-5">
              <div className="col col-lg-5 col-sm-12 col-12">
                <h4 className="pb-3">Frequently Asked Question</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="col col-lg-7 col-sm-12 col-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed accordion-custom"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?{" "}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo corporis est omnis repellendus perspiciatis qui
                        minima quae eos expedita soluta, nisi officia maiores
                        doloremque deleniti deserunt enim magni temporibus?
                        Voluptate.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed accordion-custom"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Hic quae, nesciunt minus vero veniam sunt modi
                        repellat esse cumque, et blanditiis. Cupiditate dicta
                        porro inventore iure, impedit fuga blanditiis vero.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed accordion-custom"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In et blanditiis asperiores eveniet veniam
                        obcaecati, deleniti accusamus quam commodi perspiciatis
                        aliquam, temporibus ducimus nisi? Fugit dolorum
                        doloribus maiores voluptatibus ipsam.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed accordion-custom"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Soluta voluptatibus debitis nemo aperiam
                        repudiandae nihil eaque, velit voluptatum blanditiis
                        quam hic ducimus, doloribus temporibus qui beatae vero
                        cupiditate, eum et?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed accordion-custom"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit, doloribus. In eveniet ex obcaecati alias
                        quisquam dicta fugit dignissimos laborum. Voluptatem
                        tempora debitis ratione ullam eaque voluptatibus
                        architecto eos recusandae.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-7">
          <div className="footer pt-5 pb-5">
            <div className="row pb-5">
              <div className="col col-lg-4 col-sm-12 col-12 pt-2 pb-2">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
              <div className="col col-lg-2 col-sm-12 col-12 pt-2 pb-2">
                <a href="#section-2">
                  <p>
                    <strong>Our services</strong>
                  </p>
                </a>
                <a href="#section-3">
                  <p>
                    <strong>Why Us</strong>
                  </p>
                </a>
                <a href="#section-4">
                  <p>
                    <strong>Testimonial</strong>
                  </p>
                </a>
                <a href="#section-6">
                  <p>
                    <strong>FAQ</strong>
                  </p>
                </a>
              </div>
              <div className="col col-lg-3 col-sm-12 col-12 pt-2 pb-2">
                <p>Connect with us</p>
                <div className="row">
                  <div className="col col-lg-9  d-flex justify-content-lg-between media-social">
                    <a href="https://www.facebook.com/">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://twitter.com/">
                      <img src={twitter} alt="" />
                    </a>
                    <a href="https://mail.google.com/mail">
                      <img src={mail} alt="" />
                    </a>
                    <a href="https://www.twitch.tv/">
                      <img src={twitch} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-sm-12 col-12 pt-2 pb-2">
                <p>Copyright Binar 2022</p>
                <h3>LOGO</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
