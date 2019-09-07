import React from 'react';
import { connect} from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart';
import {
  CheckoutItemContainer,
  ImageContainer,
  ImageStyle,
  ItemPropertysStyle,
  ArrowStyle,
  QuantityStyle,
  ValueStyle,
  RemoveButtonStyle
} from './styles'

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImageStyle src={imageUrl} alt='item'/>
      </ImageContainer>
      <ItemPropertysStyle>{name}</ItemPropertysStyle>
      <QuantityStyle>
        <ArrowStyle onClick={() => removeItem(cartItem)}>&#10094;</ArrowStyle>
        <ValueStyle>{quantity}</ValueStyle>
        <ArrowStyle onClick={() => addItem(cartItem)}>&#10095;</ArrowStyle>
      </QuantityStyle>
      <ItemPropertysStyle>{price}</ItemPropertysStyle>
      <RemoveButtonStyle onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonStyle>
    </CheckoutItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CheckOutItem);
