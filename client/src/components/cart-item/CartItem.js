import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItemStyles'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  img: {
    maxWidth: '50px'
  },
  copy: {
    fontSize: '12px'
  }
})

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = useStyles()
  return (
    // <CartItemContainer>
    //   <CartItemImage src={imageUrl} alt='item' />
    //   <ItemDetailsContainer>
    //     <span>{name}</span>
    //     <span>
    //       {quantity} x ${price}
    //       {
    //         quantity > 1 ? (
    //           <span>
    //             {' '} = ${quantity * price}
    //           </span>
    //         ) : null
    //       }
    //     </span>
    //   </ItemDetailsContainer>
    // </CartItemContainer>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <img className={classes.img} src={imageUrl} alt="item" />
      </Grid>
      <Grid className={classes.copy} item xs={9}>
        <p>
          {name}
        </p>
        <span>
          {quantity} x ${price}
          {
            quantity > 1 ? (
              <span>
                {' '} = ${quantity * price}
              </span>
            ) : null
          }
        </span>
      </Grid>
    </Grid>
  )
}

export default React.memo(CartItem)
