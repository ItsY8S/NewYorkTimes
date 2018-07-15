import React from 'react'
import '../assets/css/Navigation.css'
import Logo from '../assets/images/newspaper.svg'
import ShareIcon from '../assets/images/share.svg'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="Navigation container">
        <img className="nav-icon" src={Logo} alt="Newspaper Icon" />

        <div id="searchBar">
          <input id="search" type="text" />
          <button>Search</button>
        </div>

        <img className="nav-icon" src={ShareIcon} alt="Share Icon" />
      </nav>
    )
  }
}

export default Navigation
