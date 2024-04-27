import React from "react";
import TnCPinjamItem from "./TnCPinjamItem";

function TnCPinjamBuku() {
  return (
    <div className="TnC-pinjam__buku d-flex flex-column gap-4">
      <h5 className="mb-0 fw-bold">
        Syarat dan Ketentuan <span style={{ color: "red" }}>*</span>
      </h5>
      <TnCPinjamItem
        type="Cara Pengambilan"
        fill="Buku ini dipinjam melalui persetujuan kedua pihak yang akan dilakukan via chat  WhatsApp. Koper pustaka tidak bertanggung jawab atas tindakan pencurian dan kejahatan lainnya."
      />
      <TnCPinjamItem
        type="Menjaga Buku"
        fill="Meminjam berarti harus bertanggung jawab dalam menjaga buku dengan sepenuh hati. Peminjam diwajibkan untuk menjaga kondisi buku dengan tidak merobek, merusak, ataupun membuang buku."
      />
      <div className="d-flex flex-column gap-2">
        <label className="d-flex gap-2 checkbox-label align-items-center">
          <input type="checkbox" />
          Saya sudah membaca <strong>Syarat dan Ketentuan</strong> yang berlaku
        </label>
      </div>
    </div>
  );
}

export default TnCPinjamBuku;
