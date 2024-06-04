import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PinjamBukuApp from "../components/pinjamBuku-page/PinjamBukuApp";
import {
  loadBooksFromLocalStorage,
  saveBooksToLocalStorage,
} from "../utils/bookUtils";

const PinjamBukuPage = () => {
  const { title } = useParams();
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    const books = loadBooksFromLocalStorage();
    const book = books.find((book) => book.title === title);
    setBookInfo(book);
  }, [title]);

  const handlePinjamBuku = (updatedBook) => {
    const books = loadBooksFromLocalStorage();
    const bookIndex = books.findIndex((book) => book.id === updatedBook.id);

    if (bookIndex !== -1) {
      books[bookIndex] = updatedBook;
      saveBooksToLocalStorage(books);
    }

    console.log("Buku berhasil dipinjam:", updatedBook);
  };

  if (!bookInfo) {
    return <div>Buku tidak ditemukan</div>;
  }

  const { id, image, durationInMonths } = bookInfo;

  return (
    <PinjamBukuApp
      title={title}
      id={id}
      image={image}
      durationInMonths={durationInMonths}
      book={bookInfo}
      onPinjamBuku={handlePinjamBuku}
    />
  );
};

export default PinjamBukuPage;
