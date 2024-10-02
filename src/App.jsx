import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeLoggedOut } from './components/pages/HomeLoggedOut';
import { HomeLoggedIn } from './components/pages/HomeLoggedIn';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Logout } from './components/Auth/Logout';
// import { PetList } from './components/Pets/PetList';
// import { PetForm } from './components/Pets/PetForm';
// import { AppointmentList } from './components/Appointments/AppointmentList';
// import { AppointmentForm } from './components/Appointments/AppointmentForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLoggedOut />} />
        <Route exact path="/home" element={<HomeLoggedIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/pets" element={<PetList />} />
        <Route path="/pets/new" element={<PetForm />} />
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/appointments/new" element={<AppointmentForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;