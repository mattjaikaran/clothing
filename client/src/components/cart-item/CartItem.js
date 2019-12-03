import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItemStyles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
        {
          quantity > 1 ? <span>
            {' '} = ${quantity * price}
          </span> : null
        }
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
