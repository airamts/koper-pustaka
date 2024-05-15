import React from "react";
import { FormDataProvider } from './FormulirValidation';
import FormSatuDatadiri from "./FormSatu";
import FormDuaDatadiri from "./FormDua";
import ButtonDatadiri from "./Button";

class FormulirUtuh extends React.Component {
  render() {
    return (
      <FormDataProvider>
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',width: '670px',margin: 'auto',padding: '20px',boxSizing: 'border-box'}}>
          <FormSatuDatadiri />
          <FormDuaDatadiri />
          <ButtonDatadiri />
        </div>
      </FormDataProvider>
    );
  }
}

export default FormulirUtuh;
