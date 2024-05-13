import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function useFormData() {
  return useContext(FormDataContext);
}

export const FormDataProvider = ({ children }) => {
  const [isFormValid, setFormValid] = useState(false);

  return (
    <FormDataContext.Provider value={{ isFormValid, setFormValid }}>
      {children}
    </FormDataContext.Provider>
  );
};
