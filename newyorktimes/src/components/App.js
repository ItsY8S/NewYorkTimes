import React, { Component } from 'react'
import '../assets/css/App.css'
import Navigation from './Navigation'
import Article from './Article'
import Loader from './Loader'

class App extends Component {
  state = {
    query: '',
    articles: [],
    currentArticle: 0,
    isSearching: false
  }

  query = event => {
    this.setState({
      query: event.target.value
    })
  }

  previous = () => {
    if (this.state.currentArticle > 0) {
      this.setState({
        currentArticle: this.state.currentArticle - 1,
        previous: true
      })
    }
  }

  next = () => {
    if (this.state.currentArticle < 9) {
      this.setState({
        currentArticle: this.state.currentArticle + 1
      })
    }
  }

  getPersonImage = () => {
    var imageUrl = `https://randomuser.me/api/?results=10`
    var req = new Request(imageUrl)
    fetch(req)
      .then(rsp => rsp.json())
      .then(response => {
        this.setState({
          pictures: response.results
        })
      })
  }

  getArticles = event => {
    if (event) {
      event.preventDefault()
    }
    this.setState({
      isSearching: true
    })
    let url = ''
    if (this.state.query !== '') {
      url = `https://content.guardianapis.com/search?show-fields=body%2C%20headline&q=${
        this.state.query
      }&api-key=3d1a3868-5e4a-4568-9ac3-1a88dc0852a0`
    } else {
      url = `https://content.guardianapis.com/search?show-fields=body%2C%20headline&api-key=3d1a3868-5e4a-4568-9ac3-1a88dc0852a0`
    }
    var req = new Request(url)
    fetch(req)
      .then(rsp => rsp.json())
      .then(response => {
        var articles = response.response.results
        this.setState({
          articles,
          isSearching: false
        })
      })

    this.getPersonImage()
  }

  renderPlaceholder = () => {
    this.getArticles()
  }

  renderBody = () => {
    return this.state.articles.length > 1 ? (
      <div>
        {this.state.pictures ? (
          <img
            className="profilePicture"
            src={this.state.pictures[this.state.currentArticle].picture.large}
            alt="Test"
          />
        ) : (
          <img
            className="profilePicture"
            src="http://via.placeholder.com/350x350"
            alt="Test"
          />
        )}
        <Article
          type={this.state.articles}
          currentArticle={this.state.currentArticle}
          previous={this.previous}
          next={this.next}
          data={this.state.articles[this.state.currentArticle]}
        />
      </div>
    ) : (
      this.renderPlaceholder()
    )
  }

  render() {
    return (
      <div className="App">
        <Navigation
          query={this.query}
          getPersonImage={this.getPersonImage}
          getArticles={this.getArticles}
        />
        <div className="background">&nbsp;</div>
        {this.state.isSearching ? <Loader /> : this.renderBody()}
      </div>
    )
  }
}

export default App
