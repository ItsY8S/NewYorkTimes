import React, { Component } from 'react'
import '../assets/css/App.css'
import AuthorPicture from '../assets/images/authorPicture.jpg'
import Navigation from './Navigation'
import Article from './Article'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="background">&nbsp;</div>
        <img className="profilePicture" src={AuthorPicture} />
        <Article />
      </div>
    )
  }
}

export default App
