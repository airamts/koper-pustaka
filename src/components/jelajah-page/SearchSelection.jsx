import React from "react";

function SearchSelection({ titleSearch, onSearch }) {
  return (
    <div className="search-selection">
      <p className="text-secondary">Ratusan buku menunggu untuk dibaca seseorang</p>
      <input
        type="text"
        placeholder="Cari Buku"
        className="search-selection with-icon"
        value={titleSearch}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchSelection;
