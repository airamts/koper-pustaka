import React from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function JenisBukuOption() {
  const { setJenisBukuSelected } = useFormKoleksi();

  const handleSelectChange = (event) => {
    setJenisBukuSelected(event.target.value !== '');
  };

  return (
    <Form>
      <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
        <Form.Label className='mb-1 fw-bolder'>Jenis Buku</Form.Label>
        <Form.Select
          className=''
          aria-label="Default select example"
          onChange={handleSelectChange}>
          <option key='blankChoice' hidden value />
          <option value="1">Full-Berantai</option>
          <hr></hr>
          <option value="2">Non Full-Berantai</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default JenisBukuOption;
