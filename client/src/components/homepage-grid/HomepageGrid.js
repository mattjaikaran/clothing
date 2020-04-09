import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'red',
  },
  imgContainer: {
    // textAlign: 'left'
  },
  gridImg: {
    width: '100%',
    height: 'auto',
  },
  copyContainer: {
    marginTop: '8%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0'
    }
  },
  copy: {
    textAlign: 'center',
  },
  btn: {
    textAlign: 'center'
  }
}))

const HomepageGrid = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6}>
        <img 
          className={classes.gridImg}
          src="https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/flaunter-0cOH0qEVZzE-unsplash.jpg?alt=media&token=50e5755e-40be-4acf-8735-238bb399efe4" />
      </Grid>
      <Grid className={classes.copyContainer} item xs={12} sm={6}>
        <p className={classes.copy}>
          Explore elegant styles for a night out. 
        </p>
        <div className={classes.btn}>
          <Button variant="outlined" color="default">
            Shop Womens
          </Button>
        </div>
      </Grid>

      <Hidden xsDown>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <p className={classes.copy}>
            Shop our latest Mens Collection.
        </p>
          <div className={classes.btn}>
            <Button variant="outlined" color="default">
              Shop Mens
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
          <p className={classes.copy}>
            Shop our latest Mens Collection.
        </p>
          <div className={classes.btn}>
            <Button variant="outlined" color="default">
              Shop Mens
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
        <p className={classes.copy}>
          On the go? Check out our latest Travel Accessories.
        </p>
        <div className={classes.btn}>
          <Button variant="outlined" color="default">
            Shop Accessories
          </Button>
        </div>
      </Grid>

      <Hidden xsDown>
        <Grid className={classes.copyContainer} item xs={12} sm={6}>
          <p className={classes.copy}>
            Shop our Featured Collection.
        </p>
          <div className={classes.btn}>
            <Button variant="outlined" color="default">
              Shop Featured
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
          <p className={classes.copy}>
            Shop our Featured Collection.
        </p>
          <div className={classes.btn}>
            <Button variant="outlined" color="default">
              Shop Featured
          </Button>
          </div>
        </Grid>
      </Hidden>

    </Grid>
  )
}

export default HomepageGrid