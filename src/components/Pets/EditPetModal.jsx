import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
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
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Pet Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <div className="modal-footer">
            <Button type="submit" variant="primary">Update Pet</Button>
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
