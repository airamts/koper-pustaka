import React from "react";
import { useParams } from "react-router-dom";
import PinjamBukuApp from "../components/pinjamBuku-page/PinjamBukuApp";
import { getBookData } from "../utils/dataBuku";

const PinjamBukuPage = () => {
  const { title } = useParams();
  const bookInfo = getBookData().find((book) => book.title === title);

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
    />
  );
};

export default PinjamBukuPage;
