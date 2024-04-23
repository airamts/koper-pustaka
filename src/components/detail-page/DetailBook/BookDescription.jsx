import React from 'react'

function BookDescription({description}) {
    return (
        <div className='book-description'>
            <p className='fs-6 fw-bold mb-2'>Deskripsi Buku</p>
            <p className='mb-0'>{description}</p>
        </div>
    )
}

export default BookDescription;