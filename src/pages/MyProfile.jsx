import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <section className="profile-page">
      <div className="profile-card">
        <img
          src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="profile"
        />
        <h2>{user?.displayName || "No Name Found"}</h2>
        <p>{user?.email}</p>

        <Link to="/update-profile" className="btn-primary">
          Update Information
        </Link>
      </div>
    </section>
  );
}