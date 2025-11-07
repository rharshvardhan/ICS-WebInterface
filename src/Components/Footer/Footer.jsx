import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
    <div className="container footer-content">
      <div>
        <a className="brand" href="#top">
          <img src="https://www.infinite.com/wp-content/uploads/2024/06/ICS-Logo.svg" alt="Infinite Logo"/>
          <span>AI Marketplace</span>
        </a>
        <p className="footer-copy">© <span id="year"></span> Infinite Computer Solutions. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <a href="#">Solutions</a>
        <a href="#">Partners</a>
        <a href="#">Support</a>
        <a href="#">Privacy</a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
