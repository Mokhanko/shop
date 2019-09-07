import React from 'react';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  PriceStyle,
  NameStyle,
  CustomButtonStyle
} from './styles';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <CollectionItemContainer>
    <ImageContainer className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameStyle>{name}</NameStyle>
      <PriceStyle>{price}$</PriceStyle>
    </CollectionFooterContainer>
    <CustomButtonStyle onClick={() => addItem(item)} inverted>Add to cart</CustomButtonStyle>
  </CollectionItemContainer>
)};

export default connect(null,mapDispatchToProps)(CollectionItem);
