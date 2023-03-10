import styles from "./Contact.module.css"


const Contact = () => {
  // const form = useRef()

  // const sendEmail = (evt) => {
  //   console.log(form.current, "form")
  //   evt.preventDefault()
  //   emailService.sendEmail(form)
  //   evt.target.reset()
  // }
  
  return (  
    <div className={styles.container} id="contact">
      <h1>Let's work together<span>!</span></h1>
      <div className={styles.buttons}>
        <a href="mailto:christopherecampbell@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/campbell6/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        <a href="https://github.com/ChrisCampbell1/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
      </div>
      <img src="/assets/logo.png" alt="logo" />
      {/* <form ref={form} onSubmit={sendEmail}>
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
      </form> */}
    </div>
  )
}

export default Contact;
