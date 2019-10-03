import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import { auth, createUserProfileDocument } from './firebase/firebase'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Auth} />
        </Switch>
      </div>
    )
  }
}

export default App
