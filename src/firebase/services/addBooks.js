import { db, storage, auth } from '../config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import {getAuth, onAuthStateChanged } from 'firebase/auth';

const handleFormKoleksi = async (formData) => {
  try {
    const file = formData.get('file');
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Anda harus login untuk menambahkan buku.');
    }

    // Upload file to Firebase Storage
    const storageRef = ref(storage, `file/${file.name}`);
    await uploadBytes(storageRef, file);
    const coverImageUrl = await getDownloadURL(storageRef);

    // Check if 'books' collection exists
    const booksCollectionRef = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollectionRef);

    // If 'books' collection doesn't exist, create it
    if (booksSnapshot.empty) {
      console.log("Creating 'books' collection");
      await addDoc(collection(db, 'books'), {}); // Add a dummy document to create the collection
    }

    const termsCheckedString = formData.get('terms_checked');
    const termsChecked = termsCheckedString === 'true'; // Convert string to boolean

     // Fetch user data from Firestore
     const userDocRef = doc(db, 'UserRegister', user.uid);
     const userDoc = await getDoc(userDocRef);
 
     if (!userDoc.exists()) {
       throw new Error('Data pengguna tidak ditemukan di Firestore');
     }
 
     const userData = userDoc.data();
     const pemilikBuku = user.email;

    // Prepare book data
    const docData = {
      jenisBuku: formData.get('jenis_buku'),
      judulBuku: formData.get('judul_buku'),
      penulisBuku: formData.get('penulis_buku'),
      genre: formData.get('genre_buku'),
      waktuPinjam: parseInt(formData.get('durasi_pinjam_buku'), 10),
      deskripsi: formData.get('deskripsi_buku'),
      delivery: parseInt(formData.get('delivery_methods'), 10),
      terms: termsChecked,
      star: parseInt(formData.get('rating_givenß'), 10),
      coverImageUrl,
      statusBuku: true,
      pemilikBuku,
      ownerId: user.uid
    };

    // Add book document to 'books' collection
    await addDoc(collection(db, 'books'), docData);

    return 'Buku berhasil ditambahkan!';
  } catch (error) {
    console.error('Error adding book: ', error);
    throw new Error('Terjadi kesalahan saat menambahkan buku. Silakan coba lagi.');
  }
};

export default handleFormKoleksi;
