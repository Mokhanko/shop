import React from 'react';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import { SignInAndSignUpContainer } from './styles'

const SignInSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInSignUpPage;
