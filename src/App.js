import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInSignUpPage from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDoc } from './firebase';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import CheckOutPage from './pages/checkout';
import Header from './components/header';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/selectors';
import './App.css';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact path='/signin'
            render={() =>
              this.props.currentUser
                ?
                (<Redirect to='/'/>)
                :
                (<SignInSignUpPage />)}
            />
        </Switch>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
