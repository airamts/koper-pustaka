import React, { useState } from 'react';
import { FileEarmarkArrowUp } from 'react-bootstrap-icons';

function UnggahIdentitas({ onFileSelected }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const validExtensions = ['.jpg', '.jpeg', '.pdf'];
      const fileExtension = selectedFile.name.match(/\.[0-9a-z]+$/i)[0];
      if (validExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        onFileSelected(true);
      } else {
        alert("File type not supported. Please select another file.");
        onFileSelected(false);
      }
    } else {
      onFileSelected(false);
    }
  };

  return (
    <>
      <section className="pb-1 mb-5 mt-2">
        <div className="border rounded-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150 }}>
          <div className="upload-container" style={{ textAlign: 'center' }}>
            <label htmlFor="file-upload" className="cursor-pointer">
              <input 
                type="file" 
                id="file-upload" 
                accept=".jpg, .jpeg, .pdf"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <FileEarmarkArrowUp size={32} />
            </label>
            {file && <p className="mt-2">{file.name}</p>}
            <p className='fw-light fst-italic'>*Format yang disetujui yaitu: jpg, jpeg, dan pdf</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default UnggahIdentitas;
