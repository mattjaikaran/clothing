import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import './Auth.scss'

const Auth = () => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
)

export default Auth
