import React from 'react';
import { CartItemContainer, ImgContainer, ItemDetailsContainer, ItemProperty} from './styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemProperty>{name}</ItemProperty>
      <ItemProperty>{quantity} x ${price}</ItemProperty>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
