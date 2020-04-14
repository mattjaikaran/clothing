import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/molecular.svg'
import AppBar from '@material-ui/core/AppBar'
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
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'absolute',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      position: 'sticky',
    }
  }
}))

const Header = ({ currentUser, hidden, signOutStart }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <OptionLink to="#!" as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )
        }
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </AppBar>
  )
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
