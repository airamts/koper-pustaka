import React from 'react';

function DetailBookFooter({icon,type, fill}){
    return (
        <div>
            <div className="detail-book__footer d-flex align-items-center gap-2">
                <img src={icon} alt="icon" />
                <p className='detail-book__footer__type'>{type}</p>
                <p className='detail-book__footer__fill'>{fill}</p>
            </div>
        </div>
    );
}

export default DetailBookFooter;