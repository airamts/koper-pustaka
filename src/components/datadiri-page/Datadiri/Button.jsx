import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormulirValidation';
import Button from 'react-bootstrap/Button';


function ButtonDatadiri() {

  const { isFormValid } = useFormData();

  const navigate = useNavigate();

  const handeSubmit = (event) => {
    event.preventDefault();
    navigate('/Alamat');
  };
  
  return (
    <div 
    className="d-grid gap-2">
      <Button onClick={handeSubmit}
        className='fw-bolder mb-4' 
        variant="success" 
        size="md"
        disabled={!isFormValid}
        >
        Simpan dan Lanjutkan
      </Button>
    </div>
  );
}

export default ButtonDatadiri;