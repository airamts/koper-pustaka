import React from 'react'
import ReviewBookProfile from './ReviewBookProfile';
import ReviewBookBody from './ReviewBookBody';

function ReviewBookItem({avatar, reviewer, numberLoan, comment}) {
    return (
        <div className='review-book__item d-flex flex-column gap-2 col-12 col-sm-12 col-md-12
        col-lg-5 col-xl-5 align-items-center flex-grow-1'>
            <ReviewBookProfile avatar={avatar} reviewer={reviewer} numberLoan={numberLoan} />
            <ReviewBookBody comment={comment} />
        </div>
    )
}

export default ReviewBookItem;
