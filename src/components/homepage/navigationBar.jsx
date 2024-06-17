import React, { useState } from "react";
import { Navbar, Container, Nav, Image, Button, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoImage from "/assets/Logo/Logo.svg";
import searchIcon from "/assets/Icon/ic_round-search.svg";
import maintain from "/assets/Illustration/maintain.svg";

const NavigationBarLog = () => {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const handleNavClick = () => {
        setShowA(true);
        toggleShowA();
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary navigationBar">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/" className="active">Beranda</Nav.Link>
                            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Riwayat</Nav.Link>
                            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Pesan</Nav.Link>
                            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Koleksi Buku</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center flex-grow-1">
                            <Image src={logoImage} alt="Logo Koper Pustaka" className="logoKorpusLandingPage" />
                        </Navbar.Brand>
                        <Link to="/jelajah">
                            <Button variant="outline-success" className="searchBtn">
                                <Image className="searchBtnImg" src={searchIcon}/>
                                Cari Buku
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="outline-success" className="loginBtn">Login</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Toast show={showA} className="custom-toast">
                <Toast.Header>
                    <strong className="me-auto">Pengumuman!</strong>
                    <img
                        src={maintain}
                        className="rounded me-2"
                        alt=""
                    />
                    <button type="button" className="close" aria-label="Close" onClick={toggleShowA}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Toast.Header>
                <Toast.Body>Maaf halaman ini sedang dalam tahap development 👷‍♂️</Toast.Body>
            </Toast>
        </div>
    );
};

export default NavigationBarLog;
