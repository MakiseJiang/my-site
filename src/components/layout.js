import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { 
    container,
    sidenav,
    profileAvatar,
    background,
    heading,
    siteTitle
} from './layout.module.css';

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return(
        <div className={background}>
        <div className={sidenav}>
        <div className={profileAvatar}></div>
        <a><Link to='/'>Home</Link></a>
        <a><Link to='/about'>About</Link></a>
        <a><Link to='/blog'>Blog</Link></a>
        </div>
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout