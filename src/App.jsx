import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Logout } from './components/Auth/Logout';
import { PetList } from './components/Pets/PetList';
import { PetForm } from './components/Pets/PetForm';
import { AppointmentList } from './components/Appointments/AppointmentList';
import { AppointmentForm } from './components/Appointments/AppointmentForm.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/logout" Component={Logout} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/new" Component={PetForm} />
        <Route path="/appointments" Component={AppointmentList} />
        <Route path="/appointments/new" Component={AppointmentForm} />
      </Switch>
    </Router>
  );
}

export default App;