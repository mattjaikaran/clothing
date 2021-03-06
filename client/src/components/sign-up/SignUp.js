import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { SignUpContainer, Title } from './SignUpStyles'
import { signUpStart } from '../../redux/user/userActions'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      alert('Passwords dont match')
      return
    }
    signUpStart({ displayName, email, password })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email/password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
          />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
          />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
          />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
          />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
