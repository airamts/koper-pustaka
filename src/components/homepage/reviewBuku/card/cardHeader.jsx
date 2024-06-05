import React from 'react';

const CardHeader = ({ image }) => {
  return (
    <div className="card-header">
      <img src={image} alt="Book Cover" className="img-fluid" />
    </div>
  );
};

export default CardHeader;
