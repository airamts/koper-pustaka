import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function GenreOption() {
  const { setGenreSelected, setGenreBuku, genreBuku } = useFormKoleksi();

  const handleSelectChange = (event) => {
    setGenreSelected(event.target.value !== '');
    setGenreBuku(event.target.value);
  };

  useEffect(() => {}, [genreBuku]);

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-1 fw-bolder">Genre Buku</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option
            key="blankChoice"
            hidden
            value
          />
          <option value="romance">Romance</option>
          <hr></hr>
          <option value="history">History</option>
          <hr></hr>
          <option value="animasi">Animasi</option>
          <hr></hr>
          <option value="adventure">Adventure</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default GenreOption;
