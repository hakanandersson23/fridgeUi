import React, { useState } from 'react';
import RecipeForm from '../recipeForm/RecipeForm';
import './addCard.css';

function AddCard() {
  const [showForm, setShowForm] = useState(false);

  function handleButtonClick() {
    setShowForm(true);
  }

  function handleCloseForm() {
    if (showForm) {
      setShowForm(false);
    }
  }

  function handleClickOutside(event) {
    const formContainer = document.querySelector('.form-container');
    if (formContainer && !formContainer.contains(event.target) && showForm) {
      setShowForm(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={handleButtonClick}>Add Card</button>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <RecipeForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCard;
