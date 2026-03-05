import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail</h1>
      <p>Selected Event ID: {params.eventId}</p>
      <p>
        <Link to="edit">Edit Event</Link>
      </p>
    </div>
  );
}

export default EventDetailPage;
