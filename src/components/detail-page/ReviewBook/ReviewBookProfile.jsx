import React from "react";
import CardBookReview from "../../jelajah-page/CardBook/CardBookReview";

function ReviewBookProfile({ avatar, reviewer, numberLoan }) {
  return (
    <div className="review-book__profile d-flex align-items-center w-100">
      <div className="avatar">
        <img src={avatar} alt="avatar" style={{ width: "3rem" }} />
      </div>
      <div className="review-book__profile__name d-flex flex-column">
        <p className="mb-0 px-2 fw-semibold">{reviewer}</p>
        <div className="review-book__profile__rating d-flex align-items-center">
          <CardBookReview />
          <p className="mb-0 fw-medium" style={{color: "#71cc9b" }}>#Peminjam {numberLoan}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewBookProfile;
