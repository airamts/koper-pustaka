import { Col, Button } from "react-bootstrap"

const VerfificationNotif = () => {
    return (
        <div className="divContainer">
            <div className="mustVerifContainer">
                <div className="mustVerif">
                    Akunmu belum terverifikasi nih! Klik tombol berikut untuk melakukan verifikasi
                </div>
                <div className="verifBtnContainer">
                    <Button variant="outline-success" className="verifBtn">Verifikasi</Button>
                </div>
            </div>
        </div>
    )
}

export default VerfificationNotif