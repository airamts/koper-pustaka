import React from "react";

function CardBookTitle({ location, title }) {
  return (
    <div className="card-book__title d-flex flex-column w-100">
      <h5 className="mb-0">{title}</h5>
      <div className="d-flex gap-1">
        <img src="/images/location.svg" alt="" />
        <p className="mb-0">
          Location: <strong>{location}</strong>
        </p>
      </div>
    </div>
  );
}

export default CardBookTitle;
