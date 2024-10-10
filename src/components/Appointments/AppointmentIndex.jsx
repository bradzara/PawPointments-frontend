import { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/AppointmentsApi";
import { CreateAppointmentModal } from "./CreateAppointmentModal";
import { format } from "date-fns";

export function AppointmentIndex() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then((response) => {
      console.log(response);
      setAppointments(response.data);
    });
  }, []);

  
  const handleCreateAppointment = () => {
    setIsCreateModalOpen(true);
  }

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  }

  return (
    <div>
      <h1>Appointments</h1>
      <button onClick={handleCreateAppointment}>Create new appointment</button>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <h2>{appointment.description}</h2>
            <p><strong>Date:</strong> {format(new Date(appointment.date), "EEE, MMM dd yyyy")}</p>
            <p><strong>Start Time:</strong> {format(new Date(appointment.start_time), 'h:mm a')}</p>
            <p><strong>End Time:</strong> {format(new Date(appointment.end_time), 'h:mm a')}</p>
            <p><strong>Notes:</strong> {appointment.notes}</p>
            {appointment.pet && (
              <div>
                <h3>Pet Information:</h3>
                <p><strong>Name:</strong> {appointment.pet.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>


      {isCreateModalOpen && (
        <CreateAppointmentModal onClose={handleCloseCreateModal} />
      )}
    </div>
  );
}