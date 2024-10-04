import { useState } from "react";
import { createPet } from "../../services/PetsApi";

export function CreatePetModal({ onClose }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");

  const handleCreatePet = async (e) => {
    e.preventDefault();

    const newPet = {
      name,
      breed,
      age,
      notes
    };

    try {
      await createPet(newPet);
      onClose();
    } catch (error) {
      console.error("Error creating new pet:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Pet</h2>
        <form onSubmit={handleCreatePet}>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
          <label>
            Breed:
            <input 
              type="text" 
              value={breed} 
              onChange={(e) => setBreed(e.target.value)} 
            />
          </label>
          <label>
            Age:
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
            />
          </label>
          <label>
            Notes:
            <textarea 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
            />
          </label>
          <button type="submit">Add Pet</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
