import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from 'react';
import Layout from '../components/layout'


const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle='Blog'>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.datePublished}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter {
                author
                title
                datePublished(formatString: "MMMM D, YYYY")
                }
                id
                body
            }
        }
    }
`


export default BlogPage