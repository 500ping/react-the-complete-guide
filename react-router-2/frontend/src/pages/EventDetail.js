import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    return json(
      { message: "Cannot get event!" },
      {
        status: 404,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    return json(
      { message: "Cannot delete event!" },
      {
        status: 404,
      }
    );
  } else {
    return redirect("/events");
  }
};
