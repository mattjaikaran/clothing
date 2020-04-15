import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItemStyles'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  btn: {
    width: '80%',
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.7,
    height: '40px',
    position: 'absolute',
    marginTop: '250px',
    display: 'none',
    '&:hover': {
      transition: 'background-color 0.5s ease',
      backgroundColor: 'white',
      color: 'black',
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      opacity: 0.9,
      minWidth: 'unset',
      padding: '0 10px',
    }
  }
}))


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  const classes = useStyles()
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <Button 
        className={classes.btn}
        variant="outlined" 
        onClick={() => addItem(item)}>
        Add To Cart
      </Button>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
