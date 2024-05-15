import React, { useState } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function FormKoleksiStars() {
  const [rating, setRating] = useState(0);
  const { setRatingGiven } = useFormKoleksi();

  const handleStarClick = (value) => {
    setRating(value);
    setRatingGiven(value > 0);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i + 1}
        onClick={() => handleStarClick(i + 1)}
        style={{ cursor: 'pointer', margin: '0 5px', fontSize: '30px', color: rating >= i + 1 ? 'gold' : 'gray' }}
      >
        {rating >= i + 1 ? <BsStarFill /> : <BsStar />}
      </span>
    ));
  };

  return (
    <FormGroup className="mb-3">
      <FormLabel className='fw-bolder mb-0'>Nilai Kondisi Buku</FormLabel>
      <div>{renderStars()}</div>
    </FormGroup>
  );
}

export default FormKoleksiStars;
