import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Login() {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await loginUser(email, password);

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful");
    navigate(from);
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