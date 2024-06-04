import React, { useState } from "react";
import { Navbar, Container, Nav, Image, Button, Popover, Toast } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logoImage from "/assets/Logo/Logo.svg";
import searchIcon from "/assets/Icon/ic_round-search.svg";
import profil from "/assets/Illustration/Profil.svg";
import maintain from "/assets/Illustration/maintain.svg";

const NavigationBarLog = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [showA, setShowA] = useState(false);
    const location = useLocation();

    const toggleShowA = () => setShowA(!showA);
    const togglePopover = () => setShowPopover(!showPopover);

    const handleNavClick = (event, path) => {
        event.preventDefault();
        if (path === '/homeLog') {
            window.location.href = path;
        } else {
            setShowA(true);
        }
    };

    return (
        <div style={{ top: "0", position: "sticky", zIndex: "9999" }}>
            <Navbar expand="lg" className="bg-body-tertiary navigationBar">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link
                                as={Link}
                                to="/homeLog"
                                className={location.pathname === '/homeLog' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, '/homeLog')}
                            >
                                Beranda
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/riwayat"
                                className=""
                                onClick={(e) => handleNavClick(e, '/riwayat')}
                            >
                                Riwayat
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/pesan"
                                className=""
                                onClick={(e) => handleNavClick(e, '/pesan')}
                            >
                                Pesan
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/koleksiBuku"
                                className=""
                                onClick={(e) => handleNavClick(e, '/koleksiBuku')}
                            >
                                Koleksi Buku
                            </Nav.Link>
                        </Nav>
                        <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center flex-grow-1">
                            <Image src={logoImage} alt="Logo Koper Pustaka" className="logoKorpusLandingPage" />
                        </Navbar.Brand>
                        <Link to="/jelajah">
                            <Button variant="outline-success" className="searchBtn">
                                <Image className="searchBtnImg" src={searchIcon} />
                                Cari Buku
                            </Button>
                        </Link>
                        <div className="profil-container" onClick={togglePopover}>
                            <Image src={profil} alt="Profil" className="profil" />
                            {showPopover && (
                                <Popover className="popover-basic">
                                    <Popover.Body>
                                        <Link onClick={togglePopover} className="lihat-profil">Lihat Profil</Link>
                                        <br />
                                        <Link to="/login" onClick={togglePopover} className="logout">Log Out</Link>
                                    </Popover.Body>
                                </Popover>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Toast show={showA} className="custom-toast" onClose={toggleShowA} autohide delay={3000}>
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
