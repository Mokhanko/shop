import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState = {
  currentUser: null,
  error: null
};

export const googleSignInStart = createAction('GOOGLE_SIGN_IN_START');

export const emailSignInStart = createAction('EMAIL_SIGN_IN_START',
    emailAndPassword => ({ emailAndPassword }));

export const signInSuccess = createAction('SIGN_IN_SUCCESS', user => ({ user }));

export const signActionsFailure = createAction('SIGN_IN_FAILURE', error => ({ error }));

export const checkUserSession = createAction('CHECK_USER_SESSION');

export const signOutStart = createAction('SIGN_OUT_START');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');

export const signUpStart = createAction('SIGN_UP_START',
    userCredentials => ({ userCredentials }));

export const signUpSuccess = createAction('SIGN_UP_SUCCESS',
  ({ user, additionalData }) => ({ user, additionalData }));

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);


export default  handleActions({
  [signInSuccess]: (state, { payload }) => ({
    ...state,
    currentUser: payload.user,
    error: null }),
  [signActionsFailure]: (state, { payload}) => ({
    ...state,
    error: payload.error
  }),
  [signOutSuccess]: state => ({
    ...state,
    currentUser: null,
    error: null
  })
}, initialState);
