import React from "react";

function CardBookReview() {
  return (
    <div className="card-book__review d-flex gap-2">
      <div className="card-review__stars d-flex align-items-center">
        <img src="/images/star-fill.svg" alt="review" />
        <img src="/images/star-fill.svg" alt="review" />
        <img src="/images/star-fill.svg" alt="review" />
        <img src="/images/star-fill.svg" alt="review" />
        <img src="/images/star-empty.svg" alt="review" />
      </div>
        <div className="card-review__count">
            <p className="mb-0"><strong>4.5</strong>(5)</p>
        </div>
    </div>
  );
}

export default CardBookReview;
