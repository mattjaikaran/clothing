import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import './HeroSlider.css'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  carouselImg: {
    width: '100%'
  },
  carouselImgContainer: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20vh',
    color: 'white',
    opacity: '0.9',
    marginTop: '35px'
  },
  header: {
    textShadow: '1px 1px #000'
  },
  cta: {
    backgroundColor: 'black',
    textAlign: 'center',
    alignContent: 'center',
    margin: '0 auto',
    maxWidth: '200px',
    '&:hover': {
      backgroundColor: '#95a5a6'
    }
  }
}))

const Item = (props) => {
  const classes = useStyles()
  const { name, description, imgSrc, link, linkCopy } = props.item
  return (
    <div 
      className={classes.carouselImgContainer} 
      style={{backgroundImage: `url(${imgSrc})`}}>
      <h1 className={classes.header}>{name}</h1>
      <Button
        variant="contained" 
        color="primary"
        className={classes.cta}
        to={link}>
        {linkCopy}
      </Button>
    </div>
  )
}

const HeroSlider = () => {
  const items = [
    {
      name: "Up to 90% off on designer jackets",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/andrew-neel-HqtYwlY9dxs-unsplash.jpg?alt=media&token=3937b169-d6c2-4b17-950a-c13850fe52bc",
      linkCopy: "Shop Outwear",
      link: "/shop/jackets",
    },
    {
      name: "Hello World!",
      description: "Probably the most random thing you have ever seen!",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/zdenek-machacek-lmZtT6q8tt0-unsplash.jpg?alt=media&token=6e56df04-1d4a-4ec4-a51d-baef07b374e1",
      linkCopy: "Explore Accessories",
      link: "/shop/hats",
    }
  ]
  return (
    <Carousel>
      {items.map(item => <Item key={item.name} item={item} />)}
    </Carousel>
  )
}

export default HeroSlider