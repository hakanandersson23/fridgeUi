import React, { useState } from 'react';

function AddCardButton() {
  const [showForm, setShowForm] = useState(false);
  
  function handleButtonClick() {
    setShowForm(true);
  }
  
  return (
    <div>
      <button onClick={handleButtonClick}>Add Card</button>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            {/* Form goes here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCardButton;
