import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import animals from "../data/animals.json";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function AnimalDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const animal = animals.find((item) => item.id === Number(id));

  if (!animal) {
    return <h2 className="loading">Animal not found</h2>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully!");
    e.target.reset();
  };

  return (
    <section className="details-page">
      <div className="details-card">
        <img src={animal.image} alt={animal.name} />

        <div>
          <h2>{animal.name}</h2>
          <p>{animal.description}</p>
          <p><strong>Type:</strong> {animal.type}</p>
          <p><strong>Breed:</strong> {animal.breed}</p>
          <p><strong>Price:</strong> ৳{animal.price}</p>
          <p><strong>Weight:</strong> {animal.weight} kg</p>
          <p><strong>Age:</strong> {animal.age} years</p>
          <p><strong>Location:</strong> {animal.location}</p>
          <p><strong>Category:</strong> {animal.category}</p>
        </div>
      </div>

      <form onSubmit={handleBooking} className="form-box">
        <h2>Booking Form</h2>

        <input type="text" defaultValue={user?.displayName || ""} required />
        <input type="email" defaultValue={user?.email || ""} required />
        <input type="text" placeholder="Phone Number" required />
        <textarea placeholder="Address" required></textarea>

        <button className="btn-primary">Submit Booking</button>
      </form>
    </section>
  );
}