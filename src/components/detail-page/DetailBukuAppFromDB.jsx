import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailBookBody from './DetailBook/DetailBookBody';
import BookCarousel from './DetailBook/BookCarousel';
import DetailBookTab from './DetailBook/DetailBookTab';
import BookDescription from './DetailBook/BookDescription';
import DetailBookTag from './DetailBook/DetailBookTag';
import ReviewBookList from './ReviewBook/ReviewBookList';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const DetailBukuAppFromDB = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const bookDescriptionRef = useRef(null);
  const reviewBookRef = useRef(null);

  useEffect(() => {
    const loadBookData = async () => {
      try {
        const booksCollectionRef = collection(db, 'books');
        const booksSnapshot = await getDocs(booksCollectionRef);
        const booksFromDB = booksSnapshot.docs.map((doc) => doc.data());

        const foundBook = booksFromDB.find((book) => book.judulBuku === title);
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError('Buku tidak ditemukan');
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
        setError('Error fetching book data');
      }
    };

    loadBookData();
  }, [title]);

  const handleScrollToDescription = () => {
    bookDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToReview = () => {
    reviewBookRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUpdateQueue = (newQueue) => {
    setBook((prevBook) => ({ ...prevBook, antrian: newQueue }));
  };

  if (error) {
    return (
      <div className="container">
        <h1>{error}</h1>
        <p>Judul buku dari URL: {title}</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column gap-4 px-0">
      <Link
        to={`/jelajah`}
        style={{ textDecoration: 'none' }}
      >
        <button className="back-button d-flex align-items-center gap-2 my-4">
          <img
            src="/images/arrow-left.svg"
            alt="arrow-left"
          />
          <p className="mb-0">Kembali</p>
        </button>
      </Link>
      <div className="detail-book d-flex flex-column justify-content-center gap-4">
        <h4 className="mb-4 text-start fw-bold fs-5">Detail Buku</h4>
        <BookCarousel
          image={book.coverImageUrl}
          image2={book.coverImageUrl}
          image3={book.coverImageUrl}
        />
        <h4 className="mb-0 text-center fw-bold">{book.judulBuku}</h4>
        <DetailBookTag
          category={book.genre}
          peminjam={book.peminjam}
        />
        <DetailBookBody
          author={book.penulisBuku}
          durationInMonths={book.waktuPinjam}
          peminjam={book.peminjam}
          antrian={book.antrian}
          location={book.location}
          owner={book.pemilikBuku}
          id={book.id}
          isAvailable={book.statusBuku}
          image={book.coverImageUrl}
          avatar={book.avatar}
          title={book.judulBuku}
          handleUpdateQueue={handleUpdateQueue}
        />
        <div className="book-detail__desc-review d-flex flex-column">
          <DetailBookTab
            handleScrollToDescription={handleScrollToDescription}
            handleScrollToReview={handleScrollToReview}
          />
          <div ref={bookDescriptionRef}>
            <BookDescription description={book.deskripsi} />
          </div>
          {Array.isArray(book.reviews) && book.reviews.length > 0 ? (
            <div
              className="mt-4"
              ref={reviewBookRef}
            >
              <p className="fs-6 fw-bold mb-2">Review Buku</p>
              <ReviewBookList reviews={book.reviews} />
            </div>
          ) : (
            <div
              className="mt-4"
              ref={reviewBookRef}
            >
              <p className="fs-6 fw-bold mb-2">Review Buku</p>
              <p>Belum ada review untuk buku ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailBukuAppFromDB;
