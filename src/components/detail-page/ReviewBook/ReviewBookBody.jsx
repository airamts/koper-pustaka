import React from 'react'

function ReviewBookBody({comment}) {
    return (
        <div className='review-book__body d-flex'>
            <p className='mb-0'>{comment}</p>
        </div>
    )
}

export default ReviewBookBody;