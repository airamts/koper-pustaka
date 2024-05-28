import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function DateDeskInput() {
  const { setDateAndDescriptionFilled } = useFormKoleksi();
  const [tanggalPinjam, setTanggalPinjam] = useState('');
  const [deskripsiBuku, setDeskripsiBuku] = useState('');

  const handleChange = () => {
    setDateAndDescriptionFilled(tanggalPinjam.trim() !== '' && deskripsiBuku.trim() !== '');
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 300) { // Ensure the length is <= 300
      setDeskripsiBuku(e.target.value);
      handleChange();
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="dateInput">
        <Form.Label className='fw-bolder mb-1'>Waktu Pinjam Buku</Form.Label>
        <Form.Control
          className='fst-italic fw-light'
          type="date"
          value={tanggalPinjam}
          onChange={(e) => { setTanggalPinjam(e.target.value); handleChange(); }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="deskripsiInput">
        <Form.Label className='fw-bolder'>Deskripsi Buku</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          className='fw-light fst-italic'
          placeholder="Deskripsikan bagaimana kondisi buku dan bercerita tentang apa buku tersebut"
          value={deskripsiBuku}
          onChange={handleDescriptionChange}
          maxLength={300}
        />
        <div className="character-count fw-light text-end">
          {deskripsiBuku.length}/300
        </div>
      </Form.Group>
    </Form>
  );
}

export default DateDeskInput;
