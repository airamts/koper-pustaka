import React from "react";
import { getBookData } from "../../utils/dataBuku";

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

    console.log("Judul buku dari URL:", title);

    const book = getBookData().find(
      (book) => book.title && book.title === title
    );

    console.log("Data buku:", book);

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
        <h1>{book.title}</h1>
      </div>
    );
  }
}

export default DetailBukuApp;
