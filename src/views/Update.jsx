import { use, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from "./Update.module.css"

export default function Update() {
const {id} = useParams();

const [events, setEvents] = useState(() => {
  const savedEvents = localStorage.getItem("events");
  return savedEvents ? JSON.parse(savedEvents) : [];
});

const event = events.find(event => event.id === Number(id));

const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [description, setDescription] = useState("");

let navigate = useNavigate();

useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
}, [events]);

useEffect(() => {
  if (event){
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
  }
}, [event]);

function updateHandler(e) {
  e.preventDefault();
  const updatedEvent = { id: Number(id), title: title, date: date, description: description };
  setEvents(events.map(event => event.id === Number(id) ? updatedEvent : event));

  navigate("/");
}

  return (
    <div className={styles.page}>
      <form onSubmit={updateHandler} className={styles.form}>
        <h2 className={styles.heading}>Update Event</h2>
        <div className={styles.fieldGroup}>
          <label htmlFor="id" className={styles.label}>ID</label>
          <input type="number" id="id" name="id" value={id} readOnly className={styles.input} />
        </div> 
        <div className={styles.fieldGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
        </div> 
        <div className={styles.fieldGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />
        </div> 
        <div className={styles.fieldGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input} />
        </div> 
        <button type="submit" className={styles.button}>Update</button>
      </form>
    </div>
  )
}