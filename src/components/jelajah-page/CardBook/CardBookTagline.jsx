import React from 'react';

function CardBookTagline({category, available}) {

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
        <div className='card-book__tagline d-flex align-items-center px-2 w-100 gap-2'>
            <img src={getImageUrlByCategory(category)} alt="genre" style={{ width: '6rem' }}/>
            {available ? 
            <img src='/images/available-badge.png' style={{width: '8rem'}}></img>
            :
            <p>Tidak Tersedia</p>
            }
        </div>
    );
}

export default CardBookTagline;

