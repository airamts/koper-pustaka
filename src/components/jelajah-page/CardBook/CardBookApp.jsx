import React from "react";
import CardBookList from "./CardBookList.jsx";
import CardBookTab from "./CardBookTab.jsx";

function CardBookApp({cards, recommendCards, handleTabChange, activeTab}) {
  const renderRecommendationList = () => {
    if (recommendCards.length === 0) {
      return <p>Tidak ada rekomendasi saat ini.</p>;
    }
    return <CardBookList cards={recommendCards} />;
  };

  return (
    <div className="card-list d-flex flex-column gap-4">
        <div className="card-list__genre d-flex flex-column gap-2">
          <h5 className="fw-bold fs-6">Buku Berdasarkan Genre</h5>
          <CardBookTab handleTabChange={handleTabChange} activeTab={activeTab}/>
          <CardBookList cards={cards} />
        </div>
        <div className="card-list__rekomendasi d-flex flex-column gap-2">
          <h5 className="fw-bold fs-6">Rekomendasi Buku</h5>
          {renderRecommendationList()}
        </div>
      </div>
  );
}

export default CardBookApp;
