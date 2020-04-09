import React, { Profiler } from 'react'
import Directory from '../../components/directory/Directory'
import { HomepageContainer } from './HomepageStyles'
import HeroSlider from '../../components/hero-slider/HeroSlider'

const Homepage = () => (
  <HomepageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
      console.log({
        id,
        phase,
        actualDuration
      })
    }}>
      <HeroSlider />
      <Directory />
    </Profiler>
  </HomepageContainer>
)

export default Homepage
