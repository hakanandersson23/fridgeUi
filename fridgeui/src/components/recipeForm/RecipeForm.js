import React, { useState } from 'react';

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
    // Do something with the form data (e.g. submit to a server)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Recipe Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Upload Image (JPG or PNG):
        <input type="file" accept="image/jpeg,image/png" onChange={handleFileChange} />
      </label>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RecipeForm;
