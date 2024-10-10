import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPet } from "../../services/PetsApi"

export function PetShow() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const response = await getPet(id);
      setPet(response.data);
    };
    fetchPet();
  }, [id]);
  
  if (!pet) return <div>Loading...</div>;
  
  return (
    <div>
      <img src={`http://localhost:3000${pet.image_url}`} alt={pet.name} />
      <h1>{pet.name}</h1>
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
    </div>
  )
}