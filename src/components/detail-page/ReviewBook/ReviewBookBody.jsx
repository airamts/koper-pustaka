import React from 'react'

function ReviewBookBody({comment}) {
    return (
        <div className='review-book__body d-flex justify-content-start w-100'>
            <p className='mb-0'>{comment}</p>
        </div>
    )
}

export default ReviewBookBody;