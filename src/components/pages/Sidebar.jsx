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
      <ul>
        <li><Link to="/appointments/new">New Appointment</Link></li>
        <li><Link to="/pets">Pet List</Link></li>
        <li><Link to="/appointments/upcoming">Upcoming Appointments</Link></li>
        <li><Link to="/appointments/search">Search Appointments</Link></li>
      </ul>
    </div>
  )
}