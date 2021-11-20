import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react'
import Layout from '../components/layout'
import { segment } from "../components/layout.module.css";

const IndexPage = () => {
  return(
    <Layout pageTitle='About'>
      <h1>About Me</h1>
      <p>Hello, friendly vistor! My name is Hang Jiang, the author of this website. You can call me Viktor, or just Hang is Okay.</p>
      <p>I'm a senior student at University of Michigan - Shanghai Jiao Tong University Joint Institute, major in Mechanical Engnieering, specialized in robotics, control and computer engineering. I am interested in state-of-the-art technologies that are close to lives, and their application potentials, such as: Automatic driving, VR/AR, humanoid robots, etc.</p>
    </Layout>
  )
}

export default IndexPage