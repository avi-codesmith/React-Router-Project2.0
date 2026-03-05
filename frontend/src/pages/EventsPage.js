import { Link } from "react-router-dom";

function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "e1", title: "Event 1" },
    { id: "e2", title: "Event 2" },
    { id: "e3", title: "Event 3" },
  ];

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((ev) => (
          <li key={ev.id}>
            <Link to={`/events/${ev.id}`}>{ev.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
