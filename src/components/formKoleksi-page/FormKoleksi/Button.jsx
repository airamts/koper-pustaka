import { useState, useEffect } from 'react';
import { useFormKoleksi } from './FormulirValidasiKoleksi';
import Button from 'react-bootstrap/Button';
import ModalKoleksi from './ModalKoleksi';
import handleFormKoleksi from '../../../firebase/services/addBooks';

function ButtonKoleksi() {
  const { isFormValid } = useFormKoleksi();
  const [showModalKoleksi, setShowModalKoleksi] = useState(false);
  const [showError, setShowError] = useState(false);

  const { jenisBukuState, judulBuku, penulisBuku, genreBuku, durasiPinjamBukuState, deskripsiBukuState, deliveryMethodsState, termsCheckedState, ratingGivenState, fileUploadedState } = useFormKoleksi();

  let formData = new FormData();

  const handler = () => {};

  const handleModalInputClick = () => {
    console.log('Form validation state:', {
      jenis_buku: jenisBukuState,
      judul_buku: judulBuku,
      penulis_buku: penulisBuku,
      durasi_pinjam_buku: durasiPinjamBukuState,
      genre_buku: genreBuku,
      deskripsi_buku: deskripsiBukuState,
      delivery_methods: deliveryMethodsState,
      terms_checked: Object.values(termsCheckedState).every((value) => value),
      rating_given: ratingGivenState,
      file: fileUploadedState,
    });
    if (isFormValid) {
      setShowModalKoleksi(true);
      setShowError(false);
      const durasiPinjam = parseInt(durasiPinjamBukuState, 10);
      const deliveryMethods = parseInt(deliveryMethodsState, 10);
      const allTermsChecked = Object.values(termsCheckedState).every((value) => value);
      const ratingGiven = parseInt(ratingGivenState, 10);

      formData.append('jenis_buku', jenisBukuState);
      formData.append('judul_buku', judulBuku);
      formData.append('penulis_buku', penulisBuku);
      formData.append('durasi_pinjam_buku', durasiPinjam);
      formData.append('genre_buku', genreBuku);
      formData.append('deskripsi_buku', deskripsiBukuState);
      formData.append('delivery_methods', deliveryMethods);
      formData.append('terms_checked', allTermsChecked);
      formData.append('rating_givenß', ratingGiven);
      formData.append('file', fileUploadedState);

      handleFormKoleksi(formData);
    } else {
      setShowError(true);
    }
  };

  const handleClose = () => {
    setShowModalKoleksi(false);
  };

  useEffect(() => {
    let timer;
    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showError]);

  return (
    <div className="d-grid gap-2 mb-5">
      <Button
        className="fw-bolder"
        variant="success"
        size="md"
        onClick={handleModalInputClick}
        onSubmit={handler}
      >
        Kirim
      </Button>
      {showError && !isFormValid && (
        <div
          className="fw-light fst-italic"
          style={{ color: 'black', marginTop: '1px' }}
        >
          *Semua field harus diisi sebelum mengirim.
        </div>
      )}
      <ModalKoleksi
        show={showModalKoleksi}
        onHide={handleClose}
      />
    </div>
  );
}

export default ButtonKoleksi;
