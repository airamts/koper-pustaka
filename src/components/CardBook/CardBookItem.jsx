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
    <div className="card-book col-12 col-sm-6 col-md-4 
    col-lg-3 col-xl-3 flex-column justify-content-center align-items-center" style={{ width: "18rem" }}>
      <div className="card-img py-4 d-flex justify-content-center">
        <img src={image} className="card-img-top" alt="card" style={{width: '6.75rem'}}/>
      </div>
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
