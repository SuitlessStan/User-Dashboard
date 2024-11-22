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
    <div className="min-h-screen">
      <Link to="/" className="btn btn-gray my-2 mx-2">
        Back to Dashboard
      </Link>
      <UserProfile user_id={current_user_id} />
      <UserActivities user_id={current_user_id} />
      <div className="mt-6 flex justify-center space-x-4">
        <button
          type="button"
          onClick={previousUser}
          className={`btn btn-blue ${current_user_id === 1 ? "btn-disabled" : ""}`}
          disabled={current_user_id === 1}>
          Previous
        </button>
        <button type="button" onClick={nextUser} className="btn btn-green">
          Next
        </button>
      </div>
    </div>
  )
}

export default UserDetails
