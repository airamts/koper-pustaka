import React from "react";
import { getBookData } from "../../utils/dataBuku";
import DetailBookBody from "./DetailBook/DetailBookBody";
import BookCarousel from "./DetailBook/BookCarousel";
import DetailBookTab from "./DetailBook/DetailBookTab";
import BookDescription from "./DetailBook/BookDescription";
import DetailBookTag from "./DetailBook/DetailBookTag";
import ReviewBookList from "./ReviewBook/ReviewBookList";
import { Link } from "react-router-dom";

class DetailBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
    this.bookDescriptionRef = React.createRef();
    this.reviewBookRef = React.createRef();
  }

  componentDidMount() {
    this.loadBookData();
  }

  loadBookData = () => {
    const { match } = this.props;
    const { params } = match || {};
    const { title } = params || {};

    let book = null;

    const storedBookData = localStorage.getItem("books");
    if (storedBookData) {
      const bookData = JSON.parse(storedBookData);
      book = bookData.find((book) => book.title && book.title === title);
    }

    if (!book) {
      const bookFromData = getBookData().find(
        (book) => book.title && book.title === title
      );
      if (bookFromData) {
        this.setState({ book: bookFromData });
        localStorage.setItem("books", JSON.stringify(getBookData()));
      }
    } else {
      this.setState({ book });
    }
  }

  handleScrollToDescription = () => {
    this.bookDescriptionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  handleScrollToReview = () => {
    this.reviewBookRef.current.scrollIntoView({ behavior: "smooth" });
  };

  handleUpdateQueue = (newQueue) => {
    const updatedBook = { ...this.state.book, antrian: newQueue };
  
    const storedBookData = JSON.parse(localStorage.getItem("books"));
    const updatedBookData = storedBookData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    localStorage.setItem("books", JSON.stringify(updatedBookData));
  
    this.setState({ book: updatedBook }, this.loadBookData);
  };

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
      <div className="container d-flex flex-column gap-4 px-0">
        <Link to={`/jelajah`} style={{ textDecoration: "none" }}>
          <button className="back-button d-flex align-items-center gap-2 my-4">
            <img src="/images/arrow-left.svg" alt="arrow-left" />
            <p className="mb-0">Kembali</p>
          </button>
        </Link>
        <div className="detail-book d-flex flex-column justify-content-center gap-4">
          <h4 className="mb-4 text-start fw-bold fs-5">Detail Buku</h4>
          <BookCarousel
            image={book.image}
            image2={book.image2}
            image3={book.image3}
          />
          <h4 className="mb-0 text-center fw-bold">{book.title}</h4>
          <DetailBookTag category={book.category} peminjam={book.peminjam} />
          <DetailBookBody
            author={book.author}
            durationInMonths={book.durationInMonths}
            peminjam={book.peminjam}
            antrian={book.antrian}
            location={book.location}
            owner={book.owner}
            id={book.id}
            isAvailable={book.available}
            image={book.image}
            avatar={book.avatar}
            title={book.title}
            handleUpdateQueue={this.handleUpdateQueue}
          />
          <div className="book-detail__desc-review d-flex flex-column">
            <DetailBookTab
              handleScrollToDescription={this.handleScrollToDescription}
              handleScrollToReview={this.handleScrollToReview}
            />
            <div ref={this.bookDescriptionRef}>
              <BookDescription description={book.description} />
            </div>
            <div className="mt-4" ref={this.reviewBookRef}>
              <p className="fs-6 fw-bold mb-2">Review Buku</p>
              <ReviewBookList reviews={book.reviews} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBukuApp;
