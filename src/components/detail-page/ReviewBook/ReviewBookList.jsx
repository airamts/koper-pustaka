import React from "react";
import ReviewBookItem from "./ReviewBookItem";

function ReviewBookList({ reviews }) {
  return (
    <div className="review-book__list d-flex justify-content-between my-4">
      {reviews.length ? (
        reviews.map((review) => (
          <ReviewBookItem
            key={review.id}
            avatar={review.avatar}
            reviewer={review.reviewer}
            numberLoan={review.numberLoan}
            comment={review.comment}
            {...reviews}
          />
        ))
      ) : (
        <p>Review Tidak Tersedia</p>
      )}
    </div>
  );
}

export default ReviewBookList;
