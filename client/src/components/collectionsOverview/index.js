import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop';
import CollectionPreview from "../collectionPreview";
import { CollectionsOverviewContainer } from './styles';


const mapStateToProps = createStructuredSelector({
  shopData: selectCollectionsForPreview
});

const CollectionOverview = ({ shopData }) => (
  <CollectionsOverviewContainer>
    {
      shopData.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </CollectionsOverviewContainer>
);

export default connect(mapStateToProps, null)(CollectionOverview);
