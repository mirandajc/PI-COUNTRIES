import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import github from './icone-github-noir.png'
import linkedin from './logo-linkedin-removebg-preview.png'
function Footer() {
  return (
    <div className="footer">
      <div>
          <p>Trabajo individual Henry</p>
      </div>
      <div>
          <Link to='https://github.com/mirandajc'>
          <a href="https://github.com/mirandajc"><img src={github} className="footer-icon-github"alt="" /></a>
              
          </Link>
      </div>
      <div>
          <a href="https://www.linkedin.com/in/jocelynmiranda/"><img src={linkedin} className="footer-icon-linkedin" alt /></a>
      </div>
    </div>
  )
}

export default Footer