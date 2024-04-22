import React from "react";
import CardBookBody from "./CardBookBody.jsx";
import { Link } from "react-router-dom";

function CardBookItem({
  author,
  owner,
  durationInMonths,
  location,
  title,
  category,
  available,
  image,
}) {
  return (
    <Link
      className="card-book-link"
      to={`/book/${title}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="card-book col-12 col-sm-6 col-md-4 
    col-lg-3 col-xl-3 justify-content-center align-items-center"
        style={{ width: "18rem" }}
      >
        <div className="card-book__img d-flex justify-content-center">
          <img
            src={image}
            className="card-img-top"
            alt="card"
            style={{ width: "6.75rem" }}
          />
        </div>
        <div className="card-book__body d-flex flex-column w-100">
          <CardBookBody
            author={author}
            owner={owner}
            durationInMonths={durationInMonths}
            location={location}
            title={title}
            category={category}
            available={available}
          />
        </div>
      </div>
    </Link>
  );
}

export default CardBookItem;
