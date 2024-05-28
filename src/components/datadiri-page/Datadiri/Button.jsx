import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormulirValidation';
import Button from 'react-bootstrap/Button';

function ButtonDatadiri() {
  const { isFormValid } = useFormData();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      navigate('/Alamat');
    } else {
      setShowError(true);
    }
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
    <div className="d-grid gap-2">
      <Button
        onClick={handleSubmit}
        className='fw-bolder'
        variant="success"
        size="md"
      >
        Simpan dan Lanjutkan
      </Button>
      {showError && !isFormValid && (
        <div 
        className='fw-light fst-italic'
        style={{ color: 'black', marginTop: '1px' }}>
          *Semua field harus diisi sebelum melanjutkan.
        </div>
      )}
    </div>
  );
}

export default ButtonDatadiri;
