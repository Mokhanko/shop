import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const onToken = token => {
    axios({
      url : 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.warn('Some payment error', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please sure you use th provided credit card'
      );
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='MyShop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
