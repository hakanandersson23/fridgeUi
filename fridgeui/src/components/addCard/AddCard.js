import React, { useState } from 'react';
import RecipeForm from '../recipeForm/RecipeForm';
import './addCard.css';

function AddCard() {
  const [showForm, setShowForm] = useState(false);

  function handleButtonClick() {
    setShowForm(true);
  }

  // function handleCloseForm() {
  //   setShowForm(false);
  // }

  // function handleClickOutside(event) {
  //   const overlay = document.querySelector('.overlay');
  //   if (overlay && !overlay.contains(event.target)) {
  //     setShowForm(false);
  //   }
  // }

  // React.useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <div>
      <button onClick={handleButtonClick}>Add Card</button>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <RecipeForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCard;
