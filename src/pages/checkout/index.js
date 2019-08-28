import React from 'react';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors';
import CheckOutItem from '../../components/checkoutItem';
import './styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>product</span>
      </div>
      <div className='header-block'>
        <span>description</span>
      </div>
      <div className='header-block'>
        <span>quantity</span>
      </div>
      <div className='header-block'>
        <span>price</span>
      </div>
      <div className='header-block'>
        <span>remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
      )
    }
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

export default connect(mapStateToProps, null)(CheckoutPage);
