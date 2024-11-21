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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Dashboard</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <Link
              to={`/users/${user.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
