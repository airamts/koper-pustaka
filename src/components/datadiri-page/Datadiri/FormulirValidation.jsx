import React, { createContext, useContext, useState, useEffect } from 'react';

const FormDataContext = createContext();

export function useFormData() {
  return useContext(FormDataContext);
}

export const FormDataProvider = ({ children }) => {

  const [formSatu, setFormSatu] = useState(false);
  const [formDua, setFormDua] = useState(false);
  const [formData, setFormData] = useState({});
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    if (formSatu && formDua) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formSatu, formDua]);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <FormDataContext.Provider value={{ 
      setFormSatu,
      setFormDua,
      isFormValid,
      formData,
      updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};