import React from 'react';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import './styles.scss';

const SignInSignUpPage = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
