import React from "react";
import { Link } from "react-router-dom";

function ButtonBackBeranda({ onBack }) {
  return (
    <Link to="/homeLog" style={{ textDecoration: "none", fontSize: "1rem" }}>
      <button
        type="button"
        className="pinjam-button fw-semibold mb-0 w-100"
        onClick={onBack}
      >
        Kembali ke Beranda
      </button>
    </Link>
  );
}

export default ButtonBackBeranda;
