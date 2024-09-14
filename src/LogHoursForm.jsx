import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export function LogHoursForm() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");

  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.user_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const hoursData = {
      hours: hours,
      user_id: userId,
      event_id: selectedEventId,
      date: date,
    };
    axios
      .post("http://localhost:3000/volunteer_hours.json", hoursData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/events.json")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching events!", error);
      });
  }, []);

  return (
    <div>
      <h1>Log Hours</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event">Select Event:</label>
          <select name="event" id="event" value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)}>
            <option value="">-- Select an Event --</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hours"></label>
          <input type="number" id="hours" name="hours" value={hours} onChange={(e) => setHours(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date"></label>
          <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Log Hours</button>
      </form>
    </div>
  );
}
