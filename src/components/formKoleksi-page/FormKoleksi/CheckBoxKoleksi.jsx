import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function CheckboxKoleksi() {
  const { setDeliveryMethodsChecked } = useFormKoleksi();
  const [metode, setMetode] = useState([]);

  const handleChange = (event) => {
    const { checked, value } = event.target;
    let updatedMetode = checked ? [...metode, value] : metode.filter(item => item !== value);
    setMetode(updatedMetode);
    setDeliveryMethodsChecked(updatedMetode.length > 0);
  };

  return (
    <Form>
      <Form.Label className='fw-bolder'>Metode Pengiriman yang Tersedia</Form.Label>
      <div className="mb-3">
        <Form.Check 
          type="checkbox" 
          id="ambil-sendiri" 
          label="Ambil Sendiri"
          value="Ambil Sendiri"
          onChange={handleChange}
        />
        <Form.Check 
          type="checkbox" 
          id="ketemuan" 
          label="Ketemuan"
          value="Ketemuan"
          onChange={handleChange}
        />
        <Form.Check 
          type="checkbox" 
          id="jasa-kirim-cod" 
          label="Jasa Kirim COD"
          value="Jasa Kirim COD"
          onChange={handleChange}
        />
      </div>
    </Form>
  );
}

export default CheckboxKoleksi;
