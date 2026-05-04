import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <div className="animal-body">
        <h3>{animal.name}</h3>
        <p>
          <strong>Type:</strong> {animal.type}
        </p>
        <p>
          <strong>Breed:</strong> {animal.breed}
        </p>
        <p>
          <strong>Price:</strong> ৳{animal.price}
        </p>
        <p>
          <strong>Location:</strong> {animal.location}
        </p>
        <Link to={`/details-page/${animal.id}`} className="btn-primary full">
          View Details
        </Link>
      </div>
    </div>
  );
}