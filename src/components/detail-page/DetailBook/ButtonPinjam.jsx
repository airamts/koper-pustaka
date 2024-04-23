import React from "react";

function ButtonPinjam({ id, isAvailable}) {
  return (
    <div className="button-pinjam d-flex justify-content-center">
      {isAvailable ? (
        <button className="button-pinjam__available d-flex align-items-center">
          <img src="/images/icon-pinjam.svg" />
          <p className="mb-0">Buku Tersedia, Pinjam Sekarang!</p>
        </button>
      ) : (
        <button className="button-pinjam__unavailable d-flex align-items-center">
          <img src="/images/icon-pinjam.svg" />
          <p className="mb-0">Buku Tidak Tersedia Sekarang</p>
        </button>
      )}
    </div>
  );
}

export default ButtonPinjam;
