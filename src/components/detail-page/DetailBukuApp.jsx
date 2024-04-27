import React from "react";
import { getBookData } from "../../utils/dataBuku";
import DetailBookBody from "./DetailBook/DetailBookBody";
import BookCarousel from "./DetailBook/BookCarousel";
import DetailBookTab from "./DetailBook/DetailBookTab";
import BookDescription from "./DetailBook/BookDescription";
import DetailBookTag from "./DetailBook/DetailBookTag";
import ReviewBookList from "./ReviewBook/ReviewBookList";
import { getReviewBook } from "../../utils/dataReviewBuku";
import { Link } from "react-router-dom";

class DetailBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      reviews: getReviewBook(),
    };
    this.bookDescriptionRef = React.createRef();
    this.reviewBookRef = React.createRef();
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

  handleScrollToDescription = () => {
    this.bookDescriptionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  handleScrollToReview = () => {
    this.reviewBookRef.current.scrollIntoView({ behavior: "smooth" });
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
          <BookCarousel image={book.image} />
          <h4 className="mb-0 text-center fw-bold">{book.title}</h4>
          <DetailBookTag category={book.category} />
          <DetailBookBody
            author={book.author}
            durationInMonths={book.durationInMonths}
            peminjam={book.peminjam}
            location={book.location}
            owner={book.owner}
            id={book.id}
            isAvailable={book.available}
            image={book.image}
            avatar={book.avatar}
            title={book.title}
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
              <ReviewBookList reviews={this.state.reviews} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBukuApp;
