import { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetsApi";
import { Sidebar } from "../pages/Sidebar";
import { Link } from "react-router-dom";

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
      <h1>Your Clientail!</h1>
      <div>
        {pets.map((pet) => (
          <div key={pet.id}>
            <Link to={`/pets/${pet.id}`}>
            <img src={`http://localhost:3000${pet.image_url}`} alt={pet.name} />
              <h2>{pet.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}