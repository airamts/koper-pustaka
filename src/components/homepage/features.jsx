import { useState } from 'react';
import { Container, Row, Col, Image, Toast } from 'react-bootstrap';
import pencilIco from "/assets/Icon/pencil-square.svg";
import bookIco from "/assets/Icon/tabler_book.svg";
import maintain from "/assets/Illustration/maintain.svg";

const Features = () => {
    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    return(
        <div className='features d-flex'>
            <Container className='featuresContainer' onClick={() => setShowToast(true)}>
                <Row>
                    <Col className='d-flex'>
                        <Image src={pencilIco} alt='Posting Review Bukumu' className='pencilIcon'/>
                        <p className='keterangan'>Posting Review Bukumu</p>
                    </Col>
                </Row>
            </Container>
            <Container className='featuresContainer' onClick={() => setShowToast(true)}>
                <Row>
                    <Col className='d-flex'>
                        <Image src={bookIco} alt='Aktifkan Koleksi Bukumu' className='pencilIcon'/>
                        <p className='keterangan'>Aktifkan Koleksi Bukumu</p>
                    </Col>
                </Row>
            </Container>
            <Toast show={showToast} onClose={toggleToast} className="custom-toast">
                <Toast.Header>
                    <strong className="me-auto">Pengumuman!</strong>
                    <img
                        src={maintain}
                        className="rounded me-2"
                        alt=""
                    />
                    <button type="button" className="close" aria-label="Close" onClick={toggleToast}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Toast.Header>
                <Toast.Body>Maaf halaman ini sedang dalam tahap development 👷‍♂️</Toast.Body>
            </Toast>
        </div>
    )
}

export default Features;
