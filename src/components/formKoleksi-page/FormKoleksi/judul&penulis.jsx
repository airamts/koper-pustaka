import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function FormJudulPenulis() {
  const { setJudulDanPenulisFilled } = useFormKoleksi();
  const [judulBuku, setJudulBuku] = useState('');
  const [penulisBuku, setPenulisBuku] = useState('');

  const handleChange = (field, value) => {
    if (field === 'judul') {
      setJudulBuku(value);
    } else {
      setPenulisBuku(value);
    }
    setJudulDanPenulisFilled(judulBuku.trim() !== '' && penulisBuku.trim() !== '');
  };

  return (
    <Form>
      <Form.Group className="mb-2" controlId="judulBukuInput">
        <Form.Label className='mb-1 fw-bolder'>Judul Buku</Form.Label>
        <Form.Control
          className='fw-light fst-italic'
          type="text"
          placeholder="Judul kamu"
          value={judulBuku}
          onChange={e => handleChange('judul', e.target.value)}
          maxLength={100}
        />
        <div className="character-count fw-light text-end">
          {judulBuku.length}/100
        </div>
      </Form.Group>
      <Form.Group className="mb-0" controlId="penulisBukuInput">
        <Form.Label className='mb-1 fw-bolder'>Penulis Buku</Form.Label>
        <Form.Control
          className='fw-light fst-italic'
          type="text"
          placeholder="Penulis Buku"
          value={penulisBuku}
          onChange={e => handleChange('penulis', e.target.value)}
          maxLength={100}
        />
        <div className="character-count fw-light text-end">
          {penulisBuku.length}/100
        </div>
      </Form.Group>
    </Form>
  );
}

export default FormJudulPenulis;
