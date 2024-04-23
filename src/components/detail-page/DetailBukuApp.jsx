import React from "react";
import { getBookData } from "../../utils/dataBuku";
import DetailBookBody from "./DetailBook/DetailBookBody";

class DetailBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match || {};
    const { title } = params || {};

    const book = getBookData().find(
      (book) => book.title && book.title === title
    );

    if (book) {
      this.setState({ book });
    }
  }

  render() {
    const { book } = this.state;

    if (!book) {
      return (
        <div className="container">
          <h1>Buku tidak ditemukan</h1>
          <p>Judul buku dari URL: {this.props.match.params.title}</p>
        </div>
      );
    }

    return (
      <div className="container d-flex flex-column gap-4">
        <button className="back-button d-flex align-items-center gap-2">
          <img src="/images/arrow-left.svg" alt="arrow-left" />
          <p className="mb-0">Kembali</p>
        </button>
        <div className="detail-book d-flex flex-column justify-content-center gap-4">
          <h1 className="mb-0 text-center fw-semibold">{book.title}</h1>
          <DetailBookBody
            author={book.author}
            durationInMonths={book.durationInMonths}
            peminjam={book.peminjam}
            location={book.location}
            owner={book.owner}
            id={book.id}
            isAvailable={book.available}
          />
        </div>
      </div>
    );
  }
}

export default DetailBukuApp;
