import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalIdentitas from "./ModalIdentitas";

function ButtonIdentitas({isFileSelected}) {
  const [showModalIdentitas, setShowModalIdentitas] = useState(false);
  
  const handleModalInputClick = () => {
    setShowModalIdentitas(true);
  };

  const handleClose = () => {
    setShowModalIdentitas(false);
  };

  return (
    <div className="d-grid gap-2 mb-4">
      <Button 
        className='fw-bolder' 
        variant="success" 
        size="md"
        onClick={handleModalInputClick}
        disabled={!isFileSelected}
      >
        Simpan dan Lanjutkan
      </Button>
      <ModalIdentitas
        show={showModalIdentitas}
        onHide={handleClose}
      />
    </div>
  );
}

export default ButtonIdentitas;
