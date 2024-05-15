import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useFormData } from './FormulirValidation';

function FormSatuDatadiri() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const { setFormValid } = useFormData();

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 13) {
      setPhoneNumber(value);
    }
  };

  React.useEffect(() => {
    setFormValid(phoneNumber && email && birthdate);
  }, [phoneNumber, email, birthdate]);

  return (
    <Form>
      <Form.Group className="mb-3 fw-bolder" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control className='fw-light fst-italic' type="email" placeholder="Masukan username kamu" />
      </Form.Group>
      <Form.Group className="mb-3 fw-bolder" controlId="exampleForm.ControlInput2">
        <Form.Label>Tanggal Lahir</Form.Label>
        <Form.Control className='fw-light fst-italic' type="date" placeholder="Masukan tanggal lahir kamu" />
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
