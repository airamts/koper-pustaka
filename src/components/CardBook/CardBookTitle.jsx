import React from 'react';

function CardBookTitle({location, title}) {
    return (
        <div className='card-title d-flex flex-column'>
            <h5 className="card-title__title">{title}</h5>
            <p>Location: <strong>{location}</strong></p>
        </div>
    );
}

export default CardBookTitle;