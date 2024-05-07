import React from "react";

function MetodeCheckbox({
  handleMetodeChange,
  isMetodeValid,
}) {
  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    handleMetodeChange(name);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <label
        className="d-flex gap-2 radio-label align-items-center"
        style={{ color: "#D9D9D9" }}
      >
        <input
          type="radio"
          name="option1"
          onChange={handleCheckboxChange}
          disabled
        />
        Ambil Sendiri
      </label>
      <label className="d-flex gap-2 radio-label align-items-center">
        <input
          type="radio"
          name="option2"
          onChange={handleCheckboxChange}
        />
        Ketemuan
      </label>
      <label
        className="d-flex gap-2 radio-label align-items-center"
        style={{ color: "#D9D9D9" }}
      >
        <input
          type="radio"
          name="option3"
          onChange={handleCheckboxChange}
          disabled
        />
        Jasa Kirim COD
      </label>
      {!isMetodeValid && (
        <div className="text-danger">Pilih salah satu metode pengiriman!</div>
      )}
    </div>
  );
}

export default MetodeCheckbox;
