import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: any) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load users.")
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center text-blue-500">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-6 flex justify-center">User Dashboard</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 no-bullets">
        {users.map((user) => (
          <li key={user.id} className="card">
            <h2 className="text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <Link to={`/users/${user.id}`} className="btn btn-blue">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
