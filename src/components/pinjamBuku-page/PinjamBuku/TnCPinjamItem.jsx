import React from "react";

function TnCPinjamItem({ type, fill }) {
    return (
        <div className="TnC-pinjam__item d-flex flex-column gap-1">
            <h6 className="mb-0 fw-bold">{type}</h6>
            <p className="mb-0">{fill}</p>
        </div>
    )
}

export default TnCPinjamItem;