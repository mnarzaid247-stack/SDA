import { useEffect, useState } from 'react'
import client from '../api/client'

export default function AdminPage() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  async function fetchUsers() {
    try {
      const response = await client.get('/admin/users')
      setUsers(response.data)
    } catch (error) {
      console.error(error)
      setError('Failed to load users')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function makeAdmin(email) {
    try {
      await client.patch(`/admin/users/${email}/role`, {
        role: 'admin',
      })

      fetchUsers()
    } catch (error) {
      console.error(error)
      setError('Failed to update role')
    }
  }

  async function deleteUser(email) {
    try {
      await client.delete(`/admin/users/${email}`)
      fetchUsers()
    } catch (error) {
      console.error(error)
      setError('Failed to delete user')
    }
  }

  return (
    <main>
      <h2>Admin Panel</h2>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.email}>
          <p>
            {user.email} - {user.role}
          </p>

          <button onClick={() => makeAdmin(user.email)}>
            Make Admin
          </button>

          <button onClick={() => deleteUser(user.email)}>
            Delete
          </button>
        </div>
      ))}
    </main>
  )
}