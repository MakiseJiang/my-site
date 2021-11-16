import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
            <a href="/#"><Link to='/'>Home</Link></a>
            <a href="/#"><Link to='/about'>About</Link></a>
            <a href="/#"><Link to='/blog'>Blog</Link></a>
            <div className={textCenter}>
                <ul>
                <li><a  href="https://github.com/MakiseJiang"><FontAwesomeIcon icon={faGithub} color="white" /></a></li>
                <li><a><FontAwesomeIcon icon={faTwitter} color="white" href="" /></a></li>
                <li><a><FontAwesomeIcon icon={faInstagram} color="white" href="" /></a></li>
                <li><a><FontAwesomeIcon icon={faLinkedin} color="white" href="" /></a></li>
                </ul>
            </div>
        </div>
        {/* MainPage */}
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