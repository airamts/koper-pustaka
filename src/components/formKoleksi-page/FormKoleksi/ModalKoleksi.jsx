import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

function ModalKoleksi(props) {
  const navigate= useNavigate();

  const handleBackHome = () => {
    props.onHide(); // Menyembunyikan modal
    navigate('/home'); // Navigasi kembali ke Beranda
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
        <Image src="/images/PopUpForm Koleksi.svg" style={{ marginBottom: '20px', maxWidth: '100%' }}/>
        <p className='fw-normal mt-2'>
        Selamat, Bukumu berhasil ditambahkan ke <br></br>daftar koleksi aktif kamu!
        </p>
        <Button 
          className='btn btn-success mt-3'
          style={{ width: '300px' }} // Menetapkan lebar tombol
          onClick={handleBackHome}>
          Kembali ke Beranda
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalKoleksi;
