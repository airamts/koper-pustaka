import React from 'react';

function CardBookTagline({category, available}) {
    return (
        <div className='card-tagline d-flex'>
            <p>{category}</p>
            <p>{available}</p>
        </div>
    );
}

export default CardBookTagline;

