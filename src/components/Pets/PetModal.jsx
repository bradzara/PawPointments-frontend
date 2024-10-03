import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./PetModal.css";

Modal.setAppElement("root");

export function PetModal({ isOpen, onRequestClose, pet, onSave }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (pet) {
      setName(pet.name),
      setBreed(pet.breed),
      setAge(pet.age),
      setNotes(pet.notes)
    }
  }, [pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPet = {
      ...pet,
      name,
      breed,
      age,
      notes,
    };
    onUpdate(updatedPet);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Edit Pet Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Breed:</label>
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
        <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        </div>
        <button type="submit">Update</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
}