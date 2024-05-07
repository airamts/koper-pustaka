import { Navbar, Container, Nav, Image, Button, Form } from "react-bootstrap"
import logoImage from "/assets/Logo/Logo.svg"
import searchIcon from "/assets/Icon/ic_round-search.svg"
import profil from "/assets/Illustration/Profil.svg"
const NavigationBarLog = () => {
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
                            <Nav.Link href="#action1">Beranda</Nav.Link>
                            <Nav.Link href="#action2">Riwayat</Nav.Link>
                            <Nav.Link href="#action3">Pesan</Nav.Link>
                            <Nav.Link href="#action4">Koleksi Buku</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center flex-grow-1">
                            <Image src={logoImage} alt="Logo Koper Pustaka" className="logoKorpusLandingPage" />
                        </Navbar.Brand>
                        <Form className="d-flex searchBar">
                            <Image src={searchIcon} alt="Search Icon" className="searchIco" />
                            <Form.Control
                                type="search"
                                placeholder="Cari buku"
                                className="me-2 searchContent"
                                aria-label="Search"
                            />
                        </Form>
                        <Image src={profil} alt="Profil" className="profil" />
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBarLog;