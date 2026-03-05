import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // } We can handle error like this
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  // useState() We cant use any hook of react in loader functions!!!!!!!!!
  // It is a pure JS function!!!!!!!!1
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Ops! an error occured" }; We can return error code like that
    throw new Response(JSON.stringify({ message: "Can't fetch events." }), {
      status: 500,
    });
  } else {
    // const resData = await response.json(); loader can automatically extract Data form Response Object
    return response;
  }
}
