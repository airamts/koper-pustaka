import React from "react";

function DetailBookTab({handleScrollToDescription, handleScrollToReview}) {
  return (
      <nav>
        <div className="nav nav-underline mb-4" id="nav-tab" role="tablist">
          <button
            className={`nav-link active custom-link`}
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all"
            type="button"
            role="tab"
            aria-controls="all"
            aria-selected="true"
            onClick={handleScrollToDescription}
          >
            Deskripsi Buku
          </button>
          <button
            className={`nav-link custom-link`}
            id="romance-tab"
            data-bs-toggle="tab"
            data-bs-target="#romance"
            type="button"
            role="tab"
            aria-controls="romance"
            aria-selected="false"
            onClick={handleScrollToReview}
          >
            Review Buku
          </button>
        </div>
      </nav>
  );
}

export default DetailBookTab;
