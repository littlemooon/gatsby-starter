import React from 'react'
import Link from 'gatsby-link'

export default function About() {
  return (
    <div>
      <h1>Hi from the about page</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>.
    </div>
  )
}
