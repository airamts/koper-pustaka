import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function DateDeskInput() {
  const { setDateAndDescriptionFilled, setPinjamBukuSelected } = useFormKoleksi();
  const [durasiPinjam, setDurasiPinjam] = useState('');
  const [deskripsiBuku, setDeskripsiBuku] = useState('');

  useEffect(() => {
    const allFilled = durasiPinjam !== '' && deskripsiBuku.trim() !== '';
    setDateAndDescriptionFilled(allFilled);
  }, [durasiPinjam, deskripsiBuku, setDateAndDescriptionFilled]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setDurasiPinjam(value);
    setPinjamBukuSelected(value !== '');
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 300) {
      setDeskripsiBuku(e.target.value);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label className='mb-1 fw-bolder'>Waktu Pinjam Buku</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
          value={durasiPinjam}
        >
          <option key='blankChoice' hidden value="" />
          <option value="1">1 Bulan</option><hr></hr>
          <option value="2">2 Bulan</option><hr></hr>
          <option value="3">3 Bulan</option><hr></hr>
          <option value="4">4 Bulan</option><hr></hr>
          <option value="5">5 Bulan</option><hr></hr>
          <option value="6">6 Bulan</option>
        </Form.Select>
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
