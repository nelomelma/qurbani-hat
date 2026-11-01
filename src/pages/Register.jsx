
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const navigate = useNavigate();
  const { registerUser, googleLogin } = useContext(AuthContext);

  const [registering, setRegistering] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (registering || googleLoading) return;

    const form = e.currentTarget;

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const photo =
      form.elements.namedItem("photo").value.trim() ||
      "https://i.ibb.co/4pDNDk1/avatar.png";
    const password = form.elements.namedItem("password").value;

    setRegistering(true);

    try {
      const result = await registerUser(
        name,
        email,
        photo,
        password
      );

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Registration successful. Please login now.");

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error?.message || "Registration failed. Please try again."
      );
    } finally {
      setRegistering(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (registering || googleLoading) return;

    setGoogleLoading(true);

    try {
      const result = await googleLogin();

      if (result.error) {
        toast.error(result.error);
      }
      // Successful Google OAuth redirects the browser.
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
      <form onSubmit={handleRegister} className="form-box">
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          required
          disabled={registering || googleLoading}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
          disabled={registering || googleLoading}
        />

        <input
          type="url"
          name="photo"
          placeholder="Photo URL (Optional)"
          disabled={registering || googleLoading}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          minLength={8}
          required
          disabled={registering || googleLoading}
        />

        <button
          type="submit"
          className="btn-primary"
          disabled={registering || googleLoading}
          aria-busy={registering}
        >
          {registering ? "Registering..." : "Register"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
          disabled={registering || googleLoading}
          aria-busy={googleLoading}
        >
          {googleLoading
            ? "Connecting to Google..."
            : "Continue with Google"}
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
