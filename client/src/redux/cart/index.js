import { createAction, handleActions } from 'redux-actions';
import { createSelector  } from 'reselect';
import { addItemToCart, removeItemFromCart } from "./utils";

const initialState = {
  hidden: true,
  cartItems: []
};

export const toggleCartHidden = createAction('TOGGLE_CART_HIDDEN');

export const addItem =  createAction('ADD_ITEM', item => ({ item }));

export const clearItem = createAction('CLEAR_ITEM_FROM_CART', item => ({ item }));

export const removeItem = createAction('REMOVE_ITEM_FROM_CART', item => ({ item }));

export const clearCart = createAction('CLEAR_CART');

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

export default handleActions({
  [toggleCartHidden]: state => ({
    ...state,
    hidden: !state.hidden
  }),
  [addItem]: (state, { payload }) => ({
    ...state,
    cartItems: addItemToCart(state.cartItems, payload.item)
  }),
  [clearItem]: (state, { payload }) => ({
    ...state,
    cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.item.id
       )
  }),
  [removeItem]: (state, { payload }) => ({
    ...state,
    cartItems: removeItemFromCart(state.cartItems, payload.item)
  }),
  [clearCart]: state => ({
    ...state,
    cartItems: []
  })
}, initialState);
