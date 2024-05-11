import React from "react";
import ProgressBarAlamat from "./alamat/ProgressBar";
import ProgressDeskripsiAl from "./alamat/ProgressDeskripsiAl";
import ImageAlamat from "./alamat/Figure";
import TitleAlamat from "./alamat/TitlePage";
import TextAlamat from "./alamat/Question";
import FormSatuAlamat from "./alamat/FormSatu";

class Alamat extends React.Component {

  render() {
    return (
      <div>
        <h3 className="fw-bolder ms-5 mt-4 mb-5">Verifikasi Akun</h3>

        <div className="container-fluid"
          style={{display: 'flex',flexDirection: 'column',width: '670px',margin: 'auto',padding: '20px',}}>
            <ProgressBarAlamat />
            <ProgressDeskripsiAl />
        </div>
        <hr className="ms-5 me-5"></hr>
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',width: '670px',margin: 'auto',padding: '20px',boxSizing: 'border-box'}}>
          <div className="mb-5"style={{display: 'flex',alignItems: 'center',justifyContent: 'flex-start',gap: '20px'}}>
            <ImageAlamat />
            <TitleAlamat />
          </div>
          <TextAlamat />
          <FormSatuAlamat />
        </div>
      </div>
    );
  }
}

export default Alamat;

