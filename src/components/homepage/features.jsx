import { Container, Row, Col, Image } from 'react-bootstrap';
import pencilIco from "../../assets/Icon/pencil-square.svg"
import bookIco from "../../assets/Icon/tabler_book.svg"

const Features = () => {
    return(
        <div className='features d-flex'>
            <Container className='featuresContainer'>
                <Row>
                    <Col className='d-flex'>
                        <Image src={pencilIco} alt='Posting Review Bukumu' className='pencilIcon'/>
                        <p className='keterangan'>Posting Review Bukumu</p>
                    </Col>
                </Row>
            </Container>
            <Container className='featuresContainer'>
                <Row>
                    <Col className='d-flex'>
                        <Image src={bookIco} alt='Posting Review Bukumu' className='pencilIcon'/>
                        <p className='keterangan'>Posting Review Bukumu</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features