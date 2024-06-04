import React, { useState } from "react";
import ProgressBarDd from "./Datadiri/ProgressBar";
import ProgressDeskripsiDd from "./Datadiri/progressDesk";
import ImageDatadiri from "./Datadiri/Figure";
import TitleDatadiri from "./Datadiri/TitlePage";
import FormulirUtuh from "./Datadiri/FormulirUtuh";
import ModalDatadiri from "./Datadiri/ModalDataDiri";

function DataDiri() {
  const [showModal, setShowModal] = useState(true); 

  return (
    <div>
      {/* Render modal di atas komponen DataDiri */}
      <ModalDatadiri show={showModal} onHide={() => setShowModal(false)} />
      
      <h3 className="fw-bolder ms-5 mt-4 mb-5">Verifikasi Akun</h3>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "670px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <ProgressBarDd />
        <ProgressDeskripsiDd />
      </div>
      <hr className="ms-5 me-5"></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "670px",
          margin: "auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <ImageDatadiri />
          <TitleDatadiri />
        </div>
        <FormulirUtuh />
      </div>
    </div>
  );
}

export default DataDiri;
