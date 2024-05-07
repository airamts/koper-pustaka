import React from "react";

function AlasanPinjamForm({alasanPinjam, onAlasanPinjamChange, isAlasanValid}) {
  return (
    <div className="alasan-pinjam d-flex flex-column gap-3 col-12 col-lg-6 col-xl-6 flex-grow-1">
      <h5 className="mb-0 fw-bold">
        Alasan Meminjam Buku <span style={{ color: "red" }}>*</span>
      </h5>
      <textarea
        className={`form-control flex-grow-1 ${!isAlasanValid ? 'is-invalid' : ''}`}
        placeholder="Saya meminjam buku ini karena ingin mengisi waktu luang di hari libur"
        value={alasanPinjam}
        onChange={onAlasanPinjamChange}
      ></textarea>
      {!isAlasanValid && <div className="invalid-feedback">Alasan meminjam buku harus diisi.</div>}
    </div>
  );
}

export default AlasanPinjamForm;
