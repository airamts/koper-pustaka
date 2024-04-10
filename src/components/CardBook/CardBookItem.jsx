import React from "react";
import CardBookBody from "./CardBookBody.jsx";

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
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="card" />
      <div className="card-body">
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
  );
}

export default CardBookItem;
