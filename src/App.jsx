import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Create from "./views/Create";
import Update from "./views/Update";
import DefaultPage from "./views/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <DefaultPage/>
      },
      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/update/:id",
        element: <Update/>
      }
    ]
  },
],
{
  basename: "/calendar"
}
)       

export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}































// import './App.css'
// import EventList from './components/EventList'
// import Footer from './Components/footer'
// import Header from './Components/header'
// import myvideo from './assets/myvideo.mp4'
// import myimage from './assets/myimage.jpg'
// import Searchfield from './components/SearchField'
// import { useEffect, useState } from 'react'


// function App() {
//   //  STATE HOOK FOR FILTERING
//   // filterText - the current value of the filter text, which is initially an empty string./Variable
//   // setFilterText - a function that can be used to update the filterText state when the user types in the search field./Function
//   const [filterText, setFilterText] = useState(() =>{
//     // When the component is first rendered, it checks if there is a saved filter text in the local storage. 
//     // If there is, it uses that value as the initial state for filterText. If not, it defaults to an empty string.
//     // This allows the application to remember the user's last search input even after they refresh the page or close
//     // and reopen the browser.
//     // Looks for information in the local storage if there is one, filterTest is equal to this value, else it is an empty string.
//     const savedFilterText = localStorage.getItem('filterTextInStorage');
//     return savedFilterText ? savedFilterText : '';
//   });


//    // Every time the filterTextVariable changes the info is save to e\web storage with the key 'filterTextInStorage' 
//    // and the value of filterText.
//   useEffect(() => {
//     // Whenever the filterText state changes, this effect runs and saves the current filterText value to local storage
//     // under the key 'filterTextInStorage'. 
//     // This ensures that the user's search input is preserved across sessions.
//     localStorage.setItem('filterTextInStorage', filterText);
//   }, [filterText]);


  
//   //SORTING - TO A NEW EVENTS ARRAY 
//   const sortedEvents = events.toSorted((a, b) =>
//       // a.title.localeCompare(b.title, "en", { sensitivity: "base" })
//        a.date.localeCompare(b.date, "en", { sensitivity: "base" })
//   );

//   // Filter Events based on user input
//   // filter text - the text the user types in the search field
//   // event.title - the title of each event in the events array
//   // Filter acts like a loop, it goes through each event in the sortedEvents 
//   // array and checks if the event title includes the filter text (ignoring case). 
//   // If it does, the event is included in the filteredEvents array.
//   // toLowerCase() is used to make the search case-insensitive, so it doesn't matter 
//   // if the user types in uppercase or lowercase letters.
//   const filteredEvents = sortedEvents.filter(event =>
//     event.title.toLowerCase().includes(filterText.toLowerCase()) ||
//     event.description.toLowerCase().includes(filterText.toLowerCase())
//   )

//   // Function handleInputChange (event) {
//   // return setFilterText(event.target.value);
//   // }
  
//   const handleInputChange = (event) => {
//     setFilterText(event.target.value);
//   }

  
//   return (
    
//     <>
//     <Header/>

//     <Searchfield handleInputChange={handleInputChange} filter={filterText}/>
//     <EventList events={filteredEvents}/>

//     <img src={myimage} alt="My Image" width="50%" /> <br />
//     <video src={myvideo} controls width="50%" />
//     <Footer/>
//     </>
//   )
// };



// const events = [
//     { id: 1, title: 'Birthday Party', date: '2026-07-20', description: 'A fun birthday party with friends and family.' },
//     { id: 2, title: 'Conference', date: '2026-09-10', description: 'Annual tech conference with various speakers and workshops.' },
//     { id: 3, title: 'Wedding', date: '2026-02-14', description: 'Celebration of love and commitment with close ones.' },
//     { id: 4, title: 'Music Festival', date: '2026-02-18', description: 'A weekend filled with live music performances and entertainment.' },
//     { id: 5, title: 'Art Exhibition', date: '2026-10-05', description: 'Showcasing contemporary art from local and international artists.' }
//   ]

// export default App

//  {/* {events.map(event => (
//         <div key={event.id}>
//           <h2>{event.title}</h2>
//           <p><strong>Date:</strong> {event.date}</p>
//           <p>{event.description}</p>
//         </div>
//       ))} */}


// // export default function App() {
// //   return (
// //     <>
// //       <h1>This is my first component</h1>
// //       <p>Hey! Cool!</p>
// //     </>
// //   )
// // }



// // const App = () => { 
// //   return (
// //     <>
// //       <h1>This is my first component</h1>
// //       <p>Hey! Cool!</p>
// //     </>
// //   )
// // }
// // export default App



// // function App() {
// //   return (
// //     <div>
// //       <h1>This is my first component</h1>
// //       <p>Hey! Cool!</p>
// //     </div>
// //   )
// // }
// // export default App