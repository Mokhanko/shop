import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect }from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop';
import CollectionOverviewContainer from '../../components/collectionsOverview/container';
import CollectionPageContainer from '../collection/container';

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

const ShopPage = ({ fetchCollectionStart, match }) => {

  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart]);

  return (
    <div className='shop-page'>
      <Route
        exact path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
};
export default connect(null, mapDispatchToProps)(ShopPage);
