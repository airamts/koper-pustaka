{/*import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SectionFirst from './SectionOne';

function ChooseAlamat() {
  const [showSectionFirst, setShowSectionFirst] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);

  const handleChooseInputClick = () => {
    setShowSectionFirst(true);
    setShowThirdButton(false);
  };

  const handleSecondButtonClick = () => {
    setShowThirdButton(true);
  };

  const handleThirdButtonClick = () => {
    handleChooseInputClick();
  };

  const handleBackToChooseAlamat = () => {
    setShowSectionFirst(false);
  };

  return (
    <div className="d-grid gap-2 mt-3">
      {!showSectionFirst && (
        <>
          <Button 
            variant="light" 
            size="md"
            onClick={handleChooseInputClick}>
            Gunakan lokasi saat ini
          </Button>
          <Button 
            className='fw-light'
            variant="light" 
            size="md"
            onClick={handleSecondButtonClick}>
            Tidak ketemu? isi alamat secara manual
          </Button>
          {showThirdButton && (
            <Button 
              variant="light" 
              size="md"
              onClick={handleThirdButtonClick}>
              <p>Akan berisi value dari input yang dimasukkan</p>
            </Button>
          )}
        </>
      )}
      {showSectionFirst && <SectionFirst onBack={handleBackToChooseAlamat} />}
    </div>
  );
}

export default ChooseAlamat;*/}
