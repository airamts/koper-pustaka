import { Container, Row, Col, Image, Button, Navbar, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import bukuSatu from "../../assets/Buku/Buku 1.png"
import bukuDua from "../../assets/Buku/Buku 2.png"
import bukuTiga from "../../assets/Buku/Buku 3.png"
import starLight from "../../assets/Icon/Star Light.svg"
import starDark from "../../assets/Icon/Star Dark.svg"
import profileUser from "../../assets/Profil/profilFitria.png"

const Review = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className="text-center mt-4 mb-4">Review Buku</h1>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Semua</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Terbaru</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Terpopuler</Nav.Link>
                    </Nav.Item>
                </Nav>
                <h1 className='text-white'>TRENDING MOVIES</h1>
                <Row>
                    <Col md={3} className='cardBook' id="trending">
                        <Card className=" text-center movieImage">
                            <Image src={bukuSatu} alt="Buku Satu" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuDua} alt="Buku Dua" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuTiga} alt="Buku Tiga" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuSatu} alt="Buku Satu" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuDua} alt="Buku Dua" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className="text-center movieImage">
                            <Image src={bukuTiga} alt="Buku Tiga" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuSatu} alt="Buku Satu" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='cardBook'>
                        <Card className=" text-center movieImage">
                            <Image src={bukuDua} alt="Buku Dua" className='images' />
                            <div className=''>
                                <div className='p-2 m-1'>
                                    <Card.Title className='text-center'>Story of Kiran</Card.Title>
                                    <div className='rating'>
                                        <Col><Card.Text className='star'>
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starLight} />
                                            <Image src={starDark} />
                                        </Card.Text></Col>
                                        <Col><Card.Text className='angkaRating'>| 4/5</Card.Text></Col>
                                    </div>
                                    <Card.Text className='profilUserContainer'>
                                        <Col className='profileUser'><Image src={profileUser} className='profileUser' /></Col>
                                        <Col><Card.Text className='namaUser'>Fitria Susanti</Card.Text></Col>
                                    </Card.Text>
                                    <Card.Text>#Peminjam 1</Card.Text>
                                    <Card.Text className='text-left'>Bukunya menarik sekali untuk dibaca, pokoknya ini buku bikin membuat saya termotivasi menjalani hidup. Kondisi fisik bukunya masih bagus, kemarin pas aku selesai baca engga ada robek ataupun terlipat.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Row className='profilePeminjam'>
                            <Image />

                        </Row>
                        <Row className='reviewPeminjam'>

                        </Row>
                        <Row className='fotoPeminjam'>

                        </Row>
                    </Col>
                    <Button variant="dark" className='w-fit-content moreBtn'>Lihat lebih banyak...</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Review