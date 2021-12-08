import * as React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Layout from '../components/layout';

const IndexPage = () => {
  return(
    <Layout pageTitle='About'>
      <h1>About Me</h1>
      <p>Hello, friendly vistor! My name is Hang Jiang, the author of this website. You can call me Viktor, or just Hang is Okay.</p>
      <p>I'm a senior student at University of Michigan - Shanghai Jiao Tong University Joint Institute, major in Mechanical Engnieering, specialized in robotics, control and computer engineering. I am interested in state-of-the-art technologies that are close to lives, and their application potentials, such as: Automatic driving, VR/AR, humanoid robots, etc.</p>
      <h1>Education</h1>
      <div style={{height: '100vh',fontFamily: 'Quicksand'}}>
      <Timeline>
      <TimelineEvent
        title="Shanghai Jiao Tong University, Shanghai, China"
        titleStyle={{ fontSize: '14pt', fontWeight: 'bold' , fontFamily: 'Arial' }}
        subtitle="B. S. E. in Mechanical Engineering"
        subtitleStyle={{ fontSize: '14pt', fontWeight: '400', fontFamily: 'Arial'}}
        contentStyle={{
          'padding': '0em 0em',
          'boxShadow': 'none',
          'line-height': '1.8',
          'margin': '0 0',
          'backgroundColor': 'rgba(243, 243, 243, 0.972)'
        }}
        style={{ fontSize: '14pt', fontWeight: '300' }}
        createdAt={"Sept 2018 - Aug 2022"}
        icon={<i />}
        iconColor="#6fba1c"
      >
      </TimelineEvent>
      <TimelineEvent
        title="High School Affiliated to Fudan University"
        titleStyle={{ fontSize: '14pt', fontWeight: 'bold' , fontFamily: 'Arial' }}
        subtitle="High School"
        subtitleStyle={{ fontSize: '14pt', fontWeight: '400', fontFamily: 'Arial' }}
        contentStyle={{
          'padding': '0em 0em',
          'boxShadow': 'none',
          'line-height': '1.8',
          'margin': '0 0',
          'backgroundColor': 'rgba(243, 243, 243, 0.972)'
        }}
        style={{ fontSize: '14pt', fontWeight: '300' }}
        createdAt="Sept 2015 - Jun 2018"
        icon={<i />}
        iconColor="#6fba1c"
      >
      </TimelineEvent>
      </Timeline>
      </div>
    </Layout>
  )
}

export default IndexPage