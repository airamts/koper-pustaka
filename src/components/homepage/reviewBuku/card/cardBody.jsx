import React from 'react';
import CardBookReview from '../../../jelajah-page/CardBook/CardBookReview';

const CardBody = ({ title, stars, reviewer, avatar, numberLoan }) => {
  return (
    <div className="card-body">
      <h5>{title}</h5>
      <CardBookReview stars={stars} />
      <div className="user-profile d-flex align-items-center">
        <img src={avatar} alt={reviewer} className="user-avatar" />
        <div className="user-info">
          <p className="mb-0">{reviewer}</p>
          <p className="mb-0">Peminjam ke-{numberLoan}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
