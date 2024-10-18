import { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/AppointmentsApi";
import { CreateAppointmentModal } from "./CreateAppointmentModal";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format } from "date-fns";

const localizer = momentLocalizer(moment);

export function AppointmentIndex() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    getAllAppointments().then((response) => {
      console.log(response.data);
      setAppointments(response.data);
    });
  }, []);

  
  const handleCreateAppointment = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  // const events = appointments.map(appointment => ({
  //   title: appointment.description,
  //   start: moment(appointment.start_time).toDate(),
  //   end: moment(appointment.end_time).toDate(),
  //   notes: appointment.notes,
  //   petName: appointment.pet ? appointment.pet.name : null
  // }));

  const events = [{
    start: moment('2024-10-11T14:50:00').toDate(),
    end: moment('2024-10-20T18:50:00').toDate(),
    title: "Golf",
  }];
  
  return (
    <div>
      <h1>Appointments</h1>
      <button onClick={handleCreateAppointment}>Create new appointment</button>
      <button onClick={() => setViewMode(viewMode === 'list' ? 'calendar' : 'list')}>
        {viewMode === 'list' ? 'Switch to Calendar View' : "Switch to List View"}
      </button>
      {viewMode === 'list' ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <h2>{appointment.description}</h2>
              <p><strong>Date:</strong> {format(new Date(appointment.date), "EEE, MMM dd yyyy")}</p>
              <p><strong>Start Time:</strong> {format(new Date(appointment.start_time), "hh:mm a")}</p>
              <p><strong>End Time:</strong> {format(new Date(appointment.end_time), "hh:mm a")}</p>
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
      ) : (
        // <Calendar 
        //   localizer = {localizer}
        //   events = {events}
        //   startAccessor = "start"
        //   endAccessor = "end"
        //   style = {{ height: 600, margin: "50px"}}
        // />

        <Calendar localizer={localizer} events={events} style = {{ height: 600, margin: "50px"}}/>
      )}


      {isCreateModalOpen && (
        <CreateAppointmentModal onClose={handleCloseCreateModal} />
      )}
    </div>
  );
}