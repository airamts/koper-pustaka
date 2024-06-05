import React from 'react';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import CardFooter from './cardFooter';

const ReviewSection = ({ image, title, stars, reviewer, avatar, numberLoan, comment }) => {
  return (
    <div className="card mb-3">
      <CardHeader image={image} />
      <CardBody 
        title={title} 
        stars={stars} 
        reviewer={reviewer} 
        avatar={avatar} 
        numberLoan={numberLoan} 
      />
      <CardFooter comment={comment} />
    </div>
  );
};

export default ReviewSection;
