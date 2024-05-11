import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SectionSecond({ onShowFirst }) {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    labelAlamat: '',
    alamatLengkap: '',
    catatan: '',
    namaPenerima: '',
    nomorHP: ''
  });
  
  const handleInputChange = (event) => {
    const { id, value } = event.target; 
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/identitas');
  };

  const allInputsFilled = formData.labelAlamat && formData.alamatLengkap && formData.namaPenerima && formData.nomorHP;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '627px',
      margin: 'auto',
      boxSizing: 'border-box'}}>

      <Form>
        <h6 className="fw-bolder">Lengkapi detail alamat</h6>
        <hr></hr>
        <Form.Group className="mb-2 mt-1" controlId="labelAlamat">
          <Form.Label className='fw-bolder'>Label Alamat</Form.Label>
          <Form.Control placeholder="Rumah" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="alamatLengkap">
          <Form.Label className='fw-bolder'>Alamat Lengkap</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='' onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="catatan">
          <Form.Label className='fw-bolder'>Catatan (Opsional)</Form.Label>
          <Form.Control type="text" placeholder="" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="namaPenerima">
          <Form.Label className='fw-bolder'>Nama Penerima</Form.Label>
          <Form.Control type="text" placeholder="" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="nomorHP">
          <Form.Label className='fw-bolder'>Nomor HP</Form.Label>
          <Form.Control type="text" placeholder="" onChange={handleInputChange} />
        </Form.Group>
      </Form>

      <div style={{ display: 'flex', gap: '1px' }} >
        <Button className="col-4 me-1 fw-bolder" variant="dark" size="md" onClick={onShowFirst}>
          Kembali
        </Button>
        <Button className="col-8 fw-bolder" variant="success" size="md" disabled={!allInputsFilled} onClick={handleSubmit}>
          Simpan dan Lanjutkan
        </Button>
      </div>
    </div>
  );
}

export default SectionSecond;
