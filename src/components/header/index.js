import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase';
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { selectCurrentUser } from '../../redux/user/selectors';
import { selectCartHidden } from '../../redux/cart/selectors';
import './styles.scss';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>shop</Link>
      <Link className='option' to='/shop'>contact</Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>sign out</div>
          :
          <Link className='option' to='/signin'>sign in</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
);

export default connect(mapStateToProps, null)(Header);
