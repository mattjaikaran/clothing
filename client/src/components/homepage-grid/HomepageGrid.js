import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2%',
    [theme.breakpoints.only('xs')]: {
      marginTop: '-7%'
    },
  },
  imgContainer: {
    // textAlign: 'left'
  },
  gridImg: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.only('xs')]: {
      marginTop: '7%',
    },
  },
  copyContainer: {
    marginTop: '8%',
    padding: '12px 0 12px 17% !important',
    [theme.breakpoints.down('sm')]: {
      padding: '0 !important',
      marginLeft: 'auto',
      marginTop: '0',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '12px 0 12px 10% !important'
    },
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center'
    },
  },
  copy: {
    textAlign: 'left',
    lineHeight: '28px',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center'
    },
  },
  btn: {
    minWidth: '160px !important',
    fontSize: '0.7rem !important',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      transition: 'background-color 1s ease'
    }
  }
}))

const HomepageGrid = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={3}>

      <Grid item xs={12} sm={6}>
        <img 
          className={classes.gridImg}
          src="https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/flaunter-0cOH0qEVZzE-unsplash.jpg?alt=media&token=50e5755e-40be-4acf-8735-238bb399efe4" />
      </Grid>
      <Grid className={classes.copyContainer} item xs={12} sm={6}>
        <h2 className={classes.copy}>
          Explore elegant styles <br />
          for a night out. 
        </h2>
        <div>
          <Button 
            className={classes.btn} 
            href="/shop/womens"
            variant="outlined" 
            color="default">
            Shop Now
          </Button>
        </div>
      </Grid>

      <Hidden xsDown>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <h2 className={classes.copy}>
            Shop our latest <br />
            Mens Collection.
        </h2>
          <div>
            <Button 
              className={classes.btn}
              variant="outlined" 
              href="/shop/mens"
              color="default">
              Shop Now
          </Button>
          </div>
        </Grid>
      </Hidden>
      <Grid className={classes.imgContainer} item xs={12} sm={6}>
        <img
          className={classes.gridImg}
          src="https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg?alt=media&token=ca1f1bc0-70df-4ea6-b7ec-3e6ceda2c4a7" />
      </Grid>
      <Hidden smUp>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <h2 className={classes.copy}>
            Shop our latest <br />
            Mens Collection.
        </h2>
          <div>
            <Button 
              className={classes.btn} 
              variant="outlined"
              href="/shop/mens"
              color="default">
              Shop Now
          </Button>
          </div>
        </Grid>
      </Hidden>

      <Grid className={classes.imgContainer} item xs={12} sm={6}>
        <img
          className={classes.gridImg}
          src="https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/vadim-sherbakov-tCICLJ5ktBE-unsplash.jpg?alt=media&token=1b938314-7b1a-45cc-9c85-f12ac52ee341" />
      </Grid>
      <Grid className={classes.copyContainer} item xs={12} sm={6}>
        <h2 className={classes.copy}>
          On the go? <br />
          Check out our latest <br />
          Travel Accessories.
        </h2>
        <div>
          <Button 
            className={classes.btn}
            href="/shop/hats"
            variant="outlined" 
            color="default">
            Shop Now
          </Button>
        </div>
      </Grid>

      <Hidden xsDown>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <h2 className={classes.copy}>
            Shop our <br />
            Featured Collection.
          </h2>
          <div>
            <Button 
              className={classes.btn} 
              href="/shop/jackets"
              variant="outlined"
              color="default">
              Shop Now
          </Button>
          </div>
        </Grid>
      </Hidden>
      <Grid className={classes.imgContainer} item xs={12} sm={6}>
        <img
          className={classes.gridImg}
          src="https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/jase-bloor-0-zRwyNlRhA-unsplash.jpg?alt=media&token=043d309c-8c96-4422-b779-579c22026478" />
      </Grid>
      <Hidden smUp>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <h2 className={classes.copy}>
            Shop our <br />
            Featured Collection.
          </h2>
          <div>
            <Button 
              className={classes.btn}
              href="/shop/jackets"
              variant="outlined" 
              color="default">
              Shop Now
            </Button>
          </div>
        </Grid>
      </Hidden>

    </Grid>
  )
}

export default HomepageGrid