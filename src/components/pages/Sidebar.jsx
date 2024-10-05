import { Link } from "react-router-dom";
import { useState } from "react";
import './Sidebar.css'

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {collapsed ? ">" : "<"}
      </button>
      <div>
        <p><Link to="/appointments/new">New Appointment</Link></p>
        <p><Link to="/pets">Pets</Link></p>
        <p><Link to="/appointments/upcoming">Upcoming Appointments</Link></p>
        <p><Link to="/appointments/search">Search Appointments</Link></p>
      </div>
    </div>
  )
}