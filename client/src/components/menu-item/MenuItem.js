import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle
} from './MenuItemStyles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentSubtitle>SHOP {title.toUpperCase()}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem)
