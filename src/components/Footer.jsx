import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1f2937",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h3 style={{ marginBottom: "10px" }}>QurbaniHat</h3>

      {/* About */}
      <p style={{ marginBottom: "20px" }}>
        Your trusted platform for Qurbani livestock booking.
      </p>

      {/* Contact Section */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Contact</h4>
        <p>Email: support@qurbanihat.com</p>
        <p>Phone: +880 1700-000000</p>
        <p>Location: Dhaka, Bangladesh</p>
      </div>

      {/* Social Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF size={22} color="white" />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube size={22} color="white" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={22} color="white" />
        </a>
      </div>

      {/* Footer Bottom */}
      <p style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </p>
    </footer>
  );
}