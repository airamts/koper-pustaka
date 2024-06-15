import React, { useContext } from 'react';
import FormKoleksi from '../components/formKoleksi-page/FormKoleksi';
import { FormKoleksiContext } from '../components/formKoleksi-page/FormKoleksi/FormulirValidasiKoleksi';

const FormKoleksiPage = () => {
  const judul = useContext(FormKoleksiContext);

  console.log('judul: ', judul);
  return (
    <div className="container-fluid">
      <FormKoleksi />
    </div>
  );
};

export default FormKoleksiPage;
