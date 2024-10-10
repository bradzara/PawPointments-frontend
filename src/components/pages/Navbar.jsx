import './Navbar.css';

export function Navbar() {
  return (
    <header>
      <nav>
        <a href="/home">Home</a> | <a href="/pets">Pets</a> | <a href="/appointments/upcoming">Appointments</a>
      </nav>
    </header>
  );
}