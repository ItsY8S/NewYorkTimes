import React from 'react'
import '../assets/css/Navigation.css'
import Logo from '../assets/images/newspaper.svg'
import ShareIcon from '../assets/images/share.svg'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="Navigation container">
        <a href="/">
          <img className="nav-icon" src={Logo} alt="Newspaper Icon" />
        </a>

        <form id="searchBar" onSubmit={this.props.getArticles}>
          <input id="search" type="text" onChange={this.props.query} />
          <button id="searchBtn">Search</button>
        </form>

        <img className="nav-icon" src={ShareIcon} alt="Share Icon" />
      </nav>
    )
  }
}

export default Navigation
