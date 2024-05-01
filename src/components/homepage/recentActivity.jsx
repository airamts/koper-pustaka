import { Container, Row, Col, Image } from "react-bootstrap"
import mustLoginIllustration from "../../assets/Illustration/login-dulu.svg"

const RecentActivity = () => {
    return (
        <div className="recentActivityContainer d-flex">
            <Row>
                <Col>
                    <h2>Aktivitas Berlangsung</h2>
                    <Image src={mustLoginIllustration} alt="login dulu lur" />
                    <p>Kamu harus login dulu nih, biar fitur ini terbuka 😁</p>
                </Col>
            </Row>
        </div>
    )
}

export default RecentActivity