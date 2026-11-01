
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser, googleLogin } = useContext(AuthContext);

  const [loggingIn, setLoggingIn] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loggingIn || googleLoading) return;

    const form = e.currentTarget;
    const email = form.elements.namedItem("email").value.trim();
    const password = form.elements.namedItem("password").value;

    setLoggingIn(true);

    try {
      const result = await loginUser(email, password);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Login successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error?.message || "Login failed. Please try again."
      );
    } finally {
      setLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (loggingIn || googleLoading) return;

    setGoogleLoading(true);

    try {
      const result = await googleLogin();

      if (result.error) {
        toast.error(result.error);
      }

      // Google OAuth redirects to Google.
      // The session is verified when the user returns.
    } catch (error) {
      console.error("Google login error:", error);
      toast.error(
        error?.message || "Google login failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <form onSubmit={handleLogin} className="form-box">
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
          disabled={loggingIn || googleLoading}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          disabled={loggingIn || googleLoading}
        />

        <button
          type="submit"
          className="btn-primary"
          disabled={loggingIn || googleLoading}
          aria-busy={loggingIn}
        >
          {loggingIn ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
          disabled={loggingIn || googleLoading}
          aria-busy={googleLoading}
        >
          {googleLoading
            ? "Connecting to Google..."
            : "Continue with Google"}
        </button>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}
