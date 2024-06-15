import express from 'express';
import multer from 'multer';
import admin from 'firebase-admin';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Mendapatkan __dirname dalam ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inisialisasi Firebase Admin SDK
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'fotobuku.appspot.com', // ganti dengan nama bucket Anda
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

app.post('/uploadbook', upload.single('fotoBuku'), async (req, res) => {
  const { judulBuku, deskripsiBuku } = req.body;

  if (!req.file || !judulBuku || !deskripsiBuku) {
    return res.status(400).send('Missing file or book attributes.');
  }

  try {
    const uniqueFileName = `${Date.now()}_${req.file.originalname}`;
    const blob = bucket.file(uniqueFileName);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobStream.on('error', (err) => {
      console.error('Blob stream error:', err);
      res.status(500).send({ message: 'Upload to storage failed', error: err });
    });

    blobStream.on('finish', async () => {
      const fileUrl = `https://storage.googleapis.com/${bucket.name}/${uniqueFileName}`;

      const bookRef = db.collection('books').doc();
      await bookRef.set({
        judulBuku,
        deskripsiBuku,
        fotoBukuUrl: fileUrl,
      });

      res.status(200).send({ id: bookRef.id, judulBuku, deskripsiBuku, fotoBukuUrl: fileUrl });
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error('Error uploading book:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
