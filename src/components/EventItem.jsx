export default function EventItem({event}) {
  const today = new Date().toISOString().split('T')[0];
  
    return (
    <section>
       <h2>{event.date === today ? "TODAY: " : event.date < today ? "Past: " : "Future: "}{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p>{event.description}</p>
    </section>
  )
}