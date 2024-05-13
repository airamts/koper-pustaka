import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FileEarmarkArrowUp } from 'react-bootstrap-icons';
import { useFormKoleksi } from './FormulirValidasiKoleksi';

function UnggahKoleksi() {
  const [file, setFile] = useState(null);
  const { setFileUploaded } = useFormKoleksi();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4', 'video/mov', 'video/x-matroska', 'application/pdf'];
      if (validExtensions.includes(selectedFile.type)) {
        setFile(selectedFile);
        setFileUploaded(true);
      } else {
        alert("File type not supported. Please select a file of type: JPEG, JPG, PNG, MP4, MOV, MKV, PDF.");
        setFileUploaded(false);
        setFile(null); // Jika file tidak valid, reset state file
      }
    }
  };

  return (
    <Form>
      <div className="border rounded-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150, padding: '20px' }}>
        <div className="upload-container" style={{ textAlign: 'center' }}>
          <label htmlFor="file-upload" className="cursor-pointer">
            <FileEarmarkArrowUp size={32} />
            <input
              type="file"
              id="file-upload"
              accept=".jpg, .jpeg, .png, .mp4, .mov, .mkv, .pdf"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
          {file && <div className="mt-2">
             {file.name}
          </div>}
          <p className='fw-light fst-italic mt-2'>*Format yang disetujui yaitu: jpg, jpeg, png, mp4, mov, mkv, pdf</p>
        </div>
      </div>
    </Form>
  );
}

export default UnggahKoleksi;
