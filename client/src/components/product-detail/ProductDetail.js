import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ProductDetail = (props) => {
  // const { name, price, imageUrl } = props.item
  console.log(props)
  return (
    props.match.params.id  ? (
      <Grid container spacing={3}>
        <Grid item md={7}>
          <p>fukc</p>
          {/* <img src={props.item.imageUrl} /> */}
        </Grid>
        <Grid item md={5}>
          <h3>{props.toString()}</h3>
          {/* <h5>${props.item.price}</h5>
        <p>{props.item.name}</p> */}
        <p>derp</p>
          <Button
            variant="outlined"
            onClick={() => props.addItem(props.item)}>
            Add To Cart
        </Button>
        </Grid>
      </Grid>
    ) : <p>product does not exist</p>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductDetail)