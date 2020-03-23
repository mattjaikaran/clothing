import React, { Profiler } from 'react'
import Directory from '../../components/directory/Directory'
import { HomepageContainer } from './HomepageStyles'

const Homepage = () => (
  <HomepageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
      console.log({
        id,
        phase,
        actualDuration
      })
    }}>
      <Directory />
    </Profiler>
  </HomepageContainer>
)

export default Homepage
