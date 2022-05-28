import React from "react";
import "./cardpay.css";

export const CardPay = (props) => {
  return (
    <div>
      <div className="card card-edit-pay">
        <img
          src={props.imagePay}
          className="card-img-top"
          alt="..."
          style={{ padding: "1.5rem" }}
        />
        <div className="card-body" style={{ padding: "1.5rem" }}>
          <p className="car-name">{props.carNamePay}</p>

          <ul className="list-feature-pay">
            <li className="satu-pay">4 orang</li>
            <li className="dua-pay">Manual</li>
            <li className="tiga-pay">Tahun 2020</li>
          </ul>
          <div className="total-pay">
          <p>Total</p>
          <p className="price">Rp.{props.pricePay} / hari</p>
          </div>
          <a className="btn btn-success btn-edit-card">Lanjutkan Pembayaran</a>
        </div>
      </div>
    </div>
  );
};
