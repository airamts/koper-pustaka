import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import ReviewSection from './reviewSection';
import { getReviewBook } from '../../../../utils/dataReviewBuku';
import { getBookData } from '../../../../utils/dataBuku';

const SectionTab = () => {
  const [key, setKey] = useState('terbaru');
  const [visibleLatestReviews, setVisibleLatestReviews] = useState([]);
  const [visiblePopularReviews, setVisiblePopularReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(8);

  const reviews = getReviewBook();
  const books = getBookData();

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

  const sortByReviewDate = (a, b) => {
    const dateA = new Date(a.date.year, monthToNumber(a.date.month), a.date.day);
    const dateB = new Date(b.date.year, monthToNumber(b.date.month), b.date.day);
    return dateB - dateA;
  };

  const sortByPopularity = (a, b) => b.numberLoan - a.numberLoan;

  const sortByCustomOrder = (reviews) => {
    
    const customOrder = [1, 8, 7, 6, 5, 4, 3, 2];
    
    const sortedByCustomOrder = customOrder.map(number => 
      reviews
        .filter(review => review.numberLoan === number)
        .sort(sortByReviewDate)  
    ).flat(); 
    
    return sortedByCustomOrder;
  };

  useEffect(() => {
    const customOrderedReviews = sortByCustomOrder(reviews);
    setVisibleLatestReviews(customOrderedReviews.slice(0, reviewsCount));

    const sortedByPopularity = [...reviews].sort(sortByPopularity);
    setVisiblePopularReviews(sortedByPopularity.slice(0, reviewsCount));
  }, [key, reviews, reviewsCount]);

  const renderReviews = (reviewsToRender) => {
    return reviewsToRender.map((review, index) => {
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
            {renderReviews(visibleLatestReviews)}
          </Row>
        </Tab>
        <Tab eventKey="terpopuler" title="Terpopuler">
          <Row>
            {renderReviews(visiblePopularReviews)}
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
