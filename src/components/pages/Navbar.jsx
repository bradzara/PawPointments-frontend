import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { Logout } from '../Auth/Logout';

export function Navbar() {
  const location = useLocation();

  return (
    <header>
      <ul className="navbar">
        <li><a className={location.pathname === '/home' ? 'active' : ''} href="/home">Home</a></li>
        <li><a className={location.pathname === '/pets' ? 'active' : ''} href="/pets">Pets</a></li>
        <li><a className={location.pathname === '/appointments/upcoming' ? 'active' : ''} href="/appointments/upcoming">Appointments</a></li>
        <li className="logo">Pawpointments</li>
        <li className="logout"><Logout /></li>
      </ul>
    </header>
  );
}