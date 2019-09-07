import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { selectCurrentUser } from '../../redux/user';
import { selectCartHidden } from '../../redux/cart';
import { signOutStart } from '../../redux/user';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './styles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>shop</OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={signOutStart}>sign out</OptionLink>
          :
          <OptionLink to='/signin'>sign in</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
