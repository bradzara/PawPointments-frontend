import { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/AppointmentsApi";
import { Sidebar } from "../pages/Sidebar";

export function AppointmentIndex() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then((response) => {
      console.log(response);
      setAppointments(response.data);
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>{appointment.description}</li>
        ))}
      </ul>
    </div>
  );
}