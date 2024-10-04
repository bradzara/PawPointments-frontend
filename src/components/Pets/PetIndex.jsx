import { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetsApi";
import { Sidebar } from "../pages/Sidebar";
import { EditPetModal } from "./EditPetModal";
import { CreatePetModal } from "./CreatePetModal";
import { Link } from "react-router-dom";

export function PetIndex() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    getAllPets().then((response) => {
      console.log(response);
      setPets(response.data);
    });
  }, []);

  const handleEditPet = (pet) => {
    setSelectedPet(pet);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedPet(null);
  };

  const handleCreatePet = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div>
      <Sidebar />
      <h1>Your Clientail!</h1>
      <button onClick={handleCreatePet}>Add New Pet</button>
      <div>
        {pets.map((pet) => (
          <div key={pet.id}>
            <img src={`http://localhost:3000${pet.image_url}`} alt={pet.name} />
            <Link to={`/pets/${pet.id}`}>
              <h2>{pet.name}</h2>
            </Link>
            <button onClick={() => handleEditPet(pet)}>
              Edit {pet.name}
            </button>
          </div>
        ))}
      </div>

      {isEditModalOpen && selectedPet && (
        <EditPetModal pet={selectedPet} onClose={closeEditModal} />
      )}

      {isCreateModalOpen && (
        <CreatePetModal onClose={closeCreateModal} />
      )}
    </div>
  );
}