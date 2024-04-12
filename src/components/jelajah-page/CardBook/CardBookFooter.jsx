import React from 'react';

function CardBookFooter({type, fill}){
    return (
        <div>
            <div className="card-book__footer d-flex flex-column">
                <p className='card-book__footer__type'>{type}</p>
                <p className='card-book__footer__fill'>{fill}</p>
            </div>
        </div>
    );
}

export default CardBookFooter;