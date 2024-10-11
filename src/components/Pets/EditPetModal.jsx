import { useState } from "react";
import { updatePet } from "../../services/PetsApi";
import "./EditPetModal.css";

export function EditPetModal({ pet, onClose }) {
  const [name, setName] = useState(pet.name);
  const [breed, setBreed] = useState(pet.breed);
  const [age, setAge] = useState(pet.age);
  const [notes, setNotes] = useState(pet.notes);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    const updatedPet = {
      name,
      breed,
      age,
      notes
    };

    try {
      await updatePet(pet.id, updatedPet);
      onClose();
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Pet Information</h2>
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Update Pet</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
