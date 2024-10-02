import { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetsApi";
import { Sidebar } from "../pages/Sidebar";

export function PetIndex() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets().then((response) => {
      console.log(response);
      setPets(response.data);
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>Your Clientele!</h1>
      <ul>
        {pets.map((pet) => (
          <div key={pet.id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJU_aRybhiJnVUitOFKoexK89bvCy4oyB5ACTXE8zUxF8xhVM" alt={pet.name} />
            <h2>{pet.name}</h2>
            {pet. breed && <p>Breed: {pet.breed}</p>}
            {pet.age && <p>Age: {pet.age}</p>}
            {pet.notes && <p>Notes: {pet.notes}</p>}
            <ul>
              <p>Owner Information:</p> 
              <li>Name: {pet.owner.name}</li>
              <li>Email: {pet.owner.email}</li>
              <li>Phone Number: {pet.owner.phone}</li>
              <li>Address: {pet.owner.address}</li>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}