import React from "react";

function CardBookTab() {
  return (
    <>
      <nav>
        <div className="nav nav-underline mb-4" id="nav-tab" role="tablist">
          <button
            className="nav-link active custom-link"
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all"
            type="button"
            role="tab"
            aria-controls="all"
            aria-selected="true"
          >
            All
          </button>
          <button
            className="nav-link custom-link"
            id="romance-tab"
            data-bs-toggle="tab"
            data-bs-target="#romance"
            type="button"
            role="tab"
            aria-controls="romance"
            aria-selected="false"
          >
            Romance
          </button>
          <button
            className="nav-link custom-link"
            id="adventure-tab"
            data-bs-toggle="tab"
            data-bs-target="#adventure"
            type="button"
            role="tab"
            aria-controls="adventure"
            aria-selected="false"
          >
            Adventure
          </button>
          <button
            className="nav-link custom-link"
            id="misteri-tab"
            data-bs-toggle="tab"
            data-bs-target="#misteri"
            type="button"
            role="tab"
            aria-controls="misteri"
            aria-selected="false"
          >
            Misteri
          </button>
          <button
            className="nav-link custom-link"
            id="animasi-tab"
            data-bs-toggle="tab"
            data-bs-target="#animasi"
            type="button"
            role="tab"
            aria-controls="animasi"
            aria-selected="false"
          >
            Animasi
          </button>
        </div>
      </nav>
    </>
  );
}

export default CardBookTab;
