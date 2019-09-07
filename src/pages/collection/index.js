import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collectionItem';
import { selectCollection } from '../../redux/shop';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './styles';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default connect(mapStateToProps, null)(CollectionPage);
