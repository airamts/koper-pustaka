import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function DateDeskInput() {
  const { setDateAndDescriptionFilled, setPinjamBukuSelected, setDurasiPinjamBukuState, durasiPinjamBukuState, setDeskripsiBukuState, deskripsiBukuState } = useFormKoleksi();
  const [durasiPinjam, setDurasiPinjam] = useState('');
  const [deskripsiBuku, setDeskripsiBuku] = useState('');

  useEffect(() => {
    const allFilled = durasiPinjam !== '' && deskripsiBuku.trim() !== '';
    setDateAndDescriptionFilled(allFilled);
  }, [durasiPinjam, deskripsiBuku, setDateAndDescriptionFilled, durasiPinjamBukuState]); // Added: [durasiPinjamBukuState]

  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value, 10); // Changed: Ensure value is an integer
    setDurasiPinjam(value);
    // setPinjamBukuSelected(value !== '');
    setDurasiPinjamBukuState(value);
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 300) {
      setDeskripsiBuku(e.target.value);
      setDeskripsiBukuState(e.target.value);
    }
  };

  return (
    <Form>
      <Form.Group
        className="mb-4"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="mb-1 fw-bolder">Waktu Pinjam Buku</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
          value={durasiPinjam}
        >
          <option
            key="blankChoice"
            hidden
            value=""
          />
          <option value={1}>1 Bulan</option>
          <option value={2}>2 Bulan</option>
          <option value={3}>3 Bulan</option>
          <option value={4}>4 Bulan</option>
          <option value={5}>5 Bulan</option>
          <option value={6}>6 Bulan</option>
        </Form.Select>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="deskripsiInput"
      >
        <Form.Label className="fw-bolder">Deskripsi Buku</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          className="fw-light fst-italic"
          placeholder="Deskripsikan bagaimana kondisi buku dan bercerita tentang apa buku tersebut"
          value={deskripsiBuku}
          onChange={handleDescriptionChange}
          maxLength={300}
        />
        <div className="character-count fw-light text-end">{deskripsiBuku.length}/300</div>
      </Form.Group>
    </Form>
  );
}

export default DateDeskInput;
