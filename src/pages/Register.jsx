import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const navigate = useNavigate();
  const { registerUser, googleLogin } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo =
      e.target.photo.value || "https://i.ibb.co/4pDNDk1/avatar.png";
    const password = e.target.password.value;

    const result = await registerUser(name, email, photo, password);

    if (result.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Registration successful. Please login now.");
    e.target.reset();
    navigate("/login");
  };

  const handleGoogleLogin = async () => {
    const result = await googleLogin();

    if (result.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Google login successful");
    navigate("/");
  };

  return (
    <section className="auth-page">
      <form onSubmit={handleRegister} className="form-box">
        <h2>Register</h2>

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button className="btn-primary">Register</button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
        >
          Continue with Google
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}