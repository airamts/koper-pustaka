import React from "react";
import DetailFormTitle from "./DetailFormTitle";

function DetailBukuForm({ image, title, pinjamDate, durationInMonths }) {
  return (
    <div className="detail-form d-flex flex-column gap-3 col-12 col-lg-6 col-xl-6">
      <h5 className="mb-0 fw-bold">
        Detail Buku <span style={{ color: "red" }}>*</span>
      </h5>
      <div className="detail-form__content d-flex gap-4">
        <img src={image} alt="image" style={{ width: "7.5rem" }} />
        <div className="detail-form__body d-flex flex-column gap-2">
          <DetailFormTitle type="Buku yang dipinjam:" fill={title} />
          <DetailFormTitle type="Tanggal Peminjaman:" fill={pinjamDate} />
          <DetailFormTitle type="Durasi Peminjaman:" fill={durationInMonths} />
        </div>
      </div>
    </div>
  );
}

export default DetailBukuForm;
