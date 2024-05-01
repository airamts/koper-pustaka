import React, { useState } from "react";

function MetodeCheckbox() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedOption(selectedOption === name ? "" : name);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <label className="d-flex gap-2 radio-label align-items-center" style={{ color: "#D9D9D9" }}>
        <input
          type="radio"
          name="option1"
          checked={selectedOption === "option1"}
          onChange={handleCheckboxChange}
          disabled
        />
        Ambil Sendiri
      </label>
      <label className="d-flex gap-2 radio-label align-items-center">
        <input
          type="radio"
          name="option2"
          checked={selectedOption === "option2"}
          onChange={handleCheckboxChange}
        />
        Ketemuan
      </label>
      <label className="d-flex gap-2 radio-label align-items-center" style={{ color: "#D9D9D9" }}>
        <input
          type="radio"
          name="option3"
          checked={selectedOption === "option3"}
          onChange={handleCheckboxChange}
          disabled
        />
        Jasa Kirim COD
      </label>
    </div>
  );
}

export default MetodeCheckbox;
