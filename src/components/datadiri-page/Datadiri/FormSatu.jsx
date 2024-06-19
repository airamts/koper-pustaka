import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useFormData } from './FormulirValidation';

function FormSatuDatadiri() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('2003-07-13');
  const { setFormSatu, updateFormData } = useFormData();

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 13) {
      setPhoneNumber(value);
    }
  };


  const handleBirthdayChange = (event) => {
    setBirthdate(event.target.value);
  };

  useEffect(() => {
    setFormSatu(phoneNumber && birthdate);
    updateFormData({phoneNumber, birthdate});
  }, [phoneNumber, birthdate, setFormSatu, updateFormData]);

  return (
    <Form>
      <Form.Group className="mb-3 fw-bolder" controlId="exampleForm.ControlInput2">
        <Form.Label>Tanggal Lahir</Form.Label>
        <Form.Control 
        className='fw-light fst-italic' 
        type="date" 
        placeholder="Masukan tanggal lahir kamu" 
        value={birthdate}
        onChange={handleBirthdayChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 fw-bolder" controlId="exampleForm.ControlInput3">
        <Form.Label>Nomor HP</Form.Label>
        <Form.Control
          className='fw-light fst-italic'
          type="tel"
          placeholder="Masukan nomor HP kamu"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </Form.Group>
    </Form>
  );
}

export default FormSatuDatadiri;