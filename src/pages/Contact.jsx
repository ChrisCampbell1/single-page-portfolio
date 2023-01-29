import { Link } from "react-router-dom"

const Contact = () => {
  return (  
    <div className="pageContainer">
      <h1>Let's work together!</h1>
      <div className="contactCardContainer">
        <div className="contactCard">
          <a href="mailto: christopherecampbell@gmail.com">Email Me</a>
        </div>
        <div className="contactCard">
          <a href="tel: 248-877-0395">Call Me</a>
        </div>
        <div className="contactCard">
          <a href="https://github.com/ChrisCampbell1/">GitHub</a>
        </div>
        <div className="contactCard">
          <a href="https://www.linkedin.com/in/campbell6/">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
