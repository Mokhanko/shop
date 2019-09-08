import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../customButton';
import CartItem from '../cartItem';
import { selectCartItems } from '../../redux/cart';
import { toggleCartHidden } from '../../redux/cart';
import { CartDropdownContainer, CartItemsStyles, EmptyMessageStyle } from './styles';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsStyles>
      {
        cartItems.length ?
          (cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          )))
          : (
            <EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>
          )
      }
    </CartItemsStyles>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
    >
      Checkout
    </CustomButton>
  </CartDropdownContainer>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));
