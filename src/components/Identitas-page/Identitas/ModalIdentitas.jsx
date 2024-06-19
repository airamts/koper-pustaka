import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';

function ModalIdentitas(props) {
  const navigate = useNavigate();

  const handleBackBeranda = () => {
    props.onHide(); // Menyembunyikan modal
    navigate('/homeLog'); // Navigasi kembali ke Beranda
  };

  const centeredStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-body-vcenter"
      backdrop="static"
      centered>
      <Modal.Body style={centeredStyle}>
        <Image src="/images/PopUpidentitas.svg" style={{ marginBottom: '20px', maxWidth: '100%' }} />
        <p className='fw-normal mt-2'>
          Selamat, akunmu berhasil tervalidasi!
        </p>
        <Link to='/homeLog'>
          <Button
            className='btn btn-success mt-3'
            style={{ width: '300px' }} // Menetapkan lebar tombol
            onClick={handleBackBeranda}
          >
            Kembali ke Beranda
          </Button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}

export default ModalIdentitas;
