import { Link } from "react-router-dom";

export function HomeLoggedOut() {
  return (
    <div>
      <h1>Welcome to PawPointments!</h1>
      <p>Sign up or Login to start managing your furry clients appointments.</p>
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
}