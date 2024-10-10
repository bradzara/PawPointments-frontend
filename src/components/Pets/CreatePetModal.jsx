import { useState } from "react";
import { createPet } from "../../services/PetsApi";
import './CreatePetModal.css';

export function CreatePetModal({ onClose }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");

  const handleCreatePet = async (e) => {
    e.preventDefault();

    const newPet = new FormData();
    newPet.append("pet[name]", name);
    newPet.append("pet[breed]", breed);
    newPet.append("pet[age]", age);
    newPet.append("pet[notes]", notes);
    if (image) {
      newPet.append("pet[image]", image);
    }
    newPet.append("pet[owner_attributes][name]", ownerName);
    newPet.append("pet[owner_attributes][email]", ownerEmail);
    newPet.append("pet[owner_attributes][phone]", ownerPhone);
    newPet.append("pet[owner_attributes][address]", ownerAddress);

    try {
      await createPet(newPet);
      onClose();
    } catch (error) {
      console.error("Error creating new pet:", error);
    }
  };

  return (
    <div className="pet-modal">
      <div className="pet-modal-content">
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
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <h3>Owner Information</h3>
          <label>
            Name:
            <input 
              type="text" 
              value={ownerName} 
              onChange={(e) => setOwnerName(e.target.value)} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={ownerEmail} 
              onChange={(e) => setOwnerEmail(e.target.value)} 
            />
          </label>
          <label>
            Phone:
            <input 
              type="tel" 
              value={ownerPhone} 
              onChange={(e) => setOwnerPhone(e.target.value)} 
            />
          </label>
          <label>
            Address:
            <input 
              type="text" 
              value={ownerAddress} 
              onChange={(e) => setOwnerAddress(e.target.value)} 
            />
          </label>
          <button type="submit">Add Pet</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
