import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header({ title }) {
  const { user, logout } = useAuth()
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      {user ? (
  <>
  <span>{user.email}</span>

  <Link to="/admin">Admin</Link>

  <button onClick={logout}>Logout</button>
</>
) : (
  <>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </>
)}
    </header>
  )
}
