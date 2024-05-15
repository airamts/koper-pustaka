import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function GenreOption() {
  const { setGenreSelected } = useFormKoleksi();

  const handleSelectChange = (event) => {
    setGenreSelected(event.target.value !== '');
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className='mb-1 fw-bolder'>Genre Buku</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option key='blankChoice' hidden value />
          <option value="1">Romance</option>
          <option value="2">History</option>
          <option value="3">Animasi</option>
          <option value="4">Adventure</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default GenreOption;
