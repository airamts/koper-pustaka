import React, { useState } from "react";
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import SectionSecond from "./SectionTwo";

function SectionFirst({ onBack }) {

  const [showSectionSecond, setShowSectionSecond] = useState(false);

  const handleSecondButtonClick = () => {
    setShowSectionSecond(true);
  }

  const handleShowFirst = () => {
    setShowSectionSecond(false);
  }

  if (showSectionSecond) {
    return <SectionSecond onShowFirst={handleShowFirst} />;
  }

  if (showSectionSecond) {
    return <SectionSecond />;
  }

  return (
    <div>
      <Figure>
        <p className='fw-bolder mb-1'>Tentukan titik pinpoin lokasi kamu!</p>
        <Figure.Image
          width={670}
          height={307}
          alt="Ini anggaplah Gambar Maps"
          src="/images/peta.svg"
        />
        <Figure.Caption>
          <label className='fw-bolder'>Sunter</label><br></br>
          Sunter, Jakarta Utara
        </Figure.Caption>
      </Figure>
      <div style={{ display: 'flex', gap: '1px' }}>
        <Button 
          className="col-4 me-1 fw-bolder" 
          variant="dark" 
          size="md"
          onClick={onBack}
        >
          Kembali
        </Button>
        <Button 
          className='col-8 fw-bolder' 
          variant="success" 
          size="md"
          onClick={handleSecondButtonClick}
        >
          Pilih lokasi dan lanjut isi alamat
        </Button>
      </div>
    </div>
  );
}

export default SectionFirst;
