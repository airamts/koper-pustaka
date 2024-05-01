import React from "react";

function DetailBookOwner({owner, avatar}) {
    return (
        <div className="detail-book__owner d-flex flex-column gap-2">
            <h5 className="mb-0">Pemilik:</h5>
            <div className="d-flex align-items-center justify-content-center gap-2">
            <img src={avatar} alt="avatar" style={{ width: "2.5rem" }}/>
            <p className="mb-0">{owner}</p>
            </div>
        </div>
    )
}

export default DetailBookOwner;