import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import * as React from 'react';
import { 
    container,
    sidenav,
    profileAvatar,
    nameBox,
    textCenter,
    mapIcon,
    background,
    siteTitle
} from './layout.module.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div className={nameBox}>Hang "Viktor" <strong>Jiang</strong></div>
            <a href="/#"><Link to='/'>About</Link></a>
            <a href="/#"><Link to='/portfolio'>Portfolio</Link></a>
            <a href="/#"><Link to='/blog'>Blog</Link></a>
            <div className={textCenter}><div className={mapIcon}><FontAwesomeIcon icon={faMapMarkerAlt} color="white" /></div>Shanghai, CN</div>
            <div className={textCenter}>
                <ul>
                    <li><a  href="https://github.com/MakiseJiang"><FontAwesomeIcon icon={faGithub} color="white" /></a></li>
                    <li><a><FontAwesomeIcon icon={faTwitter} color="white" href="" /></a></li>
                    <li><a><FontAwesomeIcon icon={faInstagram} color="white" href="" /></a></li>
                    <li><a><FontAwesomeIcon icon={faLinkedin} color="white" href="" /></a></li>
                    <li>makisejh@sjtu.edu.cn</li>
                </ul>
            </div>
        </div>
        {/* MainPage */}
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <main>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout