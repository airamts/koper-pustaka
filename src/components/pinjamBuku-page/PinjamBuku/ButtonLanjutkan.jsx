import React from "react";

function ButtonLanjutkan({onLanjut}) {
  return (
    <button type="submit" className="pinjam-button fw-semibold mb-0 w-25" onClick={onLanjut}>
      Lanjutkan
    </button>
  );
}

export default ButtonLanjutkan;
