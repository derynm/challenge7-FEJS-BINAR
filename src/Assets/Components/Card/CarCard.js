import React from "react";
import trash from "../../Img/trash.png";
import edit from "../../Img/fi_edit.png";
import { Button } from "react-bootstrap";
import ModalImage from "react-modal-image";

import "./CarCard.css";

export const CarCard = (props) => {
  return (
    <div>
      <div className="card card-edit" style={{ width: "23rem" }}>
        {/* <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ padding: "1.5rem" }}
        /> */}
        <div className="card-img-top" style={{ padding: "1.5rem" }}>
          <ModalImage
            small={props.image}
            large={props.image}
            alt="Hello World!"
            showRotate={true}
          />
        </div>

        <div className="card-body" style={{ padding: "1.5rem" }}>
          <p className="car-name">{props.carName}</p>
          <p className="price">Rp.{props.price} / hari</p>
          <p className="start">Start rent - Finish rent</p>
          <p className="update">Updated at 4 Apr 2022, 09.00</p>

          <div className="btn-hold">
            <Button className="btn-mod" variant="outline-danger">
              <img src={trash} />
              Delete
            </Button>
            <Button className="btn-mod" variant="success">
              <img src={edit} />
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
