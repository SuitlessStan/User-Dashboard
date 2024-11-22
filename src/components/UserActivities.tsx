import React, { useEffect, useState } from "react"
import axios from "axios"

interface Activity {
  id: number
  title: string
  body: string
}

const UserAcitivies: React.FC<{ user_id: number }> = ({ user_id }) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
      .then((res: any) => {
        setActivities(res.data)
        setLoading(false)
      })
      .catch((err: any) => {
        setError(`Error encountered while loading user activity`)
        setLoading(false)
      })
  }, [user_id])

  if (loading) return <p className="text-center text-blue-500">Fetching user activity...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Activities</h2>
        <div className="h-1/2">
          <ul className="overflow-y-scroll">
            {activities.map((activity) => (
              <li key={activity.id} className="border-b pb-2">
                <h3 className="text-lg">{activity.title}</h3>
                <p className="text-gray-600">{activity.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default UserAcitivies
