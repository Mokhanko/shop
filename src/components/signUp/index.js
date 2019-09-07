import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { signUpStart } from '../../redux/user';
import { SignUpContainer, SignUpTitle } from './styles';

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const{ displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("passwords don`t match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const{ name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
          autoComplete='off'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
          autoComplete='off'
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
};

export default  connect(null, mapDispatchToProps)(SignUp);
