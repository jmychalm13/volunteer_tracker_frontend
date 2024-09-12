import axios from "axios";
import { useEffect, useState } from "react";

export function LogHoursForm() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/events.json")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching events!", error);
      });
  });

  return (
    <div>
      <h1>Log Hours</h1>
      <form>
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
          Hours: <input type="number" name="hours" />
        </div>
      </form>
    </div>
  );
}
