import React, { useState } from 'react';
import FormSatuAlamat from './FormSatu';
import SectionSecond from './SectionTwo';

import { db } from '../../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';

function AlamatForm() {
  const [alamatFormData, setAlamatFormData] = useState({
    address: '',
    labelAlamat: '',
    alamatLengkap: '',
    catatan: '',
    namaPenerima: '',
    nomorHP: ''
  });

  const updateAlamatFormData = (newData) => {
    setAlamatFormData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "datadiri"), alamatFormData);
      console.log("Document successfully written!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const allInputsFilled = Object.values(alamatFormData).every(value => value.trim() !== '');

  return (
    <form onSubmit={handleSubmit}>
      <FormSatuAlamat updateAlamatFormData={updateAlamatFormData} />
      <SectionTwo updateAlamatFormData={updateAlamatFormData} />
      <div style={{ display: 'flex', gap: '1px', marginTop: '20px' }} >
      <Button className="col-4 me-1 fw-bolder" variant="dark" size="md" onClick={onSHowFirst}>
          Kembali
        </Button>
        <Button className="fw-bolder" variant="success" type="submit" disabled={!allInputsFilled}>
          Simpan dan Lanjutkan
        </Button>
      </div>

    </form>
  );
}

export default AlamatForm;
