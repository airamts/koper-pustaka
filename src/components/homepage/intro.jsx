import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Intro = () => {
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleButtonClick = (e) => {
            e.preventDefault();  
            window.scrollTo({
                top: 0,  
                behavior: 'smooth'
            });
            setTimeout(() => {
                navigate('/formkoleksi');
            }, 0);  
        };

        const button = buttonRef.current;
        if (button) {
            button.addEventListener('click', handleButtonClick);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleButtonClick);
            }
        };
    }, [navigate]);

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
                    <Col xs="auto">
                        <Link to='/formkoleksi' ref={buttonRef}>
                            <Button className='introBtn' variant="outline-success">Tambah Koleksi Bukumu</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Intro;
