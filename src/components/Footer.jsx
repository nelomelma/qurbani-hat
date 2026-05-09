import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>QurbaniHat</h2>
          <p>
            Your trusted platform for Qurbani livestock booking
            across Bangladesh.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/animals">All Animals</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@qurbanihat.com</p>
          <p>Phone: +880 1700-000000</p>
          <p>Dhaka, Bangladesh</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} QurbaniHat.
        All rights reserved.
      </div>
    </footer>
  );
}