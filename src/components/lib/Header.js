import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header.css'

const Header = React.memo(() => (
  <div>
    <div className="Header">
      <Link to="/" className="logo_horizontal-1" />
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">
          SO FUNKTIONIERT’S
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            SONDERANGEBOTE
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <div className="icon" />
            MEIN BEREICH
            <div className="arrow" />
          </button>
          <div className="dropdown-content">
            <div><Link className="dropdown--item" to="#">My published jokes</Link></div>
            <div><Link className="dropdown--item" to="#">My saved jokes</Link></div>
            <div><Link className="dropdown--item" to="#">Account Information</Link></div>
            <div><Link className="dropdown--item" to="#">Publish new joke</Link></div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-body">
      <div className="header--title">The Joke Bible</div>
      <div className="header--subtitle">Daily Laughs for you and yours</div>
      <div className="header--search">
      <form>
          <input className="header--search_input" type="text" placeholder="How can we make you laugh today?" name="lastname" />
        <div className="search-icon"/>
      </form>
      </div>
    </div>
  </div>
))

export default Header
