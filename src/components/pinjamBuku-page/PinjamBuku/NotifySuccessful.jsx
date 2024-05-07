import React from "react";

function NotifySuccessful({title}) {
    return (
        <div className="container d-flex flex-column align-items-center gap-4">
            <h5 className="mb-0">Peminjaman Buku <span>{title}</span> Behasil Dilakukan</h5>
            <img src="/images/book-Illustration.svg" alt="success" />
            <p className="mb-0 text-center">Selanjutnya silahkan konfirmasi peminjamanmu dengan menghubungi pemilik buku melalui link WhatsApp berikut:</p>
            <a href="https://wa.me/6281234567890" target="_blank">wa.me/6281234567890</a>
        </div>
    )
}

export default NotifySuccessful;