import React, { useContext } from 'react';
import FormKoleksi from '../components/formKoleksi-page/FormKoleksi';
import { FormKoleksiContext } from '../components/formKoleksi-page/FormKoleksi/FormulirValidasiKoleksi';
import NavigationBarLog from '../components/homepage/navigationBarLog';

const FormKoleksiPage = () => {
  const judul = useContext(FormKoleksiContext);

  return (
    <div className="container-fluid">
      <NavigationBarLog />
      <FormKoleksi />
    </div>
  );
};

export default FormKoleksiPage;
