import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
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
        <Card className='mt-4'>
          <Card.Body>Full- Berantai adalah jenis piminjaman buku yang dapat diteruskan peminjamannnya oleh pihak peminjam<br></br>Non-Full Berantai adalah jenis peminjaman buku dimana peminjan harus mengembalikan buku tersebut kepada pemilik</Card.Body>
        </Card>
      </Form.Group>
    </Form>
  );
}

export default JenisBukuOption;
