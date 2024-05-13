import React from "react";
import { FormKoleksiProvider } from "./FormulirValidasiKoleksi";
import TextFormKoleksi from "./Title";
import UnggahKoleksi from "./UnggahKoleksi";
import JenisBukuOption from "./JenisBuku";
import FormJudulPenulis from "./judul&penulis";
import GenreOption from "./Genre";
import DateDeskInput from "./DateDeks";
import CheckboxKoleksi from "./CheckBoxKoleksi";
import CheckboxKoleksiDua from "./ChechBoxDua";
import ButtonKoleksi from "./Button";
import FormKoleksiStars from "./Stars";



class FormulirKoleksi extends React.Component {

  render() {
    return (
        <FormKoleksiProvider>
      <div className="container-fluid">
        <div className="container d-flex flex-column gap-4 my-6">
          <TextFormKoleksi />
          <UnggahKoleksi />
        </div>
        <hr className="ms-5 me-5"></hr>
        <div className="container d-flex flex-column gap-4 my-6">
        <JenisBukuOption />
        <FormJudulPenulis />
        <GenreOption />
        <DateDeskInput />
        <CheckboxKoleksi />
        <CheckboxKoleksiDua />
        <FormKoleksiStars />
        <ButtonKoleksi />
        </div>
      </div>
      </FormKoleksiProvider>
    );
  }
}

export default FormulirKoleksi;
