import React from "react";
import "./ModalSuccess.css"

export const ModalSucces = ({visibility}) => {
  return (
    <div id="container-modal-success" onClick={visibility}>
      <h6>Data Berhasil Disimpan</h6>
    </div>
  );
};
