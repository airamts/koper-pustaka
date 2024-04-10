import React from "react";

function CardBookReview() {
  return (
    <div className="card-review">
      <div className="card-review__stars">
        <img src="https://icons8.com/icon/8ggStxqyboK5/star" />
        <img src="https://icons8.com/icon/8ggStxqyboK5/star" />
        <img src="https://icons8.com/icon/8ggStxqyboK5/star" />
        <img src="https://icons8.com/icon/8ggStxqyboK5/star" />
        <img src="https://icons8.com/icon/8ggStxqyboK5/star" />
      </div>
        <div className="card-review__count">
            <p><strong>4.5</strong>(5)</p>
        </div>
    </div>
  );
}

export default CardBookReview;
