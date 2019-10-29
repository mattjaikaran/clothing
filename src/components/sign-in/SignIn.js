import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput'
import { SignInContainer, ButtonContainer, Title } from './SignInStyles'
import CustomButton from '../custom-button/CustomButton'

import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const { emailSignInStart } = this.props
    emailSignInStart(email, password)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { googleSignInStart } = this.props
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({
    email, password
  }))
})

export default connect(null, mapDispatchToProps)(SignIn)
