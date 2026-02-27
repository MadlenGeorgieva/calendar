import { Link } from "react-router-dom";

export default function EventItem({event, deleteHandler}) {
  const today = new Date().toISOString().split('T')[0];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const suffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
  };
  return `${day}${suffix(day)}, ${month}, ${year}`
}
  
    return (
    <div className="event-item">
       <h2>{event.date === today ? "TODAY: " : event.date < today ? "Historic " : "Upcoming "}{event.title}</h2>
        <p className="event-date"><strong>Date:</strong> {formatDate(event.date)}</p>
        <p>{event.description}</p>
        <div className="event-actions">
          <Link to={`/update/${event.id}`}>Update Event</Link> &nbsp;
          <button onClick={() => deleteHandler(event.id)}>Delete Event</button>
        </div>
    </div>
  );
}