import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss'

import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { signOutStart } from '../../redux/user/userActions'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './HeaderStyles'

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )
    }
    <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
