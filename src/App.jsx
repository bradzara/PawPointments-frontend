import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeLoggedOut } from './components/pages/HomeLoggedOut';
import { HomeLoggedIn } from './components/pages/HomeLoggedIn';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Logout } from './components/Auth/Logout';
import { PetIndex } from './components/Pets/PetIndex.jsx';
// import { PetForm } from './components/Pets/PetForm';
import { AppointmentIndex } from './components/Appointments/AppointmentIndex.jsx';
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
        <Route path="/pets" element={<PetIndex />} />
        {/* <Route path="/pets/new" element={<PetForm />} /> */}
        <Route path="/appointments/upcoming" element={<AppointmentIndex />} />
        {/* <Route path="/appointments/new" element={<AppointmentForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;