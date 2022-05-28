import React from 'react'
import "./Card.css";

export const CardDef = (props) => {
    return (
        <div>
          <div className="card card-edit" style={{ width: "23rem" }}>
            <img
              src={props.image}
              className="card-img-top"
              alt="..."
              style={{ padding: "1.5rem" }}
            />
            <div className="card-body" style={{ padding: "1.5rem" }}>
              <p className="car-name">{props.carName}</p>
              <p className="price">Rp.{props.price} / hari</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <ul className="list-feature">
                <li className="satu">4 orang</li>
                <li className="dua">Manual</li>
                <li className="tiga">Tahun 2020</li>
              </ul>
              <a
                className="btn btn-success btn-edit-card"
                onClick={props.nextPage}
              >
                Pilih Mobil
              </a>
            </div>
          </div>
        </div>
      );
}
