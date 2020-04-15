import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { CartDropdownContainer, CartItemsContainer } from './CartDropdownStyles'
import Button from '@material-ui/core/Button'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            )) : (
              <span className="empty-message">Your cart is empty</span>
            )}
      </CartItemsContainer>
      <Button
        variant="outlined"
        style={{ marginTop: 'auto' }}
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>
        CHECKOUT
    </Button>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
