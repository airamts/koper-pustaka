import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SectionFirst from './SectionOne';
import SectionSecond from './SectionTwo';
import Button from 'react-bootstrap/Button';

function Gabungan() {
  const [isSecondSectionValid, setIsSecondSectionValid] = useState(false);

  const navigate = useNavigate();

  const handleSecondSectionValidationChange = (isValid) => {
    setIsSecondSectionValid(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSecondSectionValid) {
      navigate('/identitas');
    } else {
      alert('Semua field harus diisi sebelum melanjutkan.');
    }
  };

  return (
    <div>
      <SectionSecond onValidationChange={handleSecondSectionValidationChange} />
      <SectionFirst />
      
      <div style={{ display: 'flex', gap: '1px', marginTop: '10px' }}>
        <Button
          className='col-12 fw-bolder'
          variant="success"
          size="md"
          onClick={handleSubmit}
          disabled={!isSecondSectionValid}
        >
          Simpan dan Lanjutkan
        </Button>
      </div>
    </div>
  );
}

export default Gabungan;
