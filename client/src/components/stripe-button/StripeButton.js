import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_1XMemRBuZH4LUNMOolEnvbPn'

  const onToken = async (token) => {
    try {
      const response = await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token
        }
      })
      alert('Payment Successful', response)
    } catch (err) {
      console.log('Payment Error: ', JSON.parse(err))
      alert('There was an issue with your payment. Please use valid info.')
    }
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Matt Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton
