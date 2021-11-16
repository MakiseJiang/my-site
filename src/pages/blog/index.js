import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout'
import { navLinkText, segment, heading } from "../../components/layout.module.css";


const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle='Blogs'>
        <h1 className={heading}>Blogs</h1>
            <hr className={segment}></hr>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`} className={navLinkText}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Date Posted: {node.frontmatter.datePublished}</p>
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
                title
                datePublished(formatString: "MMMM D, YYYY")
                }
                id
                slug
            }
        }
    }
`


export default BlogPage