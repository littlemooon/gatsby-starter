import React from 'react'
import Link from 'gatsby-link'

export default function IndexPage() {
  return (
    <div>
      <h1>Hi people</h1>
      <Link to="/page-2/">About</Link>
      <Link to="/login">Login</Link>.
    </div>
  )
}
