import React from "react";
import ProgressBarIdentitas from "./Identitas/ProgressBar";
import ImageIdentitas from "./Identitas/Figur";
import TitleIdentitas from "./Identitas/TitlePage";
import TextIdentitas from "./Identitas/Question";
import ProgressDeskripsiId from "./Identitas/ProgressbarDeskIdentitas";
import ParentComponent from "./Identitas/SectionOne";

class Identitas extends React.Component {

  render() {
    return (
      <div>
        <h3 className="fw-bolder ms-5 mt-4 mb-5">Verifikasi Akun</h3>

        <div className="container-fluid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '670px',
            margin: 'auto',
            padding: '20px',}}>
            <ProgressBarIdentitas />
            <ProgressDeskripsiId />
        </div>

        <hr className="ms-5 me-5"></hr>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '670px',
            margin: 'auto',
            padding: '20px',
            boxSizing: 'border-box'
          }}>
            <div className="mb-5"
            style={{
            display: 'flex',
            alignItems: 'center',  // Menyelaraskan item secara vertikal
            justifyContent: 'flex-start', // Menempatkan item di awal kontainer
            gap: '20px', // Memberi jarak antara image dan title
          }}>
            <ImageIdentitas />
            <TitleIdentitas />
          </div>
          <TextIdentitas />
          <ParentComponent />
        </div>
      </div>
    );
  }
}

export default Identitas;
