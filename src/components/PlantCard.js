import React, { useState } from "react";

function PlantCard({ id, name, image, price, deletePlant }) {
  const [isAvailable, setIsAvailable] = useState(true);

  function handleAvailabilityToggle() {
    setIsAvailable(!isAvailable);
  }

  function handleDelete() {
    deletePlant(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isAvailable ? (
        <button className="primary" onClick={handleAvailabilityToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleAvailabilityToggle}>Out of Stock</button>
      )}
      {!isAvailable && <p>Sold out</p>}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
