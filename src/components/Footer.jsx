import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1f2937",
        color: "white",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>QurbaniHat</h3>

      <p style={{ marginBottom: "20px" }}>
        Your trusted platform for Qurbani livestock booking.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF size={22} color="white" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={22} color="white" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={22} color="white" />
        </a>
      </div>

      <p style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </p>
    </footer>
  );
}