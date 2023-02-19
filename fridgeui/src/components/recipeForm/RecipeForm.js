import React, { useState } from 'react';
import './recipeForm.css'

function RecipeForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleFileChange(event) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const file = event.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      setErrorMessage('');
    } else {
      setFile(null);
      setErrorMessage('Invalid file type. Please select a JPG or PNG file.');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Recipe Name:', name);
    console.log('Recipe Description:', description);
    console.log('Selected File:', file);
  }

  return (
    <div className="overlay">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Enter recipe name" />
        </label>
        <label>
          <textarea value={description} onChange={handleDescriptionChange} placeholder="Enter recipe description"></textarea>
        </label>
        <label>
          Upload Image (JPG or PNG):
          <input type="file" accept="image/jpeg,image/png" onChange={handleFileChange} />
        </label>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default RecipeForm;
