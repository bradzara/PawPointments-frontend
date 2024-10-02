import { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetsApi";

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
      <h1>Your Clientele!</h1>
      <ul>
        {pets.map((pet) => (
          <div key={pet.id}>
            <h2>{pet.name}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJU_aRybhiJnVUitOFKoexK89bvCy4oyB5ACTXE8zUxF8xhVM" alt={pet.name} />
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}