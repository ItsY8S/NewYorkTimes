import React, { Component } from 'react'
import '../assets/css/App.css'
import AuthorPicture from '../assets/images/authorPicture.jpg'
import Navigation from './Navigation'
import Article from './Article'

class App extends Component {
  state = {
    query: '',
    articles: [],
    currentArticle: 0
  }

  query = event => {
    this.setState({
      query: event.target.value
    })
  }

  previous = () => {
    if (this.state.currentArticle > 0) {
      this.setState({
        currentArticle: this.state.currentArticle - 1
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
    var url = `https://randomuser.me/api/?results=10`
    var req = new Request(url)
    fetch(req)
      .then(rsp => rsp.json())
      .then(response => {
        this.setState({
          pictures: response.results
        })
        console.log(response.results)
      })
  }

  getArticles = event => {
    event.preventDefault()
    if (this.state.query !== '') {
      var url = `https://content.guardianapis.com/search?show-fields=body%2C%20headline&q=${
        this.state.query
      }&api-key=3d1a3868-5e4a-4568-9ac3-1a88dc0852a0`
    } else {
      var url = `https://content.guardianapis.com/search?show-fields=body%2C%20headline&api-key=3d1a3868-5e4a-4568-9ac3-1a88dc0852a0`
    }
    console.log(url)
    var req = new Request(url)
    fetch(req)
      .then(rsp => rsp.json())
      .then(response => {
        var articles = response.response.results
        this.setState({
          articles
        })
      })

    this.getPersonImage()
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

        {this.state.articles.length > 1 ? (
          <div>
            {this.state.pictures ? (
              <img
                className="profilePicture"
                src={
                  this.state.pictures[this.state.currentArticle].picture.large
                }
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
              previous={this.previous}
              next={this.next}
              data={this.state.articles[this.state.currentArticle]}
            />
          </div>
        ) : (
          <div className="flex">
            <h1>No Articles Yet.</h1>
            <button className="button white" onClick={this.getArticles}>
              <a href="">View Top Stories</a>
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default App
