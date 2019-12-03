import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import CheckoutPage from './pages/checkout/Checkout'

import { GlobalStyle } from './globalStyles'

import { selectCurrentUser } from './redux/user/userSelectors'
import { checkUserSession } from './redux/user/userActions'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => currentUser ? (
              <Redirect to='/' />
            ) : (<Auth />)
          }/>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
