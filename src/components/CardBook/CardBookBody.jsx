import React from "react";
import CardBookFooter from "./CardBookFooter";
import CardBookTitle from "./CardBookTitle";
import CardBookTagline from "./CardBookTagline";
import CardBookReview from "./CardBookReview";

function CardBookBody({ author, owner, durationInMonths, location, title, category, available}) {
  return (
    <div>
      <div className="card-body d-flex">
        <CardBookTagline category={category} available={available}/>
        <div className="card-body__title">
            <CardBookTitle 
                location={location}
                title={title}
            />
        </div>
        <CardBookReview />
        <div className="card-body__footer d-flex flex-row">
          <CardBookFooter type="Penulis" fill={author} />
          <CardBookFooter type="Pemilik" fill={owner} />
          <CardBookFooter type="Durasi" fill={durationInMonths} />
        </div>
      </div>
    </div>
  );
}

export default CardBookBody;
