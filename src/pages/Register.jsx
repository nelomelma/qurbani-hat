import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Register() {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const { error } = await registerUser(name, email, password, photo);

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful. Please login now.");
    navigate("/login");
  };

  const handleGoogleLogin = async () => {
    const { error } = await googleLogin();

    if (error) {
      toast.error("Google login needs real Google credentials");
      return;
    }
  };

  return (
    <section className="auth-page">
      <form onSubmit={handleRegister} className="form-box">
        <h2>Register</h2>

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="photo" placeholder="Photo URL" required />
        <input type="password" name="password" placeholder="Password" required />

        <button className="btn-primary">Register</button>

        <button type="button" onClick={handleGoogleLogin} className="google-btn">
          Continue with Google
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}