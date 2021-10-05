import * as React from 'react'
import Layout from '../components/layout'
import { segment } from "../components/layout.module.css";

const IndexPage = () => {
  return(
    <Layout pageTitle='Home'>
      <hr className={segment}></hr>
      <p>I am making this by following the Gatsby tutorial.</p>
    </Layout>
  )
}

export default IndexPage