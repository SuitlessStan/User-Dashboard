import React, { useEffect, useState } from "react"
import axios from "axios"

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const UserProfile: React.FC<{ user_id: number }> = ({ user_id }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user_id}`)
      .then((res: any) => {
        setUser(res.data)
        setLoading(false)
      })
      .catch((err: any) => {
        setError("Error encountered while loading user data")
        setLoading(false)
      })
  }, [user_id])

  if (loading) return <p className="text-center text-blue-500">Fetching user data...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <div className="card">
        <h2 className="card-title">User Profile</h2>
        <p className="text-gray-700">
          <strong>Name:</strong> {user?.name}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> {user?.phone}
        </p>
      </div>
    </>
  )
}

export default UserProfile
