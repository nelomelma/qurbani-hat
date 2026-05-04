import { useEffect, useState } from "react";
import animalsData from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

export default function AllAnimals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimals(animalsData);
      setLoading(false);
    }, 700);
  }, []);

  const handleSort = (e) => {
    const value = e.target.value;
    const sorted = [...animals];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setAnimals(sorted);
  };

  if (loading) {
    return <p className="loading">Loading animals...</p>;
  }

  return (
    <section className="section">
      <div className="section-header">
        <h2>All Animals</h2>

        <select onChange={handleSort}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="card-grid">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}