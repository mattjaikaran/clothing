import React from 'react'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: '1em',
    height: 'auto',
    left: 'auto',
    right: 0,
    backgroundColor: '#f9f9f9',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px 0',
    textAlign: 'center',
  },
  links: {
  },
  footerTitle: {
    textDecoration: 'underline',
    display: 'block'
  },
  column: {
    padding: '1em',
    [theme.breakpoints.only('xs')]: {
      margin: '0 auto',
      textAlign: 'center',
    }
  },
  btn: {
    minWidth: '195px !important',
    fontSize: '0.7rem !important',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '140px !important'
    },
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      transition: 'background-color 1s ease'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <Grid
        container
        className={classes.links}>
        <Grid 
          item 
          sm={3}
          xs={6}
          className={classes.column}>
          <Typography className={classes.footerTitle} variant="subtitle" gutterBottom>
            Customer Service
          </Typography>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Returns</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Feedback</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Gift Cards</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Free Beer</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Link</Typography>
          </a>
        </Grid>
        <Grid 
          item 
          sm={3}
          xs={6}
          className={classes.column}>
          <Typography className={classes.footerTitle} variant="subtitle" gutterBottom>
            About
          </Typography>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Events</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>
              Investor Relations
            </Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>
              Press Inquiries
            </Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Careers</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Non-Profit</Typography>
          </a>
        </Grid>
        <Grid 
          item 
          sm={3}
          xs={6}
          className={classes.column}>
          <Typography className={classes.footerTitle} variant="subtitle" gutterBottom>
            Explore
          </Typography>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>VR (Beta)</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>Gift Registry</Typography>
          </a>
          <a href="/#!">
            <Typography variant="body2" gutterBottom>My Account</Typography>
          </a>
        </Grid>
        <Grid
          item
          sm={3}
          xs={6}
          className={classes.column}>
          <Typography className={classes.footerTitle} variant="subtitle" gutterBottom>
            Stay in Contact
          </Typography>
          <TextField 
            id="outlined-basic" 
            label="Email Address" 
            variant="outlined" />
          <br />
          <Button
            className={classes.btn}
            href="/#!"
            variant="outlined"
            color="default">
            Submit
          </Button>
          </Grid>
      </Grid>
    </div>
  )
}

export default Footer