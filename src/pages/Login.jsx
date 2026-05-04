import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const demoUser = {
      name: "QurbaniHat User",
      email,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    };

    localStorage.setItem("qurbaniUser", JSON.stringify(demoUser));

    toast.success("Login successful");
    navigate(from);
    window.location.reload();
  };

  const handleGoogleLogin = () => {
    const demoUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    };

    localStorage.setItem("qurbaniUser", JSON.stringify(demoUser));

    toast.success("Google login successful");
    navigate("/");
    window.location.reload();
  };

  return (
    <section className="auth-page">
      <form onSubmit={handleLogin} className="form-box">
        <h2>Login</h2>

        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />

        <button className="btn-primary">Login</button>

        <button type="button" onClick={handleGoogleLogin} className="google-btn">
          Continue with Google
        </button>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}