import { Link } from 'react-router-dom'

export default function Header({ title }) {
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </header>
  )
}
