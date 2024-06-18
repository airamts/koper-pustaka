import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailBukuApp from '../components/detail-page/DetailBukuApp';
import DetailBukuAppFromDB from '../components/detail-page/DetailBukuAppFromDB';

const DetailPage = () => {
  const { title } = useParams();
  const location = useLocation();
  const [isFromFirestore, setIsFromFirestore] = useState(false);

  useEffect(() => {
    // Logika untuk menentukan apakah data berasal dari Firestore
    const fromFirestore = new URLSearchParams(location.search).get('fromFirestore') === 'true';

    // Atau berdasarkan localStorage
    if (!fromFirestore) {
      const storedBookData = localStorage.getItem('books');
      if (storedBookData) {
        const bookData = JSON.parse(storedBookData);
        const bookExists = bookData.some((book) => book.title === title);
        setIsFromFirestore(!bookExists);
      } else {
        setIsFromFirestore(true); // Jika tidak ada data di localStorage
      }
    } else {
      setIsFromFirestore(true); // Jika explicitly dari Firestore
    }
  }, [title, location.search]);

  return isFromFirestore ? <DetailBukuAppFromDB title={title} /> : <DetailBukuApp title={title} />;
};

export default DetailPage;
