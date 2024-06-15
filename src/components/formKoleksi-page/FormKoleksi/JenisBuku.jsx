import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function JenisBukuOption() {
  const { setJenisBukuSelected, setJenisBukuState, jenisBukuState } = useFormKoleksi();

  const handleSelectChange = (event) => {
    setJenisBukuSelected(event.target.value !== '');
    setJenisBukuState(event.target.value);
  };

  useEffect(() => {}, [jenisBukuState]);

  return (
    <Form>
      <Form.Group
        className="mb-0"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="mb-1 fw-bolder">Jenis Buku</Form.Label>
        <Form.Select
          className=""
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option
            key="blankChoice"
            hidden
            value
          />
          <option value="full-berantai">Full-Berantai</option>
          <hr></hr>
          <option value="non full-berantai">Non Full-Berantai</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default JenisBukuOption;
