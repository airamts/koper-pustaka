import React from 'react';
import FormulirKoleksi from './FormKoleksi/FormulirKoleksi';

class FormKoleksi extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="fw-bolder ms-5 mt-4">Aktifkan Koleksi Bukumu</h3>
        <FormulirKoleksi />
      </div>
    );
  }
}

export default FormKoleksi;
