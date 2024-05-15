import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const VerfificationNotif = () => {
    return (
        <div className="divContainer">
            <div className="mustVerifContainer">
                <div className="mustVerif">
                    Akunmu belum terverifikasi nih! Klik tombol berikut untuk melakukan verifikasi
                </div>
                <div className="verifBtnContainer">
                    <Link to='/datadiri'><Button variant="outline-success" className="verifBtn">Verifikasi</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default VerfificationNotif