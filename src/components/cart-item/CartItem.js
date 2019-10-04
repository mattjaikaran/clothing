import React from 'react'
import './CartItem.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
        {
          quantity > 1 ? <span>
            {' '} = {quantity * price}
          </span> : null
        }
      </span>
    </div>
  </div>
)

export default CartItem
