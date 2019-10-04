import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown
