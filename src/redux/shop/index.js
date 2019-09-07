import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState = {
  shopData: null,
  isFetching: false,
  errorMessage: undefined
};

export const fetchCollectionStart = createAction('FETCH_COLLECTION_START');

export const fetchCollectionSuccess = createAction('FETCH_COLLECTION_SUCCESS', collectionsMap => ({
  collectionsMap
}));

export const fetchCollectionError = createAction('FETCH_COLLECTION_FAILURE', error => ({ error }));

const selectShop = state => state.shop;

export const selectItems = createSelector(
  [selectShop],
  shop => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
  [selectItems],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectItems],
  collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.shopData
);

export default  handleActions({
  [fetchCollectionStart]: state => ({
    ...state,
    isFetching: true
  }),
  [fetchCollectionSuccess]: (state, { payload}) => ({
    ...state,
    isFetching: false,
    shopData: payload.collectionsMap
  }),
  [fetchCollectionError]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    errorMessage: payload.error
  })
}, initialState);
