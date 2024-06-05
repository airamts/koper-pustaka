import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormulirValidation';
import Button from 'react-bootstrap/Button';

import { db, auth } from '../../../firebase-config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function ButtonDatadiri() {
  const { isFormValid, formData } = useFormData();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      try {
        await addDoc(collection(db, "datadiri"), {
          ...formData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          userId: user.uid,
          });
        navigate('/Alamat');
      } catch (e) {
        console.error("error adding document: ",e);
        alert('Terjadi kesalahan saat menulis data. Silakan coba lagi.');
      }
    } else{
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
    <div className="d-grid gap-2">
      <Button
        onClick={handleSubmit}
        className='fw-bolder'
        variant="success"
        size="md"
        >
        Simpan dan Lanjutkan
      </Button>
      {showError && !isFormValid && (
        <div
          className='fw-light fst-italic'
          style={{ color: 'black', marginTop: '1px' }}>
          *Semua field harus diisi sebelum melanjutkan.
        </div>  
      )}
    </div>
  );
}

export default ButtonDatadiri;
