import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import ReviewSection from './reviewSection';
import { getReviewBook } from '../../../../utils/dataReviewBuku';
import { getBookData } from '../../../../utils/dataBuku';

const SectionTab = () => {
  const [key, setKey] = useState('terbaru');
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(8);

  const reviews = getReviewBook();
  const books = getBookData();

  // Fungsi untuk mengonversi nama bulan menjadi angka
  const monthToNumber = (month) => {
    const monthMap = {
      'Januari': 0,
      'Februari': 1,
      'Maret': 2,
      'April': 3,
      'Mei': 4,
      'Juni': 5,
      'Juli': 6,
      'Agustus': 7,
      'September': 8,
      'Oktober': 9,
      'November': 10,
      'Desember': 11
    };
    return monthMap[month];
  };

  // Fungsi untuk mengurutkan ulasan berdasarkan tanggal
  const sortByReviewDate = (a, b) => {
    const dateA = new Date(a.date.year, monthToNumber(a.date.month), a.date.day);
    const dateB = new Date(b.date.year, monthToNumber(b.date.month), b.date.day);
    return dateB - dateA; // Urutan dari terbaru ke terlama
  };

  useEffect(() => {
    // Urutkan ulasan berdasarkan tanggal sebelum diset ke state
    const sortedReviews = [...reviews].sort(sortByReviewDate); // Pastikan kita mengurutkan salinan dari ulasan
    setVisibleReviews(sortedReviews.slice(0, reviewsCount));
  }, [reviewsCount]);

  // Fungsi untuk merender ulasan
  const renderReviews = (reviewsToRender) => {
    return reviewsToRender.map((review, index) => {
      // Tetapkan buku untuk setiap ulasan berdasarkan indeks ulasan untuk konsistensi
      const book = books[index % books.length];
      return (
        <Col key={review.id} sm={6} md={3}>
          <ReviewSection
            image={book.image}
            title={book.title}
            stars={4.5}
            reviewer={review.reviewer}
            avatar={review.avatar}
            numberLoan={review.numberLoan}
            comment={review.comment}
          />
        </Col>
      );
    });
  };

  // Fungsi untuk menangani penambahan jumlah ulasan yang ditampilkan
  const handleShowMore = () => {
    setReviewsCount(reviewsCount + 8);
  };

  return (
    <div>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex justify-content-center"
      >
        <Tab eventKey="terbaru" title="Terbaru">
          <Row>
            {renderReviews(visibleReviews)} {/* Menggunakan ulasan yang sudah diurutkan */}
          </Row>
        </Tab>
        <Tab eventKey="terpopuler" title="Terpopuler">
          <Row>
            {renderReviews(visibleReviews)} {/* Tetap menggunakan ulasan yang sama untuk tab terpopuler */}
          </Row>
        </Tab>
      </Tabs>
      <div className="text-center">
        <Button className="btn btn-primary" onClick={handleShowMore}>Lihat Lebih Banyak</Button>
      </div>
    </div>
  );
};

export default SectionTab;