import React, { useEffect, useState } from 'react';
import CardBookItem from './CardBookItem';
import { db } from '../../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function CardBookListFromDB() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Function to fetch books data from Firestore
    const fetchBooks = async () => {
      try {
        const booksCollectionRef = collection(db, 'books');
        const booksSnapshot = await getDocs(booksCollectionRef);

        const booksData = booksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCards(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="card-book__list">
      {cards.length ? (
        cards.map((book) => (
          <CardBookItem
            key={book.id}
            id={book.id}
            image={book.coverImageUrl} // Adjust with your actual field name from Firestore
            title={book.judulBuku} // Adjust with your actual field name from Firestore
            author={book.penulisBuku} // Adjust with your actual field name from Firestore
            durationInMonths={book.waktuPinjam} // Adjust with your actual field name from Firestore
            category={book.genre} // Adjust with your actual field name from Firestore
            available={book.statusBuku}
            owner={book.pemilikBuku}
            {...book} // Pass all other data as props to CardBookItem
          />
        ))
      ) : (
        <p>Buku Tidak Tersedia</p>
      )}
    </div>
  );
}

export default CardBookListFromDB;
