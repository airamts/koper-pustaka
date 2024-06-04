import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useNavigate, Link } from 'react-router-dom';

function ModalDatadiri(props) {
  const navigate = useNavigate();

  const handleBackHome = () => {
    props.onHide();
    navigate('/home');
  };

  const handleNext = () => {
    props.onHide();
    navigate('/datadiri');
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
      size="lg"
      aria-labelledby="contained-modal-body-vcenter"
      backdrop="static"
      centered>
      <Modal.Body style={centeredStyle}>
        <h5 className='mb-3 mt-1 fw-bolder'>Ayo segera verifikasi akunmu!</h5>
        <Image src="/images/VerifAkun.svg" style={{ marginBottom: '20px', maxWidth: '40%' }} />
        <p className='fw-normal mt-2'>
          Ayo segera verifikasi akunmu agar kamu bisa mengakses banyak fitur seperti:
          <div style={{ textAlign: 'left' }}>
            <br></br>- Meminjam buku pada fitur <b>Tambah Koleksi Buku</b>
            <br></br>- Mereview buku setelah dibaca pada fitur <b>Posting Review Buku</b>
            <br></br>- Unggah bukumu dengan fitur <b>Aktifkan Koleksi Buku</b>
          </div>
        </p>
        <div
          className='mb-2'
          style={{ display: 'inline-block' }}>
          <Link to='/homeLog'>
            <Button
              className='btn btn-dark mt-3 me-3'
              style={{ width: '200px' }}
              onClick={handleBackHome}>
              Nanti dulu deh
            </Button>
          </Link>
          <Button
            className='btn btn-success mt-3'
            style={{ width: '400px' }}
            onClick={handleNext}>
            Verifikasi Sekarang
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDatadiri;
