import React from 'react'
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"
import Instagram from "../img/instagram.png"
import LinkedIn from "../img/linkedin.png"



const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ChinazaBelolisa" target="_blank" rel="noreferrer">
        <img src={Github} alt="" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={Facebook} alt="" />
      </a>
      <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/chinaza-belolisa-5b5223206/" target="_blank" rel="noreferrer">
        <img src={LinkedIn} alt="" />
      </a>
      <span>Made with <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer