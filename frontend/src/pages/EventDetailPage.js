import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData("eventDetail");
  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Can not fetch event details" }),
      { status: 500 },
    );
  } else {
    return response;
  }
}
