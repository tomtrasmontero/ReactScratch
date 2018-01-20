import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  }
  // this will be executed when a component throws an error
  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      // this line will execute if everything is good
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
