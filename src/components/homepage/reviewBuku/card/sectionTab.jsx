import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import ReviewSection from './reviewSection';
import { getReviewBook } from '../../../../utils/dataReviewBuku';
import { getBookData } from '../../../../utils/dataBuku';

const SectionTab = () => {
  const [key, setKey] = useState('semua');
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(8); 

  const reviews = getReviewBook();
  const books = getBookData();

  useEffect(() => {
    setVisibleReviews(getRandomReviews(reviewsCount));
  }, [reviewsCount]);

  const getRandomReviews = (num) => {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const getRandomBook = () => {
    return books[Math.floor(Math.random() * books.length)];
  };

  const renderReviews = (reviewsToRender) => {
    return reviewsToRender.map((review) => {
      const randomBook = getRandomBook();
      return (
        <Col key={review.id} sm={6} md={3}>
          <ReviewSection 
            image={randomBook.image}
            title={randomBook.title}
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
        <Tab eventKey="semua" title="Semua">
          <Row>
            {renderReviews(visibleReviews)}
          </Row>
        </Tab>
        <Tab eventKey="terbaru" title="Terbaru">
          <Row>
            {renderReviews(visibleReviews)}
          </Row>
        </Tab>
        <Tab eventKey="terpopuler" title="Terpopuler">
          <Row>
            {renderReviews(visibleReviews)}
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
