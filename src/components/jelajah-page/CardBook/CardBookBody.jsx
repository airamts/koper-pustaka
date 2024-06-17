import React from "react";
import CardBookFooter from "./CardBookFooter";
import CardBookTitle from "./CardBookTitle";
import CardBookTagline from "./CardBookTagline";
import CardBookReview from "./CardBookReview";

function CardBookBody({
  author,
  owner,
  durationInMonths,
  location,
  title,
  category,
  available,
  peminjam,
}) {
  return (
    <div className="card-body d-flex flex-column w-100">
      <div className="card-book__body d-flex flex-column">
        <CardBookTagline category={category} available={available} />
        <CardBookTitle location={location} title={title} />
        <div className="d-flex w-100">
          <CardBookReview peminjam={peminjam} />
        </div>
        <div className="card-body__footer d-flex w-100 justify-content-between">
          <CardBookFooter type="Penulis" fill={author} />
          <CardBookFooter type="Pemilik" fill={owner} />
          <CardBookFooter type="Durasi" fill={`${durationInMonths} bulan`} />
        </div>
      </div>
    </div>
  );
}

export default CardBookBody;
