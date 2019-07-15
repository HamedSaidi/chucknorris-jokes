import React from 'react'
import '../../css/Footer.css'

const Footer =  React.memo(() => (
  <div className="Footer">
    <span className="get-paid">Got jokes? Get paid for submitting!</span>
    <span className="submit-joke">Submit Joke <div className="submit-joke-icon"/></span>
  </div>
))

export default Footer
