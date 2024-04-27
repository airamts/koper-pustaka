import React from "react";

function ButtonLanjutkan({onLanjut}) {
  return (
    <button type="submit" className="fw-semibold mb-0" onClick={onLanjut}>
      Lanjutkan
    </button>
  );
}

export default ButtonLanjutkan;
