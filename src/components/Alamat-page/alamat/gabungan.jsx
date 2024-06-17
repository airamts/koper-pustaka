import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SectionFirst from './SectionOne';
import SectionSecond from './SectionTwo';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { db, auth } from '../../../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function Gabungan() {
  const [isSecondSectionValid, setIsSecondSectionValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [secondSectionData, setSecondSectionData] = useState({});
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSecondSectionValidationChange = (isValid) => {
    setIsSecondSectionValid(isValid);
  };

  const handleSecondSectionDataChange = (data) => {
    setSecondSectionData(data);
  };

  const handleMarkerPositionChange = (position) => {
    setMarkerPosition(position);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSecondSectionValid && markerPosition) {
      try {
        await addDoc(collection(db, "alamat"), {
          ...secondSectionData,
          markerPosition,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          userId: user.uid,
        });
        navigate('/identitas');
      } catch (e) {
        console.error("Error adding document: ", e);
        alert('Terjadi kesalahan saat menulis data. Silakan coba lagi.');
      }
    } else {
      setShowError(true);
    }
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
    <div>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          Semua field harus diisi sebelum melanjutkan.
        </Alert>
      )}
      <SectionSecond onValidationChange={handleSecondSectionValidationChange}
      onDataChange={handleSecondSectionDataChange} />
      <SectionFirst onMarkerPositionChange={handleMarkerPositionChange} />
      
      <div style={{ display: 'flex', gap: '1px', marginTop: '10px' }}>
        <Button
          className='col-12 fw-bolder'
          variant="success"
          size="md"
          onClick={handleSubmit}
          disabled={!isSecondSectionValid || !markerPosition}
        >
          Simpan dan Lanjutkan
        </Button>
      </div>
    </div>
  );
}

export default Gabungan;
