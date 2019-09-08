import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop';
import Spinner from '../../components/spinner';
import CollectionOverview from './index';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionOverview);

export default CollectionOverviewContainer;
