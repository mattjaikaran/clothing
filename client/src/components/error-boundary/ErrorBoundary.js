import React, { Component } from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundaryStyles'

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>
            A Dog Ate This Page 
          </ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
