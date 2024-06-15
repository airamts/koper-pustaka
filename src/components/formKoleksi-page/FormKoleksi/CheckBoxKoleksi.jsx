import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function CheckboxKoleksi() {
  const { setDeliveryMethodsChecked, setDeliveryMethodsState, deliveryMethodsState } = useFormKoleksi();
  const [metode, setMetode] = useState([]);

  const handleChange = (event) => {
    const { checked, value } = event.target;
    const intValue = parseInt(value, 10); // Changed: Convert value to integer
    let updatedMetode = checked ? [...metode, intValue] : metode.filter((item) => item !== intValue); // Changed: Use integer for comparison
    setMetode(updatedMetode);
    setDeliveryMethodsChecked(updatedMetode.length > 0);
    setDeliveryMethodsState(updatedMetode);
  };

  useEffect(() => {}, [deliveryMethodsState]); // Changed: Add dependency to useEffect

  return (
    <Form>
      <Form.Label className="fw-bolder">Metode Pengiriman yang Tersedia</Form.Label>
      <div className="mb-3">
        <Form.Check
          type="checkbox"
          id="ambil-sendiri"
          label="Ambil Sendiri"
          value={1} // Changed: Integer value
          onChange={handleChange}
          disabled
        />
        <Form.Check
          type="checkbox"
          id="ketemuan"
          label="Ketemuan"
          value={2} // Changed: Integer value
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="jasa-kirim-cod"
          label="Jasa Kirim COD"
          value={3} // Changed: Integer value
          onChange={handleChange}
          disabled
        />
      </div>
    </Form>
  );
}

export default CheckboxKoleksi;
