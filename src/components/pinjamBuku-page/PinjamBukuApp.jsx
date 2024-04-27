import React from "react";
import { Link } from "react-router-dom";
import PinjamBukuHeader from "./PinjamBuku/PinjamBukuHeader";
import DetailBukuForm from "./PinjamBuku/DetailBukuForm";
import AlasanPinjamForm from "./PinjamBuku/AlasanPinjamForm";
import MetodeKirimForm from "./PinjamBuku/MetodeKirimForm";
import TnCPinjamBuku from "./PinjamBuku/TnCPinjamBuku";

class PinjamBukuApp extends React.Component {
  render() {
    const { title, id, image, durationInMonths } = this.props;

    return (
      <div className="container d-flex flex-column gap-4 my-4">
        <Link to={`/book/${title}`} style={{ textDecoration: "none" }}>
          <button className="back-button d-flex align-items-center gap-2">
            <img src="/images/arrow-left.svg" alt="arrow-left" />
            <p className="mb-0">Kembali</p>
          </button>
        </Link>

        <form className="pinjam-form d-flex flex-column">
          <div className="pinjam-header d-flex">
            <PinjamBukuHeader />
          </div>
          <div className="content-row d-flex flex-column">
            <div className="content-row__1 d-flex flex-lg-row flex-column">
              <DetailBukuForm
                title={title}
                image={image}
                pinjamDate={new Date().toLocaleDateString()}
                durationInMonths={durationInMonths}
              />
              <AlasanPinjamForm />
            </div>
            <div className="content-row__2 d-flex">
              <MetodeKirimForm />
            </div>
          </div>
          <div className="pinjam-TnC d-flex flex-column gap-4 align-items-end">
            <TnCPinjamBuku />
            <button type="submit" className="fw-semibold mb-0">
              Lanjutkan
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PinjamBukuApp;
