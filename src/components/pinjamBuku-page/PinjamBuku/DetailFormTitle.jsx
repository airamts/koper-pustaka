import React from "react";

function DetailFormTitle({ type, fill }) {
    return (
        <div className="detail-form__body__title d-flex flex-column gap-1">
          <p className="detail-form__body__title__type mb-0">{type}</p>
          <p className="detail-form__body__title__fill mb-0">{fill}</p>
        </div>
    )
}

export default DetailFormTitle;