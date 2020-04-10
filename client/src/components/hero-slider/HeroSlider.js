import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'

const Item = (props) => {
  const { name, description, imgSrc } = props.item
  return (
    <Paper>
      <h2>{name}</h2>
      <p>{description}</p>
      {/* <img className="carouselImg" src={imgSrc} alt={name} /> */}
    </Paper>
  )
}

const HeroSlider = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgSrc: ""
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]
  return (
    <Carousel autoPlay={false}>
      {items.map(item => <Item key={item.name} item={item} />)}
    </Carousel>
  )
}

export default HeroSlider