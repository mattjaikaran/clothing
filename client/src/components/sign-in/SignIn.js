import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput'
import { SignInContainer, ButtonContainer, Title } from './SignInStyles'
import CustomButton from '../custom-button/CustomButton'

import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
          />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
          />
        <ButtonContainer className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
            >
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({
    email, password
  }))
})

export default connect(null, mapDispatchToProps)(SignIn)
