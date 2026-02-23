import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/create">Create Event</Link>&nbsp;|&nbsp;
        <Link to="/update">Update Event</Link>&nbsp;|&nbsp;
      </nav>
    </header>
  )
}