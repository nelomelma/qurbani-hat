import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, googleLogin } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await loginUser(email, password);

    if (result.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Login successful");
    navigate(from);
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
      <form onSubmit={handleLogin} className="form-box">
        <h2>Login</h2>

        <input type="email" name="email" placeholder="Email" required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button className="btn-primary">Login</button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
        >
          Continue with Google
        </button>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}