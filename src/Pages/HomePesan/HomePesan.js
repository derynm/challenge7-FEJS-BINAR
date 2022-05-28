import React, { useState, useEffect } from "react";
import "./HomePesan.css";
import mobil from "../../Assets/Img/img_car.png";
import { FooterDef } from "../../Assets/Components/Footer/FooterDef";
import DatePicker from "react-datepicker";
import { CardDesc } from "../../Assets/Components/CardDesc/CardDesc";
import { CardPay } from "../../Assets/Components/CardPay/CardPay";
import kalender from "../../Assets/Img/fi_calendar.png";
import waktu from "../../Assets/Img/fi_clock.png";
import penumpang from "../../Assets/Img/fi_users.png";
import { connect } from "react-redux";
import { fetchCar, getIdCar } from "../../Redux/Action/HomeAction";
import { NavRental } from "../../Assets/Components/NavBar/NavRental";
import { CardDef } from "../../Assets/Components/Card/CardDef";
import arrow_left from "../../Assets/Img/fi_arrow-left.png";
import satu_isi from "../../Assets/Img/satu-isi.png";
import dua_kosong from "../../Assets/Img/dua-kosong.png";
import tiga_kososng from "../../Assets/Img/tiga-kosong.png";
import garis from "../../Assets/Img/garis.png";
import success from "../../Assets/Img/success.png";
import { HandlePdf } from "../../Assets/Components/HandlePdf/HandlePdf";

const HomePesan = (props) => {
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());

  const [page, setPage] = useState("1");

  const [sopir, setSopir] = useState(null);
  const [statsSopir, setStatsSopir] = useState("");

  useEffect(() => {
    props.getApi();
  }, []);

  const cekSopir = (e, page) => {
    let valuePage = page;
    if (valuePage === "1") {
      if (e.target.value === "Dengan Sopir") {
        setSopir(true);
      } else if (e.target.value === "Tanpa Sopir") {
        setSopir(false);
      }
    } else if (valuePage === "2") {
      setStatsSopir(e.target.value);
    }
  };

  //ganti stats supir khusu di page 2
  const gantiStatsSopir = (e, stats) => {
    e.preventDefault();
    let valueStats = stats;
    if (valueStats === "Dengan Sopir") {
      setSopir(true);
    } else if (valueStats === "Tanpa Sopir") {
      setSopir(false);
    }
  };

  //handle data dan summon card
  const handleMobil = (data, sopir) => {
    let dataValue = data;
    let dataSupir = sopir;
    return dataValue
      .filter((value) => value.status === dataSupir)
      .map((value, index) => {
        return (
          <CardDef
            image={value.image}
            carName={value.name}
            price={value.price}
            nextPage={(e) => {
              changePage(e, "3");
              // set id pada global state/redux untuk dipanggil di page deskripsi
              props.setID(value.id);
            }}
          />
        );
      });
  };

  //pindah page di taruh button
  const changePage = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  const deskMobil = (id, data) => {
    let dataValue = data;
    let idValue = id;
    let dataMobil = dataValue.find((value) => value.id === idValue);
    return (
      <div className="container-desc">
        <CardDesc />
        <CardPay
          imagePay={dataMobil.image}
          carNamePay={dataMobil.name}
          pricePay={dataMobil.price}
        />
      </div>
    );
  };

  return (
    <div>
      <NavRental
        toPageOne={(e) => {
          changePage(e, "1");
        }}
      />
      {page === "1" ? (
        <div>
          <div id="parrent-hero">
            <div className="container-xl">
              <div className="hero">
                <div className="row">
                  <div className="col col-lg-6 col-sm-12 col-12 hero-content1">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil
                      kualitas terbaik dengan harga terjangkau. Selalu siap
                      melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                  </div>
                  <div className="col col-lg-6 col-sm-12 col-12 hero-content2">
                    <img src={mobil} className="img-fluid img-hero" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="section-02">
            <div className="container-xl">
              <form
                id="form-cari"
                onSubmit={(e) => {
                  changePage(e, "2");
                }}
              >
                <div className="comp-input">
                  <label>Tipe Driver</label>
                  <div className="input-icon option-edit">
                    <select
                      required
                      className="box box-edit"
                      onChange={(e) => {
                        cekSopir(e, page);
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Pilih Tipe Driver
                      </option>
                      <option key={1} value={"Dengan Sopir"}>
                        Dengan Sopir
                      </option>
                      <option key={2} value={"Tanpa Sopir"}>
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="comp-input">
                  <label>Tanggal</label>
                  <div className="input-icon">
                    <DatePicker
                      className="box"
                      selected={tanggal}
                      onChange={(date) => setTanggal(date)}
                    />
                    <img src={kalender} />
                  </div>
                </div>
                <div className="comp-input">
                  <label>Waktu Jemput/Ambil</label>
                  <div className="input-icon">
                    <DatePicker
                      className="box"
                      selected={jam}
                      onChange={(date) => setJam(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                    <img src={waktu} />
                  </div>
                </div>
                <div className="comp-input">
                  <label>Jumlah Penumpang (optional)</label>
                  <div className="input-icon">
                    <input
                      placeholder="Jumlah Penumpang"
                      className="box jml-penumpang"
                    />
                    <img src={penumpang} />
                  </div>
                </div>
                <div className="comp-input">
                  <button className="btn btn-success btn-ijo">
                    Cari Mobil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {page === "2" ? (
        <div>
          <div id="parrent-hero2">
            <div className="container-xl"></div>
          </div>
          <div id="section-02">
            <div className="container-xl">
              <form
                id="form-cari"
                className="page-2"
                onSubmit={(e) => {
                  gantiStatsSopir(e, statsSopir);
                }}
              >
                <div className="comp-input">
                  <h6>Pencarianmu</h6>
                  <label>Tipe Driver</label>
                  <div className="input-icon">
                    <select
                      required
                      className="box option-edit"
                      onChange={(e) => {
                        cekSopir(e, page);
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Pilih Tipe Driver
                      </option>
                      <option key={1} value={"Dengan Sopir"}>
                        Dengan Sopir
                      </option>
                      <option key={2} value={"Tanpa Sopir"}>
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <label>Tanggal</label>

                  <div className="input-icon">
                    <DatePicker
                      className="box"
                      selected={tanggal}
                      onChange={(date) => setTanggal(date)}
                    />
                    <img src={kalender} />
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <label>Waktu Jemput/Ambil</label>
                  <div className="input-icon">
                    <DatePicker
                      className="box"
                      selected={jam}
                      onChange={(date) => setJam(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                    <img src={waktu} />
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <label>Jumlah Penumpang (optional)</label>
                  <div className="input-icon">
                    <input
                      placeholder="Jumlah Penumpang"
                      type="number"
                      className="box"
                    />
                    <img src={penumpang} />
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <button className="btn btn-outline-primary">Edit</button>
                </div>
              </form>
            </div>
          </div>
          <div id="section-03">
            <div className="container-xl">
              <div className="card-container">
                {handleMobil(props.carData, sopir)}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {page === "3" ? (
        <div>
          <div id="parrent-hero3">
            <div className="container-xl"></div>
          </div>
          <div id="section-03">
            <div className="container-xl">
              <form id="form-cari" className="page-2">
                <div className="comp-input">
                  <h6>Pencarianmu</h6>
                  <label>Tipe Driver</label>
                  <select required className="opt-dis" disabled>
                    <option value="" disabled selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option key={1} value={"Dengan Sopir"}>
                      Dengan Sopir
                    </option>
                    <option key={2} value={"Tanpa Sopir"}>
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="comp-input input-page2">
                  <label>Tanggal</label>
                  <div className="input-icon disable-input">
                    <DatePicker
                      className="box-dis"
                      selected={tanggal}
                      onChange={(date) => setTanggal(date)}
                      disabled
                    />
                    <img src={kalender} />
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <label>Waktu Jemput/Ambil</label>
                  <div className="input-icon disable-input">
                    <DatePicker
                      className="box-dis"
                      selected={jam}
                      onChange={(date) => setJam(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      disabled
                    />
                    <img src={waktu} />
                  </div>
                </div>
                <div className="comp-input input-page2">
                  <label>Jumlah Penumpang (optional)</label>
                  <div className="input-icon disable-input">
                    <input
                      placeholder="Jumlah Penumpang"
                      type="number"
                      className="box-dis"
                      disabled
                    />
                    <img src={penumpang} />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="section-03">
            <div className="container-xl">
              {deskMobil(props.carIdGlobal, props.carData)}
              <div className="desc-btn">
                <button
                  className="btn btn-success btn-ijo"
                  onClick={(e) => {
                    changePage(e, "4");
                  }}
                >
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {page === "4" ? (
        <div>
          <div id="parrent-hero4">
            <div className="container-xl container-pembayaran">
              <div className="menu-pembayaran">
                <div className="menu-pembayaran-kiri">
                  <img src={arrow_left} alt="" onClick={(e)=>changePage(e,"3")}/>
                  <div className="tiket-pembayaran">
                    <h6>Tiket</h6>
                    <p>Order ID: xxxxxxxx</p>
                  </div>
                </div>
                <div className="menu-pembayaran-kanan">
                  <img src={satu_isi} alt="" />
                  <p>Pilih Metode</p>
                  <img src={garis} alt="" />
                  <img src={dua_kosong} alt="" />
                  <p>Bayar</p>
                  <img src={garis} alt="" />
                  <img src={tiga_kososng} alt="" />
                  <p>Tiket</p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-04">
            <div className="container-xl"></div>
          </div>
          <div id="section-04">
            <div className="container-xl container-pembayaran">
              <div className="invoice">
                <img src={success} alt="" />
                <h6>Pembayaran Berhasil!</h6>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                <HandlePdf />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <FooterDef />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.home.car_data,
    carIdGlobal: state.home.car_id,
  };
};

//mentrigger reducer
const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => dispatch(fetchCar()),
    setID: (id) => dispatch(getIdCar(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePesan);
