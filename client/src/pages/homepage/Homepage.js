import React, { Profiler } from 'react'
import Directory from '../../components/directory/Directory'
import { HomepageContainer } from './HomepageStyles'
import HeroSlider from '../../components/hero-slider/HeroSlider'
import HomepageGrid from '../../components/homepage-grid/HomepageGrid'

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
      <HomepageGrid />
      <Directory />
    </Profiler>
  </HomepageContainer>
)

export default Homepage
