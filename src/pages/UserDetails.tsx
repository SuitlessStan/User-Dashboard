import React from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import UserProfile from "../components/UserProfile"
import UserActivities from "../components/UserActivities"

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()

  let current_user_id = Number(userId)

  const nextUser = () => navigate(`/users/${current_user_id + 1}`)
  const previousUser = () => {
    if (current_user_id > 1) navigate(`/users/${current_user_id - 1}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
        Back to Dashboard
      </Link>
      <UserProfile user_id={current_user_id} />
      <UserActivities user_id={current_user_id} />
      <div className="mt-6 flex space-x-4 justify-center">
        <button
          type="button"
          onClick={previousUser}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          disabled={current_user_id === 1}>
          Previous
        </button>
        <button
          type="button"
          onClick={nextUser}
          className="px-4 py-2 bg-green-500 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  )
}

export default UserDetails
