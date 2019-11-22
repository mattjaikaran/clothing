import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import { AuthContainer } from './AuthStyles'

const Auth = () => (
  <AuthContainer>
    <SignIn />
    <SignUp />
  </AuthContainer>
)

export default Auth
