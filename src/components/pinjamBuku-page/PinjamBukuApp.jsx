import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import PinjamBukuHeader from "./PinjamBuku/PinjamBukuHeader";
import DetailBukuForm from "./PinjamBuku/DetailBukuForm";
import AlasanPinjamForm from "./PinjamBuku/AlasanPinjamForm";
import MetodeKirimForm from "./PinjamBuku/MetodeKirimForm";
import TnCPinjamBuku from "./PinjamBuku/TnCPinjamBuku";
import ButtonLanjutkan from "./PinjamBuku/ButtonLanjutkan";
import NotifySuccessful from "./PinjamBuku/NotifySuccessful";
import ButtonBackBeranda from "./PinjamBuku/ButtonBackBeranda";
import { incrementBookQueue } from "../../utils/bookUtils";

class PinjamBukuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotify: false,
      isChecked: false,
      alasanPinjam: "",
      isAlasanValid: true,
      isMetodeValid: true,
      selectedOption: "",
      book: props.book,
    };
    this.onNextHandler = this.onNextHandler.bind(this);
    this.toggleNotify = this.toggleNotify.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleAlasanPinjamChange = this.handleAlasanPinjamChange.bind(this);
    this.handleMetodeChange = this.handleMetodeChange.bind(this);
    this.handlePinjamBuku = this.handlePinjamBuku.bind(this);
  }

  onNextHandler(event) {
    event.preventDefault();

    if (this.state.alasanPinjam.trim() === "") {
      this.setState({ isAlasanValid: false });
      return;
    } else {
      this.setState({ isAlasanValid: true });
    }

    if (!this.state.selectedOption) {
      this.setState({ isMetodeValid: false });
      return;
    } else {
      this.setState({ isMetodeValid: true });
    }

    if (this.state.isAlasanValid && this.state.isMetodeValid) {
      this.handlePinjamBuku();
      this.toggleNotify();
    }
  }

  toggleNotify() {
    this.setState((prevState) => ({
      showNotify: !prevState.showNotify,
    }));
  }

  handleCheckboxChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  handleAlasanPinjamChange(event) {
    this.setState({ alasanPinjam: event.target.value });
    this.setState({ isAlasanValid: event.target.value.trim() !== "" });
  }

  handleMetodeChange(selectedOption) {
    this.setState({ selectedOption, isMetodeValid: selectedOption !== "" });
  }

  handlePinjamBuku() {
    const { book } = this.state;
    if (book) {
      incrementBookQueue(book.id);
      if (this.props.onPinjamBuku) {
        this.props.onPinjamBuku({
          ...book,
          antrian: book.antrian + 1,
        });
      }
    }
  }

  render() {
    const { title, image, durationInMonths } = this.props;
    
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const currentDate = new Date();

    const formattedPinjamDate = currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();

    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + durationInMonths,
      currentDate.getDate()
    );

    const formattedEndDate = endDate.getDate() + " " + months[endDate.getMonth()] + " " + endDate.getFullYear();

    return (
      <div className="container d-flex flex-column gap-4 my-4">
        <Link to={`/book/${title}`} style={{ textDecoration: "none" }}>
          <button className="back-button d-flex align-items-center gap-2">
            <img src="/images/arrow-left.svg" alt="arrow-left" />
            <p className="mb-0">Kembali</p>
          </button>
        </Link>

        <form className="pinjam-form d-flex flex-column">
          <div className="pinjam-header d-flex">
            <PinjamBukuHeader />
          </div>
          <div className="content-row d-flex flex-column">
            <div className="content-row__1 d-flex flex-lg-row flex-column">
              <DetailBukuForm
                title={title}
                image={image}
                pinjamDate={formattedPinjamDate}
                durationInMonths={durationInMonths}
                endDate={formattedEndDate}
              />
              <AlasanPinjamForm
                alasanPinjam={this.state.alasanPinjam}
                onAlasanPinjamChange={this.handleAlasanPinjamChange}
                isAlasanValid={this.state.isAlasanValid}
              />
            </div>
            <div className="content-row__2 d-flex">
              <MetodeKirimForm
                handleMetodeChange={this.handleMetodeChange}
                isMetodeValid={this.state.isMetodeValid}
              />
            </div>
          </div>
          <div className="pinjam-TnC d-flex flex-column gap-4 align-items-end">
            <TnCPinjamBuku isChecked={this.handleCheckboxChange} />
            <ButtonLanjutkan
              onLanjut={this.onNextHandler}
              isChecked={this.state.isChecked}
            />
          </div>
        </form>
        <Modal
          isOpen={this.state.showNotify}
          // onRequestClose={this.toggleNotify}
          className="notify-successful d-flex flex-column align-items-center justify-content-center w-lg-25 w-sm-100"
        >
          <NotifySuccessful title={title} />
          <ButtonBackBeranda onBack={this.toggleNotify} />
        </Modal>
      </div>
    );
  }
}

export default PinjamBukuApp;
