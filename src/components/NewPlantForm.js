import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [newPlantData, setNewPlantData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewPlantData({ ...newPlantData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newPlantData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        onAddPlant(newPlant);
        setNewPlantData({
          name: "",
          image: "",
          price: "",
        });
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlantData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlantData.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlantData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
