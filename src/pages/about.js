import * as React from 'react'
import Layout from '../components/layout'
import { segment } from "../components/layout.module.css";


const AboutPage = () => {
    return (
    <Layout pageTitle='About'>
        <hr className={segment}></hr>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    )
}

export default AboutPage