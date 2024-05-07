import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro display-flex'>
            <Container>
                <Row>
                    <Col>
                        <div className='sapaan'>Salam Pustaka!</div>
                        <div><h1 className='tagLine'>Mari Kita Jadikan Dunia Lebih Kaya dengan Ilmu</h1></div>
                        <div className='desc'>
                            <p>Dalam misi meningkatkan literasi di Indonesia,</p>
                            <p>Mari kita bersama hibahkan buku agar minat baca di Indonesia semakin meningkat</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Button className='introBtn' variant="outline-success">Tambah Koleksi Bukumu</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Intro