import React from "react";

function DetailBookTab() {
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
          >
            Review Buku
          </button>
        </div>
      </nav>
  );
}

export default DetailBookTab;
