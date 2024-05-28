import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ChooseAlamat from './ChooseOne';

function FormSatuAlamat() {
  const [showChooseAlamat, setShowChooseAlamat] = useState(false);

  const handleAddressInputClick = () => {
    setShowChooseAlamat(true);
  };

  return (
    <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control 
          className='fst-italic' 
          type="text" 
          placeholder="Tulis nama/ jalan/ gedung/ perumahan"
          onClick={handleAddressInputClick} 
        />

        {showChooseAlamat && <ChooseAlamat showInitially={true} />}        
      </Form.Group>
    </Form>
  );
}

export default FormSatuAlamat;
