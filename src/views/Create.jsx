// PROFESOR'S SOLUTION
// import { use, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import styles from "./Create.module.css"

// export default function Create() {

//   const [events, setEvents] = useState(() => {
//     const savedEvents = localStorage.getItem("events");
//     return savedEvents ? JSON.parse(savedEvents) : [];
//   });

//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");
//   let navigate = useNavigate();

//   useEffect(() => {
//     localStorage.setItem("events", JSON.stringify(events));
//   }, [events]);

//   function createHandler(e) {
//     e.preventDefault();
//     const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1;
//     const newEvent = { id: highestId + 1, title: title, date: date, description: description };
//     setEvents([...events, newEvent]);
//     navigate("/");
//   }
// 
//   return (
//     <div className={styles.page}>
//     <form onSubmit={createHandler} className={styles.form}>
//       <h2 className={styles.heading}>Create new Event</h2>
//       <div className={styles.fieldGroup}>
//         <label htmlFor="title" className={styles.label}>Title:</label>
//         <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} className={styles.input} />
//       </div>
//       <div className={styles.fieldGroup}>
//         <label htmlFor="date" className={styles.label}>Date:</label>
//         <input type="text" id="date" name="date" value={date} required onChange={(e) => setDate(e.target.value)} className={styles.input} />
//       </div>
//       <div className={styles.fieldGroup}>
//         <label htmlFor="description" className={styles.label}>Description:</label>
//         <input type="text" id="description" name="description" value={description} required onChange={(e) => setDescription(e.target.value)} className={styles.input} />
//       </div>
//       <button type="submit" className={styles.button}>Create Event</button>
//     </form>
//     </div>
//   )
// }







  import { useEffect, useState } from "react"
  import { useNavigate } from "react-router-dom"
  import styles from "./Create.module.css"

  export default function Create() {

    const [events, setEvents] = useState(() => {
      const savedEvents = localStorage.getItem("events");
      return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    function createHandler(e) {
      e.preventDefault();
      const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1;
      const newEvent = { id: highestId + 1, title: title, date: date, description: description };
      setEvents([...events, newEvent]);
      navigate("/");
    }

    return (
        <div className={styles.page}>
          <form onSubmit={createHandler} className={styles.form}>

            <h2 className={styles.heading}>Create new Event</h2>

            <div className={styles.fieldGroup}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <input type="text" id="title" name="title" value={title} required
                onChange={(e) => setTitle(e.target.value)} className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="date" className={styles.label}>Date</label>
              <input type="date" id="date" name="date" value={date || ""} required
                onChange={(e) => setDate(e.target.value)} className={styles.input}
                onFocus={(e) => e.target.showPicker?.()} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="description" className={styles.label}>Description</label>
              <input type="text" id="description" name="description" value={description} required
                onChange={(e) => setDescription(e.target.value)} className={styles.input} />
            </div>

            <button type="submit" className={styles.button}>Create Event</button>

          </form>
        </div>
    )
  }