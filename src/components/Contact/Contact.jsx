import styles from "./Contact.module.css"
import * as emailService from '../../services/emails'
import { useState } from "react"
const Contact = () => {
  const [form, setForm] = useState({})

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  const sendEmail = (evt) => {
    console.log(form, "form")
    evt.preventDefault()
    emailService.sendEmail(form)
    evt.target.reset()
  }
  
  return (  
    <div className={styles.container} id="contact">
      <h1>Let's work together<span>!</span></h1>
      <div className={styles.buttons}>
        {/* <a href="mailto:christopherecampbell@gmail.com">Email Me</a> */}
        <a href="https://www.linkedin.com/in/campbell6/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        <a href="https://github.com/ChrisCampbell1/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
      </div>

      <form onSubmit={sendEmail}>
        <div className={styles.input}>
          <label htmlFor="name-input">Name<span>:</span></label>
          <input type="text" name="from_name" id="name-input" required onChange={handleChange}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="email-input">Email<span>:</span></label>
          <input type="email" name="reply_to" id="email-input" required onChange={handleChange}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="message-input">Message<span>:</span></label>
          <textarea name="message" id="message-input" cols="30" rows="5" required onChange={handleChange}></textarea>
        </div>
        <div className={styles.input}>
          <input type="submit" value="Send Email" className={styles.button}/>
        </div>
      </form>
      <img src="/assets/logo.png" alt="logo" />
    </div>
  )
}

export default Contact;
