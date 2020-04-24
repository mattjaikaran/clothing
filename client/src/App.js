import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/Header'
import { GlobalStyle } from './globalStyles'

import { selectCurrentUser } from './redux/user/userSelectors'
import { checkUserSession } from './redux/user/userActions'

import Spinner from './components/spinner/Spinner'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import ProductDetail from './components/product-detail/ProductDetail'
import Footer from './components/footer/Footer'

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const ShopPage = lazy(() => import('./pages/shop/Shop'))
const Auth = lazy(() => import('./pages/auth/Auth'))
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route path='/product/:id' component={ProductDetail} />
            <Route
              exact
              path='/signin'
              render={() => currentUser ? (
                  <Redirect to='/' />
                ) : (<Auth />)
              }/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
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
