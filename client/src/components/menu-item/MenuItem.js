import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle
} from './MenuItemStyles'

const useStyles = makeStyles({
  menuBtn: {
    backgroundColor: 'white',
    opacity: '0.5',
    '&:hover': {
      backgroundColor: 'white',
      opacity: '0.8'
    }
  }
})

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const classes = useStyles()
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <Button className={classes.menuBtn} variant="outlined">
          SHOP {title.toUpperCase()}
        </Button>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)
