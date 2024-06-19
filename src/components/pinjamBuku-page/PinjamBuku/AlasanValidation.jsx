import React, { useState } from "react";
import AlasanPinjamForm from "./AlasanPinjamForm";
import MetodeCheckbox from "./MetodeCheckbox";
import ButtonLanjutkan from "./ButtonLanjutkan";
import { auth, db } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const ParentComponent = () => {
  const [alasanPinjam, setAlasanPinjam] = useState("");
  const [metodePengiriman, setMetodePengiriman] = useState("");
  const [isAlasanValid, setIsAlasanValid] = useState(true);
  const [isMetodeValid, setIsMetodeValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleAlasanPinjamChange = (event) => {
    const value = event.target.value;
    setAlasanPinjam(value);
    setIsAlasanValid(value.trim() !== ""); // Validasi alasan pinjam
  };

  const handleMetodeChange = (metode) => {
    setMetodePengiriman(metode);
    setIsMetodeValid(metode !== ""); // Validasi metode pengiriman
    setIsChecked(true); // Enable button jika metode dipilih
  };

  const handleLanjut = async () => {
    console.log("Button Lanjutkan ditekan");
    console.log("Button Lanjutkan ditekan");
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      // Pastikan alasanPinjam memiliki nilai yang valid sebelum disimpan
      if (alasanPinjam.trim() !== "") {
        await setDoc(doc(db, "PinjamBuku", uid), {
          alasanPinjam: alasanPinjam,
          metodePengiriman: metodePengiriman
        });
        console.log("Data berhasil disimpan ke Firestore");
        // Lakukan tindakan tambahan jika diperlukan
      } else {
        console.log("Alasan pinjam tidak boleh kosong");
      }
    } else {
      console.log("User not logged in");
    }
  };

  return (
    <div>
      <AlasanPinjamForm 
        alasanPinjam={alasanPinjam} 
        onAlasanPinjamChange={handleAlasanPinjamChange} 
        isAlasanValid={isAlasanValid} 
      />
      <MetodeCheckbox 
        handleMetodeChange={handleMetodeChange} 
        isMetodeValid={isMetodeValid} 
      />
      <ButtonLanjutkan 
        onLanjut={handleLanjut} 
        isChecked={isChecked} 
        alasanPinjam={alasanPinjam} 
        metodePengiriman={metodePengiriman} 
      />
    </div>
  );
};

export default ParentComponent;
