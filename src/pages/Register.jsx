import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    toast.success("Registration successful. Please login now.");
    e.target.reset();
    navigate("/login");
  };

  const handleGoogleLogin = () => {
    toast.info("Google login is shown as required. Please use email login for demo.");
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