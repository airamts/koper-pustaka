import { createContext, useContext, useState, useEffect } from 'react';

export const FormKoleksiContext = createContext();

export function useFormKoleksi() {
  return useContext(FormKoleksiContext);
}

export const FormKoleksiProvider = ({ children }) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileUploadedState, setFileUploadedState] = useState(null);
  const [jenisBukuSelected, setJenisBukuSelected] = useState(false);
  const [jenisBukuState, setJenisBukuState] = useState('');
  const [judulBuku, setJudulBuku] = useState('');
  const [penulisBuku, setPenulisBuku] = useState('');
  const [judulDanPenulisFilled, setSudulDanPenulisFilled] = useState(false);
  const [genreSelected, setGenreSelected] = useState(false);
  const [genreBuku, setGenreBuku] = useState('');
  const [dateAndDescriptionFilled, setDateAndDescriptionFilled] = useState('');
  const [durasiPinjamBukuState, setDurasiPinjamBukuState] = useState('');
  const [deskripsiBukuState, setDeskripsiBukuState] = useState('');
  const [deliveryMethodsChecked, setDeliveryMethodsChecked] = useState(false);
  const [deliveryMethodsState, setDeliveryMethodsState] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [termsCheckedState, setTermsCheckedState] = useState('');
  const [ratingGiven, setRatingGiven] = useState(false);
  const [ratingGivenState, setRatingGivenState] = useState(0);

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    if (fileUploaded && jenisBukuSelected && genreSelected && dateAndDescriptionFilled && deliveryMethodsChecked && termsChecked && ratingGiven) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [fileUploaded, jenisBukuSelected, judulBuku, penulisBuku, genreSelected, dateAndDescriptionFilled, deliveryMethodsChecked, termsChecked, ratingGiven]);

  return (
    <FormKoleksiContext.Provider
      value={{
        setFileUploaded,
        setJenisBukuSelected,
        setPenulisBuku,
        setJudulBuku,
        setGenreSelected,
        setDateAndDescriptionFilled,
        setDeliveryMethodsChecked,
        setTermsChecked,
        setRatingGiven,
        isFormValid,
        penulisBuku,
        judulBuku,
        genreBuku,
        setGenreBuku,
        durasiPinjamBukuState,
        setDurasiPinjamBukuState,
        deskripsiBukuState,
        setDeskripsiBukuState,
        deliveryMethodsState,
        setDeliveryMethodsState,
        setTermsCheckedState,
        termsCheckedState,
        ratingGivenState,
        setRatingGivenState,
        jenisBukuState,
        setJenisBukuState,
        fileUploadedState,
        setFileUploadedState,
      }}
    >
      {children}
    </FormKoleksiContext.Provider>
  );
};
