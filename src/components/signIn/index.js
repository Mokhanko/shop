import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput';
import CustomButton from  '../customButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './styles';

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const {value, name} = e.target;
    setCredentials({ ...userCredentials, [name]: value })
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
          autoComplete='off'
        />
        <ButtonsBarContainer>
          <CustomButton type='submit' value='Submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
};

export default connect(null, mapDispatchToProps)(SignIn);
