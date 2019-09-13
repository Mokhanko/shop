import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInSignUpPage from './pages/sign-in-and-sign-up';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import CheckOutPage from './pages/checkout';
import Header from './components/header';
import { selectCurrentUser } from './redux/user';
import { checkUserSession } from './redux/user';
import { GlobalStyle } from './globalStyles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route
          exact path='/signin'
          render={() =>
            currentUser
              ?
              (<Redirect to='/'/>)
              :
              (<SignInSignUpPage/>)}
        />
      </Switch>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
