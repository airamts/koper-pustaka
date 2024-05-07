import React from "react";
import MetodeCheckbox from "./MetodeCheckbox";

function MetodeKirimForm() {
  return (
    <div className="metode-kirim d-flex flex-column gap-3">
      <h5 className="mb-0 fw-bold">
        Metode Pengiriman yang Tersedia <span style={{ color: "red" }}>*</span>
      </h5>
      <MetodeCheckbox />
    </div>
  );
}

export default MetodeKirimForm;
