import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { user, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserInfo(name, photo)
      .then(() => {
        toast.success("Profile updated successfully");
        navigate("/my-profile");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className="auth-page">
      <form onSubmit={handleUpdate} className="form-box">
        <h2>Update Information</h2>

        <input
          type="text"
          name="name"
          defaultValue={user?.displayName || ""}
          placeholder="Name"
          required
        />

        <input
          type="text"
          name="photo"
          defaultValue={user?.photoURL || ""}
          placeholder="Photo URL"
          required
        />

        <button className="btn-primary">Update Information</button>
      </form>
    </section>
  );
}