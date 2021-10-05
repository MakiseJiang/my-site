import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { segment } from "../../components/layout.module.css";


const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Date Posted: {data.mdx.frontmatter.datePublished}</p>
            <hr className={segment}></hr>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
            title
            datePublished(formatString: "MMMM D, YYYY")
        }
        body
    }
}
`

export default BlogPost