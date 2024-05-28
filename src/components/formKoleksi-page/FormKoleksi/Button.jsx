import { useState, useEffect } from 'react';
import { useFormKoleksi } from './FormulirValidasiKoleksi';
import Button from 'react-bootstrap/Button';
import ModalKoleksi from "./ModalKoleksi";

function ButtonKoleksi() {
  const { isFormValid } = useFormKoleksi();
  const [showModalKoleksi, setShowModalKoleksi] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleModalInputClick = () => {
    if (isFormValid) {
      setShowModalKoleksi(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleClose = () => {
    setShowModalKoleksi(false);
  };

  useEffect(() => {
    let timer;
    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showError]);

  return (
    <div className="d-grid gap-2 mb-5">
      <Button
        className='fw-bolder'
        variant="success"
        size="md"
        onClick={handleModalInputClick}
      >
        Kirim
      </Button>
      {showError && !isFormValid && (
        <div 
        className='fw-light fst-italic'
        style={{ color: 'black', marginTop: '1px' }}>
          *Semua field harus diisi sebelum mengirim.
        </div>
      )}
      <ModalKoleksi
        show={showModalKoleksi}
        onHide={handleClose}
      />
    </div>
  );
}

export default ButtonKoleksi;
