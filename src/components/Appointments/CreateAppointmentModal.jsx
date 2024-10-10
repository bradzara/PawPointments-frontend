import { getAllPets } from "../../services/PetsApi";
import { createAppointment } from "../../services/AppointmentsApi";
import "./CreateAppointmentModal.css";
import { useState, useEffect } from "react";

export function CreateAppointmentModal({ onClose }) {
  const [pets, setPets] = useState([]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");

  useEffect(() => {
    getAllPets().then((response) => {
      setPets(response.data);
    });
  }, []);

  const handleCreateAppointment = async (e) => {
    e.preventDefault();

    const newAppointment = new FormData();
    newAppointment.append("appointment[pet_id]", selectedPetId);
    newAppointment.append("appointment[date]", date);
    newAppointment.append("appointment[start_time]", startTime);
    newAppointment.append("appointment[end_time]", endTime);
    newAppointment.append("appointment[description]", description);
    newAppointment.append("appointment[notes]", notes);

    try {
      await createAppointment(newAppointment);
      onClose();
    } catch (error) {
      console.error("Error creating new appointment:", error);
    }
  };

  
  return (
    <div className="appointment-modal">
      <div className="appointment-modal-content">
        <h2>Create new appointment</h2>
        <form onSubmit={handleCreateAppointment}>
          <label>
            Choose date:
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Start time:
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
          <label>
            End time:
            <input 
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input 
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Notes:
            <input 
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <label>
            Choose a pet:
            <select
              value={selectedPetId}
              onChange={(e) => setSelectedPetId(e.target.value)}
              required
            >
              <option value="" disabled>Select a pet</option>
              {pets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}