import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { CartDropdownContainer, CartItemsContainer } from './CartDropdownStyles'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
    <CustomButton
      styles={{ marginTop: 'auto' }} 
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>
      CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
