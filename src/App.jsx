import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeLoggedOut } from './components/pages/HomeLoggedOut';
import { HomeLoggedIn } from './components/pages/HomeLoggedIn';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { PetIndex } from './components/Pets/PetIndex';
import { PetShow } from './components/Pets/PetShow';
import { AppointmentIndex } from './components/Appointments/AppointmentIndex';
import { PageNavbar } from './components/Pages/PageNavbar';

function App() {
  return (
    <Router>
      <div>
        <PageNavbar />
        <Routes>
          <Route exact path="/" element={<HomeLoggedOut />} />
          <Route exact path="/home" element={<HomeLoggedIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pets" element={<PetIndex />} />
          <Route path="/pets/:id" element={<PetShow />} />
          <Route path="/appointments/upcoming" element={<AppointmentIndex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;