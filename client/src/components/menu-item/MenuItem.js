import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import {
  BackgroundImageContainer,
  ContentContainer,
} from './MenuItemStyles'

const useStyles = makeStyles(theme => ({
  menuItemContainer: {
    height: '240px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      '&:lastChild': {
        flexGrow: 1
      }
    }
  },
  menuBtn: {
    backgroundColor: 'white',
    opacity: '0.5',
    '&:hover': {
      transition: 'background-color 0.8s ease !important',
      backgroundColor: 'black',
      color: 'white',
      opacity: '0.8'
    }
  },
  title: {
    color: 'white'
  },
}))

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const classes = useStyles()
  return (
    <Grid 
      item
      className={classes.menuItemContainer}
      xs={6}
      md={2}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <h3 className={classes.title}>{title.toUpperCase()}</h3>
        <Button className={classes.menuBtn} variant="outlined">
          SHOP NOW
        </Button>
      </ContentContainer>
      </Grid>
  )
}

export default withRouter(MenuItem)
