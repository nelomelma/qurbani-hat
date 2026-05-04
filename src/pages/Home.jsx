import { Link } from "react-router-dom";
import animals from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <div>
      <section className="hero">
        <div className="hero-content animate__animated animate__fadeInLeft">
          <h1>Book Your Qurbani Animal Easily</h1>
          <p>
            Explore healthy cows and goats from trusted farms and book your
            preferred animal online with confidence.
          </p>
          <Link to="/animals" className="btn-primary">
            Browse Animals
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Featured Animals</h2>
        <div className="card-grid">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      <section className="section tips">
        <h2>Qurbani Tips</h2>
        <div className="info-grid">
          <div>
            <h3>Check Health</h3>
            <p>Choose an animal that looks active, healthy, and properly fed.</p>
          </div>
          <div>
            <h3>Know the Weight</h3>
            <p>Compare weight and price before making your final booking.</p>
          </div>
          <div>
            <h3>Book Early</h3>
            <p>Early booking helps you get better options before Eid demand.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Top Breeds</h2>
        <div className="breed-box">
          <p>Local Deshi Cow</p>
          <p>Red Chittagong</p>
          <p>Black Bengal Goat</p>
          <p>Jamunapari Goat</p>
        </div>
      </section>
    </div>
  );
}