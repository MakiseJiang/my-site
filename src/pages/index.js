import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return(
    <Layout pageTitle='Home Page'>
      <p>I am making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="This is my vscode background."
        src="../images/p1.jpg"
      />
    </Layout>
  )
}

export default IndexPage