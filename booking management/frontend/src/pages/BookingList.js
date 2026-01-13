import { useEffect, useState } from "react";
import { api } from "../api";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((res) => setBookings(res.data));
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Booking List</h2>
      <ul>
        {bookings.map((b) => (
          <li key={b.id} className="border p-2 mb-2">
            {b.name} – {b.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
