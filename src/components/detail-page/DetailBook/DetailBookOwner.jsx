import React from "react";

function DetailBookOwner({owner}) {
    return (
        <div className="detail-book__owner d-flex flex-column">
            <h5 className="mb-0">Pemilik:</h5>
            <p className="mb-0">{owner}</p>
        </div>
    )
}

export default DetailBookOwner;