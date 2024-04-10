import React from 'react';

function CardBookFooter({type, fill}){
    return (
        <div>
            <div className="card-footer d-flex">
                <p>{type}</p>
                <p>{fill}</p>
            </div>
        </div>
    );
}

export default CardBookFooter;