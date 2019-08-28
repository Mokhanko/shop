import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';
import './styles.scss';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShopIcon className='shop-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
