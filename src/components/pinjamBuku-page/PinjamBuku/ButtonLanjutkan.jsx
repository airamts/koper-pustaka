import React from "react";

function ButtonLanjutkan({onLanjut, isChecked}) {
  return (
    <button type="submit" className="pinjam-button fw-semibold mb-0 w-25" onClick={onLanjut} disabled={!isChecked}>
      Lanjutkan
    </button>
  );
}

export default ButtonLanjutkan;
