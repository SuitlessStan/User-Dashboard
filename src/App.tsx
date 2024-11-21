import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import UserDetail from "./pages/UserDetails"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App
