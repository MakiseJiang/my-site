import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <title>Home Page</title>
      <h1>This is my gatsby home Page!</h1>
      <Link to="/about">About</Link>
      <p>I am making this by following the Gatsby tutorial.</p>
    </Layout>
  )
}

export default IndexPage