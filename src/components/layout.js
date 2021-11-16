import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { 
    container,
    sidenav,
    profileAvatar,
    textCenter,
    centerAlignBox,
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
        {/* SideBar */}
        <div className={sidenav}>
            <div className={profileAvatar}/>
            <div className={textCenter}>Makise <strong>Jiang</strong></div>
            <a href="#"><Link to='/'>Home</Link></a>
            <a href="#"><Link to='/about'>About</Link></a>
            <a href="#"><Link to='/blog'>Blog</Link></a>

        </div>
        {/* MainPage */}
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <FontAwesomeIcon icon={['fab', 'apple']} color="black" />
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout