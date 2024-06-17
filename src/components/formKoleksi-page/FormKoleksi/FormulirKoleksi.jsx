import React from 'react';
import { FormKoleksiProvider, useFormKoleksi } from './FormulirValidasiKoleksi';
import TextFormKoleksi from './Title';
import UnggahKoleksi from './UnggahKoleksi';
import JenisBukuOption from './JenisBuku';
import FormJudulPenulis from './judul&penulis';
import GenreOption from './Genre';
import DateDeskInput from './DateDeks';
import CheckboxKoleksi from './CheckBoxKoleksi';
import CheckboxKoleksiDua from './ChechBoxDua';
import ButtonKoleksi from './Button';
import FormKoleksiStars from './Stars';
import handleFormKoleksi from '../../../firebase/services/addBooks';

const FormulirKoleksi = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const message = await handleFormKoleksi(formData);
      alert(message); // Notify user of success
    } catch (error) {
      alert(error.message); // Notify user of failure
    }
  };
  return (
    <FormKoleksiProvider>
      <div className="container-fluid">
        <div className="container d-flex flex-column gap-4 my-6">
          <TextFormKoleksi />
          <UnggahKoleksi />
        </div>
        <hr className="ms-5 me-5"></hr>
        <div className="container d-flex flex-column gap-4 my-6">
          <JenisBukuOption />
          <FormJudulPenulis />
          <GenreOption />
          <DateDeskInput />
          <CheckboxKoleksi />
          <CheckboxKoleksiDua />
          <FormKoleksiStars />
          <ButtonKoleksi />
        </div>
      </div>
    </FormKoleksiProvider>
  );
};

export default FormulirKoleksi;
