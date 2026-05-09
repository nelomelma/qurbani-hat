import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("Logout failed"));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        QurbaniHat
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/animals">All Animals</NavLink>
        {user && <NavLink to="/my-profile">My Profile</NavLink>}
      </div>

      <div className="nav-auth">
        {user ? (
          <>
            <img
              className="avatar"
              src={
                user.image ||
                user.photoURL ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="profile"
            />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn-outline" to="/login">
              Login
            </Link>
            <Link className="btn-primary" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}