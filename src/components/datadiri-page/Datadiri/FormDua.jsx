import React, { useState, useEffect } from 'react';
import { Form, FormGroup, FormLabel, FormCheck } from 'react-bootstrap';
import { useFormData } from './FormulirValidation';

function FormDuaDatadiri() {
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const { setFormDua } = useFormData();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleJobChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; 
    if (regex.test(value)) {
      setJob(value);
    }
  };

  // Efek untuk memeriksa validitas input
  useEffect(() => {
    setFormDua(gender && job);
  }, [gender, job, setFormDua]);

  return (
    <Form>
      <FormGroup className="mb-3">
        <FormLabel className='fw-bolder'>Jenis Kelamin</FormLabel>
        <div className='fw-normal'>
          <FormCheck
            inline
            type="radio"
            label="Laki-Laki"
            name="genderOptions"
            id="genderMale"
            value="male"
            onChange={handleGenderChange}
            checked={gender === 'male'}
          />
          <FormCheck
            inline
            type="radio"
            label="Perempuan"
            name="genderOptions"
            id="genderFemale"
            value="female"
            onChange={handleGenderChange}
            checked={gender === 'female'}
          />
        </div>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel className='fw-bolder'>Pekerjaan</FormLabel>
        <Form.Control
          className='fw-light fst-italic'
          type="text"
          placeholder="Masukan pekerjaan kamu"
          value={job}
          onChange={handleJobChange}
        />
      </FormGroup>
    </Form>
  );
}

export default FormDuaDatadiri;
