import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

const getAllBooks = async () => {
  try {
    const booksCollectionRef = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollectionRef);

    if (booksSnapshot.empty) {
      console.log('No books available');
      return []; // Return empty array jika tidak ada dokumen
    }

    // Mengumpulkan semua data buku
    const booksList = [];
    booksSnapshot.forEach((doc) => {
      booksList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return booksList;
  } catch (error) {
    console.error('Error fetching books: ', error);
    throw new Error('Terjadi kesalahan saat mengambil data buku. Silakan coba lagi.');
  }
};

export default getAllBooks;
