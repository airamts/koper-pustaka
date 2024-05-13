import React, { useState } from 'react';
import { useFormKoleksi } from './FormulirValidasiKoleksi';
import Button from 'react-bootstrap/Button';
import ModalKoleksi from "./ModalKoleksi";

function ButtonKoleksi() {

  const { isFormValid } = useFormKoleksi();

  const [showModalKoleksi, setShowModalKoleksi] = useState(false);
  const handleModalInputClick = () => {
    setShowModalKoleksi(true);
  };

  const handleClose = () => {
    setShowModalKoleksi(false);
  };

  return (
    <div className="d-grid gap-2 mb-5">
      <Button 
      className='fw-bolder' 
      variant="success" 
      size="md"
      disabled={!isFormValid}
      onClick={handleModalInputClick}>
        Kirim
      </Button>
      <ModalKoleksi
      show={showModalKoleksi}
      onHide={handleClose}
      />
    </div>
  );
}

export default ButtonKoleksi;