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
      <div className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
        <p className="text-gray-700 font-medium">Name: {user?.name}</p>
        <p className="text-gray-700 font-medium">Email: {user?.email}</p>
        <p className="text-gray-700 font-medium">Phone: {user?.phone}</p>
      </div>
    </>
  )
}

export default UserProfile
