import { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetsApi";
import { EditPetModal } from "./EditPetModal";
import { CreatePetModal } from "./CreatePetModal";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

export function PetIndex() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await getAllPets();
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const handleEditPet = (pet) => {
    console.log("Editing pet:", pet)
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

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handlePetUpdated = (updatedPet) => {
    setPets((prevPets) => 
      prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
    );
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{paddingTop: "25px"}}>Your Clientail!</h1>
      <button onClick={handleCreatePet} className="btn btn-primary d-block mx-auto mb-4">Add New Pet</button>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        {pets.map((pet) => (
          <Col key={pet.id} className="d-flex justify-content-center">
            <Card className="w-100 h-auto">
              <Link to={`/pets/${pet.id}`}>
                <Card.Img
                  variant="top"
                  src={`http://localhost:3000${pet.image_url}`}
                  alt={pet.name}
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>
                  {pet.breed && <p>Breed: {pet.breed}</p>}
                  {pet.age && <p>Age: {pet.age}</p>}
                  {pet.notes && <p>Notes: {pet.notes}</p>}
                  <h2>Owner Information:</h2>
                  <ul>
                    <li>Name: {pet.owner.name}</li>
                    <li>Email: {pet.owner.email}</li>
                    <li>Phone Number: {pet.owner.phone}</li>
                    <li>Address: {pet.owner.address}</li>
                  </ul>
                </Card.Text>
                <button className="btn btn-primary" onClick={() => handleEditPet(pet)}>
                  Edit {pet.name}
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {isEditModalOpen && selectedPet && (
        <EditPetModal 
          pet={selectedPet} 
          onClose={closeEditModal} 
          onPetUpdated={handlePetUpdated} 
        />
      )}

      {isCreateModalOpen && (
        <CreatePetModal onClose={handleCloseCreateModal} />
      )}
    </div>
  );
}
