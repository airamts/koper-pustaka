import React from "react";
import { getBookData } from "../../../utils/dataBuku.js";
import CardBookList from "./CardBookList.jsx";
import CardBookTab from "./CardBookTab.jsx";

function CardBookApp({cards}) {
  return (
    <div className="card-list d-flex flex-column gap-4">
        <div className="card-list__genre d-flex flex-column gap-2">
          <h5 className="fw-bold fs-6">Buku Berdasarkan Genre</h5>
          <CardBookTab />
          <CardBookList cards={cards} />
        </div>
        <div className="card-list__rekomendasi d-flex flex-column gap-2">
          <h5 className="fw-bold fs-6">Rekomendasi Buku</h5>
          <CardBookList cards={cards} />
        </div>
      </div>
  );
}

export default CardBookApp;
