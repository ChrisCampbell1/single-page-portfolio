import styles from "./Contact.module.css"
import React, { useRef } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const publicKey = `${process.env.EMAIL_PUBLIC_KEY}`
  const serviceId = `${process.env.EMAIL_SERVICE_ID}`
  const templateId = `${process.env.EMAIL_TEMPLATE_ID}`



  const sendEmail = (evt) => {
    console.log(form)
    evt.preventDefault()
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey,
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
    evt.target.reset()
  }
  
  return (  
    <div className={styles.container}>
      <h1>Let's work together!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.input}>
          <label htmlFor="name-input">Name</label>
          <input type="text" name="from_name" id="name-input" required/>
        </div>
        <div className={styles.input}>
          <label htmlFor="email-input">Email</label>
          <input type="email" name="reply_to" id="email-input" required/>
        </div>
        <div className={styles.input}>
          <label htmlFor="message-input">Message</label>
          <textarea name="message" id="message-input" cols="30" rows="10" required></textarea>
        </div>
        <div className={styles.input}>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  )
}

export default Contact;
