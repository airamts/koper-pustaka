import React from "react";
import { Link } from "react-router-dom";

function ButtonPinjam({ id, isAvailable, title }) {
  return (
    <Link to={`/book/${title}/${id}/pinjam`} style={{ textDecoration: "none" }}>
      <div className="button-pinjam d-flex justify-content-center">
        {isAvailable ? (
          <button className="button-pinjam__available d-flex align-items-center">
            <img src="/images/icon-pinjam.svg" />
            <p className="mb-0">Buku Tersedia, Pinjam Sekarang!</p>
          </button>
        ) : (
          <button
            className="button-pinjam__unavailable d-flex align-items-center"
            disabled
          >
            <img src="/images/icon-pinjam.svg" />
            <p className="mb-0">Buku Tidak Tersedia Sekarang</p>
          </button>
        )}
      </div>
    </Link>
  );
}

export default ButtonPinjam;
