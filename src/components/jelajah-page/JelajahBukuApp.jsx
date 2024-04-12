import React from "react";
import CardBookApp from "./CardBook/CardBookApp.jsx";
import { getBookData } from "../../utils/dataBuku.js";
import SearchSelection from "./SearchSelection.jsx";

class JelajalahBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: getBookData(),
    };
  }

  render() {
    return (
      <div className="container d-flex flex-column gap-4">
        <button className="back-button d-flex align-items-center gap-2">
          <img src="/images/arrow-left.svg" alt="arrow-left" />
          <p className="mb-0">Kembali</p>
        </button>
        <div className="container d-flex flex-column gap-4">
          <h2 className="fs-4 fw-bold">Cari Buku Yang Kamu Inginkan</h2>
          <SearchSelection />
          <CardBookApp cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default JelajalahBukuApp;
