import React from "react";

function PinjamBukuHeader() {
  return (
    <div className="pinjam-buku__header d-flex gap-4 my-4">
      <img src="/images/ilustrasi-formpermintaan.svg" alt="ilustrasi" />
      <div className="pinjam-buku__header__body d-flex flex-column gap-3 w-100">
        <h4 className="fw-bold mb-0">Form Permintaan</h4>
        <div className="d-flex flex-column gap-2">
          <p className="mb-0">
            <span className="text-danger">*</span> Harap isi form ini untuk
            melakukan permintaan peminjaman buku
          </p>
          <p className="mb-0">
            <span className="text-danger">*</span> Pastikan data yang kamu isi
            sudah sesuai
          </p>
        </div>
      </div>
    </div>
  );
}

export default PinjamBukuHeader;
