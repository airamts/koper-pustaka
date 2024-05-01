import { Container, Row, Col, Image } from "react-bootstrap"
import udahLogin from "/assets/Illustration/noActivity.svg"

const RecentActivityLog = () => {
    return (
        <div>
            <Container className="recentActivityContainer display-flex">
                <Row>
                    <Col>
                        <h2>Aktivitas Berlangsung</h2>
                        <Image src={udahLogin} alt="login dulu lur"/>
                        <p>Belum ada aktivitas berlangsung</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RecentActivityLog