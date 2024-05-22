import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function CheckboxKoleksiDua() {
  const { setTermsChecked } = useFormKoleksi();
  const [syarat, setSyarat] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [additionalCheckboxVisible, setAdditionalCheckboxVisible] = useState(false);


  const handleChange = (event) => {
    const { checked, value } = event.target;
    let updatedSyarat = checked ? [...syarat, value] : syarat.filter(item => item !== value);
    setSyarat(updatedSyarat);
    setTermsChecked(updatedSyarat.length > 2);
    setAllChecked(updatedSyarat.length === 3);

    if (updatedSyarat.length === 1) {
      setWarningVisible(true);
      setAdditionalCheckboxVisible(true);
    } else if (updatedSyarat.length === 3) {
      setWarningVisible(false);
    }

  };

  return (
    <Form>
      <Form.Label className='fw-bolder'>Syarat dan Ketentuan</Form.Label>
      <div className="mb-3">
        <Form.Check 
          type="checkbox" 
          id="syarat-meneruskan-buku" 
          label="Apakah kamu menyetujui untuk meneruskan buku"
          value="Meneruskan Buku"
          onChange={handleChange}
        />
        <Form.Check 
          type="checkbox" 
          id="buku-tidak-robek" 
          label="Buku tidak boleh robek"
          value="Buku Tidak Robek"
          onChange={handleChange}
        />
        <Form.Check 
          type="checkbox" 
          id="buku-tidak-terlipat" 
          label="Buku tidak boleh terlipat"
          value="Buku Tidak Terlipat"
          onChange={handleChange}
        />
        {warningVisible && !allChecked && (
          <p className='fw-light fst-italic'>*Semua syarat wajib di checklist</p>
        )}
      </div>
    </Form>
  );
}

export default CheckboxKoleksiDua;
