import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart';
import { selectCartItemsCount } from '../../redux/cart';
import { CartIconContainer, ItemCountContainer, ShopIconContainer } from './styles'

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShopIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
