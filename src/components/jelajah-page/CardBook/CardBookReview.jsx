import React, { useState, useEffect } from "react";


function CardBookReview({ peminjam }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Generate a random rating between 1 and 5
    const randomRating = (Math.random() * 1 + 4).toFixed(1);
    setRating(randomRating);
  }, []);

  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <img key={index} src="/images/star-fill.png" alt="*" style={{ width: "1.1rem" }} />
        ))}
        {halfStar === 1 && <img src="/images/star-half.png" alt="*" style={{ width: "1.1rem" }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <img key={index} src="/images/star-empty.png" alt="*" style={{ width: "1.1rem" }} />
        ))}
      </>
    );
  };

  return (
    <div className="card-book__review d-flex gap-2">
      <div className="card-review__stars d-flex align-items-center">
        {renderStars()}
      </div>
      <div className="card-review__count">
        <p className="mb-0">
          <strong>{rating}</strong>
          {peminjam !== undefined && ` (${peminjam})`}
        </p>
      </div>
    </div>
  );
}

export default CardBookReview;
