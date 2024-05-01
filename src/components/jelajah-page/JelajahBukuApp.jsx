import React from "react";
import CardBookApp from "./CardBook/CardBookApp.jsx";
import { getBookData } from "../../utils/dataBuku.js";
import SearchSelection from "./SearchSelection.jsx";

class JelajalahBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: getBookData(),
      search: "",
      activeTab: "all",
      recommendCards: getBookData(),
    };
    this.onSearchTitleHandler = this.onSearchTitleHandler.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  onSearchTitleHandler(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }

  handleTabChange(tabId) {
    this.setState({
      activeTab: tabId,
    });
  }

  render() {
    const { cards, search, activeTab } = this.state;

    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );

    const displayedCards =
      activeTab === "all"
        ? filteredCards
        : filteredCards.filter(
            (card) => card.category.toLowerCase() === activeTab.toLowerCase()
          );

    return (
      <div className="container d-flex flex-column gap-4">
        <button className="back-button d-flex align-items-center gap-2 my-4">
          <img src="/images/arrow-left.svg" alt="arrow-left" />
          <p className="mb-0">Kembali</p>
        </button>
        <div className="container d-flex flex-column gap-4">
          <h2 className="fs-4 fw-bold">Cari Buku Yang Kamu Inginkan</h2>
          <SearchSelection onSearch={this.onSearchTitleHandler} />
          <CardBookApp
            cards={displayedCards}
            recommendCards={this.state.recommendCards}
            handleTabChange={this.handleTabChange}
            activeTab={activeTab}
          />
        </div>
      </div>
    );
  }
}

export default JelajalahBukuApp;
