import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import './HeroSlider.css'

const useStyles = makeStyles({
  carouselImg: {
    width: '100%'
  }
})

const Item = (props) => {
  const classes = useStyles()
  const { name, description, imgSrc } = props.item
  return (
    <div className="carouselImgContainer">
      <img 
        className={classes.carouselImg} 
        src={imgSrc} 
        alt={name} />
    </div>
  )
}

const HeroSlider = () => {
  const items = [
    {
      name: "Random Name #1",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/andrew-neel-HqtYwlY9dxs-unsplash.jpg?alt=media&token=3937b169-d6c2-4b17-950a-c13850fe52bc"
    },
    {
      name: "Hello World!",
      description: "Probably the most random thing you have ever seen!",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/zdenek-machacek-lmZtT6q8tt0-unsplash.jpg?alt=media&token=6e56df04-1d4a-4ec4-a51d-baef07b374e1"
    }
  ]
  return (
    <Carousel autoPlay={false}>
      {items.map(item => <Item key={item.name} item={item} />)}
    </Carousel>
  )
}

export default HeroSlider