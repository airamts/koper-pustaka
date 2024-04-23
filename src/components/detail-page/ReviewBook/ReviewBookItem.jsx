import React from 'react'
import ReviewBookProfile from './ReviewBookProfile';
import ReviewBookBody from './ReviewBookBody';

function ReviewBookItem({avatar, reviewer, numberLoan, comment}) {
    return (
        <div className='review-book__item d-flex flex-column gap-2 col-12 col-sm-12 col-md-6 
        col-lg-6 col-xl-6 justify-content-center align-items-center'>
            <ReviewBookProfile avatar={avatar} reviewer={reviewer} numberLoan={numberLoan} />
            <ReviewBookBody comment={comment} />
        </div>
    )
}

export default ReviewBookItem;
