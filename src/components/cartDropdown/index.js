import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../customButton';
import CartItem from '../cartItem';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCartHidden } from '../../redux/cart/actions';
import './styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
          (cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          )))
          : (
            <span className='empty-message'>Your cart is empty</span>
          )
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
    >
      Checkout
    </CustomButton>
  </div>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));
