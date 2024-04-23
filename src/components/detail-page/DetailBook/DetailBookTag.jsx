import React from 'react';
import CardBookReview from '../../jelajah-page/CardBook/CardBookReview';

function CardBookTagline({category}) {

    const getImageUrlByCategory = (category) => {
        switch (category) {
            case 'Romance':
                return '/images/genre-romance.png'; 
            case 'Adventure':
                return '/images/genre-adventure.png'; 
            case 'Misteri':
                return '/images/genre-misteri.png'; 
            case 'Animasi':
                return '/images/genre-animasi.png'; 
            default:
                return 'not genre';
        }
    };

    return (
        <div className='card-book__tagline d-flex align-items-center justify-content-center px-2 w-100 gap-2'>
            <img src={getImageUrlByCategory(category)} alt="genre" style={{ width: '6rem' }}/>
            <CardBookReview />
        </div>
    );
}

export default CardBookTagline;

