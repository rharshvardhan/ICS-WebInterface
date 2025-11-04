import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="top-nav">
      <div className="container nav-content">
        <a className="brand" href="#">
          <img 
            src="https://www.infinite.com/wp-content/uploads/2024/06/ICS-Logo.svg" 
            alt="Infinite Logo" 
          />
          <span>AI Marketplace</span>
        </a>
        <nav>
          <a href="#featured">Featured</a>
          <a href="#catalog">Capabilities</a>
          <a href="#partners">Partners</a>
          <a href="#stories">Use Cases</a>
        </nav>
        <a className="nav-cta" target="_blank" href="https://agreeable-pebble-0a5f3850f.3.azurestaticapps.net/">Request Demo</a>
      </div>
    </header>
  )
}

export default Navbar
