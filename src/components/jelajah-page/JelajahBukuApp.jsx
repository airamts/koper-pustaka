import React from 'react';
import CardBookApp from './CardBook/CardBookApp.jsx';
import { getBookData } from '../../utils/dataBuku.js';
import SearchSelection from './SearchSelection.jsx';
import NavigationBarLog from '../homepage/navigationBarLog.jsx';
import Footer from '../homepage/footer.jsx';

class JelajalahBukuApp extends React.Component {
  constructor(props) {
    super(props);
    // Inisialisasi state dan data books dari localStorage atau getBookData()
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(getBookData()));
    }
    const allBooks = JSON.parse(localStorage.getItem('books')) || [];
    const sortedBooks = [...allBooks].sort((a, b) => a.antrian - b.antrian);
    const top4Books = sortedBooks.slice(0, 4);
    this.state = {
      cards: allBooks,
      search: '',
      activeTab: 'all',
      recommendCards: top4Books,
    };
    this.onSearchTitleHandler = this.onSearchTitleHandler.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    // Contoh penanganan error jika localStorage tidak berisi data yang valid
    if (!this.state.cards || this.state.cards.length === 0) {
      console.error('Data buku tidak ditemukan atau tidak valid.');
    }
  }

  onSearchTitleHandler(title) {
    this.setState({
      search: title,
    });
  }

  handleTabChange(tabId) {
    this.setState({
      activeTab: tabId,
    });
  }

  render() {
    const { cards, search, activeTab } = this.state;

    // Filtering cards based on search and activeTab
    const filteredCards = cards.filter((card) => card.title && card.title.toLowerCase().includes(search.toLowerCase()));

    // Displayed cards based on activeTab
    const displayedCards = activeTab === 'all' ? filteredCards : filteredCards.filter((card) => card.category && card.category.toLowerCase() === activeTab.toLowerCase());

    return (
      <div className="container-fluid d-flex flex-column gap-2">
        <NavigationBarLog />
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
        <Footer />
      </div>
    );
  }
}

export default JelajalahBukuApp;
