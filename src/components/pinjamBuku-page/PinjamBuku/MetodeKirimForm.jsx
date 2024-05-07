import React, { useState } from "react";
import MetodeCheckbox from "./MetodeCheckbox";

function MetodeKirimForm({isMetodeValid, handleMetodeChange}) {
  return (
    <div className="metode-kirim d-flex flex-column gap-3">
      <h5 className="mb-0 fw-bold">
        Metode Pengiriman yang Tersedia <span style={{ color: "red" }}>*</span>
      </h5>
      <MetodeCheckbox
      handleMetodeChange={handleMetodeChange}
      isMetodeValid={isMetodeValid}
      />
    </div>
  );
}

export default MetodeKirimForm;
