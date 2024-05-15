import React, { createContext, useContext, useState, useEffect } from 'react';

const FormKoleksiContext = createContext();

export function useFormKoleksi() {
  return useContext(FormKoleksiContext);
}

export const FormKoleksiProvider = ({ children }) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [jenisBukuSelected, setJenisBukuSelected] = useState(false);
  const [judulDanPenulisFilled, setJudulDanPenulisFilled] = useState(false);
  const [genreSelected, setGenreSelected] = useState(false);
  const [dateAndDescriptionFilled, setDateAndDescriptionFilled] = useState(false);
  const [deliveryMethodsChecked, setDeliveryMethodsChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [ratingGiven, setRatingGiven] = useState(false);
  
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    if (fileUploaded && jenisBukuSelected && judulDanPenulisFilled && genreSelected && dateAndDescriptionFilled && deliveryMethodsChecked && termsChecked && ratingGiven) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [fileUploaded, jenisBukuSelected, judulDanPenulisFilled, genreSelected, dateAndDescriptionFilled, deliveryMethodsChecked, termsChecked, ratingGiven]);

  return (
    <FormKoleksiContext.Provider value={{
      setFileUploaded,
      setJenisBukuSelected,
      setJudulDanPenulisFilled,
      setGenreSelected,
      setDateAndDescriptionFilled,
      setDeliveryMethodsChecked,
      setTermsChecked,
      setRatingGiven,
      isFormValid
    }}>
      {children}
    </FormKoleksiContext.Provider>
  );
};
