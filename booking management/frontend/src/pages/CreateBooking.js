import { useState } from "react";
import { api } from "../api";

export default function CreateBooking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/bookings", { name, date });
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={submit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create Booking</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 w-full mb-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
