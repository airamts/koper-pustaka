// ParentComponent.js
import React, { useState } from 'react';
import UnggahIdentitas from './Unggah';
import ButtonIdentitas from './ButtonIdentitas';

function ParentComponent() {
  const [isFileSelected, setIsFileSelected] = useState(false);

  return (
    <div>
      <UnggahIdentitas onFileSelected={setIsFileSelected} />
      <ButtonIdentitas isFileSelected={isFileSelected} />
    </div>
  );
}

export default ParentComponent;