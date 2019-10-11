import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

import { CartIconContainer, ItemCount } from './CartIconStyles'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon styles={{ height: '24px', width: '24px' }} />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
