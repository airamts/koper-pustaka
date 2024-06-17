import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function CheckboxKoleksiDua() {
  const { setTermsChecked, termsCheckedState, setTermsCheckedState } = useFormKoleksi();
  const [syarat, setSyarat] = useState({
    syaratMeneruskanBuku: false,
    bukuTidakRobek: false,
    bukuTidakTerlipat: false,
  });
  const [warningVisible, setWarningVisible] = useState(false);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    const updatedSyarat = { ...syarat, [id]: checked };
    setSyarat(updatedSyarat);

    const allChecked = Object.values(updatedSyarat).every((value) => value === true);

    setTermsChecked(allChecked);
    setTermsCheckedState(updatedSyarat);

    if (Object.values(updatedSyarat).filter(Boolean).length === 1) {
      setWarningVisible(true);
    } else if (allChecked) {
      setWarningVisible(false);
    }
  };

  useEffect(() => {}, [termsCheckedState]);

  return (
    <Form>
      <Form.Label className="fw-bolder">Syarat dan Ketentuan</Form.Label>
      <div className="mb-3">
        <Form.Check
          type="checkbox"
          id="syaratMeneruskanBuku"
          label="Apakah kamu menyetujui untuk meneruskan buku"
          checked={syarat.syaratMeneruskanBuku}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="bukuTidakRobek"
          label="Buku tidak boleh robek"
          checked={syarat.bukuTidakRobek}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="bukuTidakTerlipat"
          label="Buku tidak boleh terlipat"
          checked={syarat.bukuTidakTerlipat}
          onChange={handleChange}
        />
        {warningVisible && !Object.values(syarat).every((value) => value) && <p className="fw-light fst-italic">*Semua syarat wajib di checklist</p>}
      </div>
    </Form>
  );
}

export default CheckboxKoleksiDua;
