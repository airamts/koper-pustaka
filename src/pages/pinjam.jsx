import React from "react";
import { useParams } from "react-router-dom";
import PinjamBukuApp from "../components/pinjamBuku-page/PinjamBukuApp";
import { getBookData } from "../utils/dataBuku";

const PinjamBukuPage = () => {
  const { title } = useParams();
  const bookInfo = getBookData().find((book) => book.title === title);

  const handlePinjamBuku = (updatedBook) => {
    // Menangani pembaruan status buku di backend atau state lokal
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
